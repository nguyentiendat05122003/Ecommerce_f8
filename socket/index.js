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
  console.log("user", users);
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

  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
