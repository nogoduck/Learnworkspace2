import { Cat, CatType } from "./cat.model";
import { Router } from "express";

const router = Router();

//특정 라우터만 미들웨어를 추가하기 위해선 app.get과 next 파라미터를 추가해주며 path를 입력한다.
// app.get(
//   "/cats/som",
//   (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log("this is som middleware");
//     next();
//   }
// );

//READ 전체 고양이 데이터 조회 -> GET
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("DB Connect Error...");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", (req, res, next) => {
  try {
    const { id: catId } = req.params;
    console.log("catId >> ", catId);
    const cats = Cat.find((cat) => cat.id === catId);
    console.log("cats >> ", cats);
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//CREATE 새로운 고양이 추가 -> POST
router.post("/cats", (req, res, next) => {
  //req.body를 사용하기 위해선 express에서 JSON을 읽을 수 있게 middleware를 추가해줘야 한다 "app.use(express.json())"
  const data = req.body;
  try {
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", (req, res, next) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//UPDATE 특정 고양이 데이터 업데이트 -> PATCH
router.patch("/cats/:id", (req, res, next) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//UPDATE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", (req, res, next) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: {
        data: newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
