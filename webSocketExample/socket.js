const SocketIO = require("socket.io");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const cookie = require("cookie-signature");

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: "/socket.io" });
  app.set("io", io);
  const room = io.of("/room");
  const chat = io.of("/chat");

  io.use((socket, next) => {
    cookieParser(process.env.COOKIE_SECRET)(
      socket.request,
      socket.request.res || {},
      next
    );
    sessionMiddleware(socket.request, socket.request.res || {}, next);
  });

  room.on("connection", (socket) => {
    console.log("room 네임스페이스 접속");

    socket.on("disconnect", () => {
      console.log("room 네임스페이스 접속해제");
    });
  });

  chat.on("connection", (socket) => {
    console.log("chat 네임스페이스 접속");
    const req = socket.request;
    const {
      headers: { referer },
    } = req;

    const roomId = referer
      .split("/")
      [referer.split("/").length - 1].replace(/\?.+/, "");
    socket.join(roomId);
    console.log("referer >> ", referer);
    console.log("roomId >> ", roomId);
    socket.to(roomId).emit("join", {
      user: "system",
      chat: `${req.session.color}님이 입장하셨습니다.`,
    });
    socket.on("disconnect", () => {
      console.log("chat 네임스페이스 접속해제");
      socket.leave(roomId);
      const currentRoom = socket.adapter.rooms[roomId];
      const userCount = currentRoom ? currentRoom.length : 0;
      if (userCount === 0) {
        // 유저가 없으면 방 제거
        // 브라우저에서 서버로 요청을 보낼 땐 세션 쿠키를 자동으로 넣어주지만
        // 서버에서 서버로 요청할 땐 세션 쿠키가 들어가지 않는다. (직접 넣어줘야함)
        // 헤더를 보고 어떤사람이 요청했는지 파악하기 위해 쿠키를 넣어준다.
        const signedCookie = cookie.sign(
          req.signedCookies["connect.sid"],
          process.env.COOKIE_SECRET
        );
        const connectSID = `${signedCookie}`;
        axios
          .delete(`http://localhost:5050/room/${roomId}`, {
            headers: {
              Cookie: `connect.sid=s%3A${connectSID}`,
            },
          })
          .then(() => {
            console.log("방 제거 요청 성공");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        socket.to(roomId).emit("exit", {
          user: "system",
          chat: `${req.session.color}님이 퇴장하셨습니다.`,
        });
      }
    });
  });
};
