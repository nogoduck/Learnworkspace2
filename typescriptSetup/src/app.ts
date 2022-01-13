import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

//app.use를 사용하면 미들웨어를 전체적으로 관리 (순서 중요)
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    next();
  }
);

//특정 라우터만 미들웨어를 추가하기 위해선 app.get과 next 파라미터를 추가해준다.
app.get(
  "/cats/som",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("this is som middleware");
    next();
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get(
  "/cats/blue",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ blue: Cat[0] });
  }
);

app.get("/cats/som", (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

//일치하는 경로가 없을때 처리할 라우터
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
