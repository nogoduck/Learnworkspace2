const WebSocket = require("ws");

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  //아래의 콜백은 프론트에서 소켓 요청을 보냈을 때 아래 코드들이 실행된다.
  wss.on("connection", (ws, req) => {
    //웹 소켓 연결 완료
    //req.connection.remoteAddress 코드만 작성해줘도 아이피를 알 수 있지만
    //프록시 서버(중간에 서버를 끼고 보내는 역할)를 사용하면 아이피가 변조될 수 있기때문에 헤더파일도 받아준다.(그래도 변조될 수 있음)
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("new client ip >> " + ip);
    ws.on("message", (message) => {
      console.log("message >> " + message);
    });
    ws.on("error", (error) => {
      console.error("error + " + error);
    });
    //클라이언트가 브라우저를 끌때 동작
    ws.on("close", () => {
      console.log("disconnected IP >> " + ip);
      //연결 종료시 반복되는 메시지 전송도 제거
      clearInterval(ws.interval);
    });

    ws.interval = setInterval(() => {
      //웹 소켓이 클라이언트와 연결되었는지 확인
      if (ws.readyState === ws.OPEN)
        ws.send("서버에서 클라이언트로 전송된 메시지");
    }, 2000);
  });
};
