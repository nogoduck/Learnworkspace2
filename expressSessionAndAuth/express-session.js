const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')
const FileStore = require('session-file-store')(session);


const fileStoreOptions = {};
const app = express()


// app.use(middleware 적용)
// resave: (true) 바뀌던 안 바뀌던 계속 저장, (false)세션 값이 바뀌지 않으면 그대로 둔다
// saveUninitialized: (true)세션이 필요하기 전까지는 세션을 구동시키지 않는다, (false)세션이 필요하던 아니던 구동을 시킨다(서버에 부담을 줄 수도 있음)


app.use(session({
  store: new FileStore(fileStoreOptions),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true

}))



app.get('/', (req,res,next) => {
  console.log("req.session >> ", req.session);

  if(!req.session.num) req.session.num = 1;
  else req.session.num += 1;

  res.send(`View: ${req.session.num}`)
})

app.listen(3000, ()=>{
  console.log("run 3000");
})