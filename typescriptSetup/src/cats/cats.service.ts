import { NextFunction, Request, Response } from "express";
import { Cat, CatType } from "./cat.model";

//READ 전체 고양이 데이터 조회 -> GET
export const readAllcat = (req: Request, res: Response) => {
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
};

//READ 특정 고양이 데이터 조회 -> GET
export const readCat = (req: Request, res: Response, next: NextFunction) => {
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
};

//CREATE 새로운 고양이 추가 -> POST
export const createCat = (req: Request, res: Response) => {
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
};

//UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
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
};

//UPDATE 특정 고양이 데이터 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
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
};

//UPDATE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
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
};
