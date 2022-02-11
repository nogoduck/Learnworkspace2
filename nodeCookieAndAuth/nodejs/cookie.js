const http = require('http')
const cookie = require('cookie')

http.createServer((req, res)=> {

  // 쿠키를 객체화 시켜서 다루기 쉽게 만들어줌

  console.log("req.headers >> ", req.headers);
  let cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};

  console.log("req.headers.cookie >> ", req.headers.cookie);
  console.log('cookies >> ', cookies);

  // https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies
  // Session cookies: 웹 브라우저가 켜져있는 상태에만 유효하고 껏다키면 사라짐
  // Permanent cookies: 브라우저를 껏다켜도 사라지지 않는 쿠키

  // Max-Age(1초), EX)60*60*24*30 (1달)
  // Secure: http에서는 쿠키를 쉽게 탈취할 수 있기 때문에 SSL이 적용된 https에서 해당 쿠키를 동작하게함
  // HttpOnly: 브라우저내의 자바스크립트내에서 쿠키에 접근을 불가능하게함, http 통신으로만 접근가능
  //          document.cookie로 사용되는 쿠키 확인 가능
  // Path: 특정 경로에서만 동작하는 쿠키를 지정할 수 있음
  // Domain: 특정 도메인에서만 동작하는 쿠키를 지정할 수 있음





  res.writeHead(200, {
    'Set-cookie':[
      'yummy_cookie2=choco',
      'tasty_cookie=strawBerry',
      `permanent_cookie=infinityCookie; Max-Age=${60*60*24*30}`,
      'secure=Secure; Secure',
      'HttpOnly=HttpOnly; HttpOnly',
      'Path=Path; Path=/cookie',
      'Domain=Domain; Domain=o2.org'
    ],
  })

  res.end("hello cookie~!!!")
}).listen(3000);