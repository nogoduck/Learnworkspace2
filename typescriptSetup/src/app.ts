import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;
  private PORT = 8000;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //app.use를 사용하면 미들웨어를 전체적으로 관리 (순서 중요)
    //logging middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(req.rawHeaders[1]);
        next();
      }
    );

    //json middleware
    this.app.use(express.json());

    this.setRoute();

    //일치하는 경로가 없을때 처리할 라우터
    //404 middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log("this is error middleware");
        res.send({ error: "404 not found error" });
        // next();
      }
    );
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.PORT, () => {
      console.log(`Example app listening at http://localhost:${this.PORT}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
