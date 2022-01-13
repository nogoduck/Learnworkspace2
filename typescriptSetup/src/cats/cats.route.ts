import { Cat, CatType } from "./cat.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

//특정 라우터만 미들웨어를 추가하기 위해선 app.get과 next 파라미터를 추가해주며 path를 입력한다.
// app.get(
//   "/cats/som",
//   (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log("this is som middleware");
//     next();
//   }
// );

//Singleton pattern(싱글톤 패턴)을 적용함으로써 각각의 라우터가 하는 일을 더 명확하게 알 수 있다
//유지보수와 가독성이 좋아짐
//READ 전체 고양이 데이터 조회 -> GET
router.get("/cats", readAllcat);

//READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", readCat);

//CREATE 새로운 고양이 추가 -> POST
router.post("/cats", createCat);

//UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

//UPDATE 특정 고양이 데이터 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

//UPDATE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
