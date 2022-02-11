const express = require("express");
const app = express();
const helmet = require("helmet");
app.use(helmet());
const parseurl = require("parseurl");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");
const compression = require("compression");
const fileStoreOptions = {};

// app.use(middleware 적용)
// resave: (true) 바뀌던 안 바뀌던 계속 저장, (false)세션 값이 바뀌지 않으면 그대로 둔다
// saveUninitialized: (true)세션이 필요하기 전까지는 세션을 구동시키지 않는다, (false)세션이 필요하던 아니던 구동을 시킨다(서버에 부담을 줄 수도 있음)

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(
  session({
    store: new FileStore(fileStoreOptions),
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.post(
  "/login/process",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect("/~" + req.user.username);
  }
);

app.get("/", (req, res, next) => {
  console.log("req.session >> ", req.session);

  if (!req.session.num) req.session.num = 1;
  else req.session.num += 1;

  res.send(`View: ${req.session.num}`);
});

app.listen(3000, () => {
  console.log("learning passport 3000");
});
