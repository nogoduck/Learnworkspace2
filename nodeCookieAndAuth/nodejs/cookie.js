const http = require('http')
const cookie = require('cookie')

http.createServer((req, res)=> {

  // 쿠키를 객체화 시켜서 다루기 쉽게 만들어줌

  console.log("req.headers >> ", req.headers);
  let cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};

  console.log("req.headers.cookie >> ", req.headers.cookie);
  console.log('cookies >> ', cookies);



  // res.writeHead(200, {
  //   'Set-cookie':['yummy_cookie2=choco', 'tasty_cookie=strawBerry'],
  // })

  res.end("hello cookie~!!!")
}).listen(3000);