// "use client";
import { io } from "socket.io-client";
const URL = "http://localhost:8000";
export const socket = io(URL, {
  transports: ["websocket"],
});
// useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem("user"))._id;
//     socket.emit("addUser", userId);
//   }, []);
