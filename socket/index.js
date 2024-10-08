const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const PORT = process.env.PORT || 8000;

let users = [];

const addUser = (userId, socketId, role) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId, role });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("addUser", (userId, role) => {
    addUser(userId, socket.id, role);
    io.emit("getUsers", users);
  });
  //send, get notification
  socket.on("sendNotification", ({ sender, payment, email }) => {
    const listUserAdmin = users.filter((item) => item.role === "admin");
    if (listUserAdmin.length > 0) {
      listUserAdmin.forEach((item) => {
        const user = getUser(item.userId);
        io.to(user?.socketId).emit("getNotification", {
          sender,
          payment,
          email,
          content: "Mới đặt một đơn hàng",
        });
      });
    }
  });

  socket.on("sendDestroyPayment", ({ sender, payment }) => {
    const listUserAdmin = users.filter((item) => item.role === "admin");
    if (listUserAdmin.length > 0) {
      listUserAdmin.forEach((item) => {
        const user = getUser(item.userId);
        io.to(user?.socketId).emit("getPaymentDestroy", {
          sender,
          payment,
          content: "Mới hủy một đơn hàng",
        });
      });
    }
  });
  //message
  socket.on("sendMessage", ({ sender, receiver, content, createdAt, date }) => {
    if (receiver) {
      const user = getUser(receiver);
      io.to(user?.socketId).emit("getMessage", {
        content,
        createdAt,
        receiver,
        date,
      });
    } else {
      const listUserAdmin = users.filter((item) => item.role === "admin");
      if (listUserAdmin.length > 0) {
        listUserAdmin.forEach((item) => {
          const user = getUser(item.userId);
          io.to(user?.socketId).emit("getMessage", {
            sender,
            content,
            createdAt,
            date,
          });
        });
      }
    }
  });

  socket.on("sendTypeMessage", ({ sender, receiver }) => {
    if (receiver) {
      const user = getUser(receiver);
      io.to(user?.socketId).emit("typeMessage");
    } else {
      const listUserAdmin = users.filter((item) => item.role === "admin");
      if (listUserAdmin.length > 0) {
        listUserAdmin.forEach((item) => {
          const user = getUser(item.userId);
          io.to(user?.socketId).emit("typeMessage");
        });
      }
    }
  });
  socket.on("sendTurnOffTypeMessage", ({ sender, receiver }) => {
    if (receiver) {
      const user = getUser(receiver);
      io.to(user?.socketId).emit("getTurnOffTypeMessage");
    } else {
      const listUserAdmin = users.filter((item) => item.role === "admin");
      if (listUserAdmin.length > 0) {
        listUserAdmin.forEach((item) => {
          const user = getUser(item.userId);
          io.to(user?.socketId).emit("getTurnOffTypeMessage");
        });
      }
    }
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
