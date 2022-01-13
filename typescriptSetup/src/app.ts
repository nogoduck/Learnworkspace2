import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();
const port: number = 8000;

app.use(express.json());

//app.use를 사용하면 미들웨어를 전체적으로 관리 (순서 중요)
//logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    next();
  }
);

app.use(catsRouter);

//일치하는 경로가 없을때 처리할 라우터
//404 middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("this is error middleware");
    res.send({ error: "404 not found error" });
    // next();
  }
);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
