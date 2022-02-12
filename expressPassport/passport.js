module.exports = function (app) {
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;

  const dummyAuthData = {
    email: "ad@naver.com",
    password: "1114",
    nickname: "angryduck",
  };

  // express에 passport와 passport 내부에서 사용하는 session 적용
  app.use(passport.initialize());
  app.use(passport.session());
  // flash는 세션을 사용하기 떄문에 반드시 세션 아래에 배치를 해준다.
  // app.use(flash);

  // 로그인을 성공하게 되면 serializeUser가 딱 한번 호출된다.
  // 사용자의 식별자를 세션 스토어에 저장한다.
  passport.serializeUser((user, cb) => {
    console.log("serializeUser >> ", user, cb);
    // 구분되는 식별자를 인자로 넘겨준다.
    // 식별자는 session의 passport -> user의 데이터로 적용된다.
    cb(null, user.email);
  });

  // 로그인을 성공 후  각각의 페이지를 방문할 때마다
  // 개발자는 그 사용자가 로그인한 사용자인지 아닌지를 확인해야 하는데
  // 그럴떄 deserializeUser가 호출된다.
  passport.deserializeUser((id, cb) => {
    console.log("deserializeUser >> ", id, cb);
    cb(null, dummyAuthData);
  });

  // usernameField, passwordField는 각각의 input name을 넣어준다.
  const strategy = new LocalStrategy(
    { usernameField: "uId", passwordField: "uPw" },
    function verify(username, password, cb) {
      console.log("verify >> ", username, password, cb);

      if (username === dummyAuthData.email) {
        console.log("이메일 일치");
        if (password === dummyAuthData.password) {
          console.log("비밀번호 일치");
          return cb(null, dummyAuthData);
        } else {
          console.log("비밀번호 불일치");
          return cb(null, false, { message: "Incorrect password" });
        }
      } else {
        console.log("이메일 불일치");
        return cb(null, false, {
          message: "Incorrect email",
        });
      }
    }
  );

  passport.use(strategy);

  return passport;
};
