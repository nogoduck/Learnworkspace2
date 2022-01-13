"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cat_model_1 = require("./cat.model");
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/cats", function (req, res) {
    try {
        var cats = cat_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get("/cats/:id", function (req, res, next) {
    try {
        var catId_1 = req.params.id;
        console.log("catId >> ", catId_1);
        var cats = cat_model_1.Cat.find(function (cat) { return cat.id === catId_1; });
        console.log("cats >> ", cats);
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post("/cats", function (req, res, next) {
    var data = req.body;
    try {
        cat_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.put("/cats/:id", function (req, res, next) {
    try {
        var params_1 = req.params;
        var body_1 = req.body;
        var result_1;
        cat_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_1.id) {
                cat = body_1;
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.patch("/cats/:id", function (req, res, next) {
    try {
        var params_2 = req.params;
        var body_2 = req.body;
        var result_2;
        cat_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_2.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_2 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result_2,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.delete("/cats/:id", function (req, res, next) {
    try {
        var params_3 = req.params;
        var newCat = cat_model_1.Cat.filter(function (cat) { return cat.id !== params_3.id; });
        res.status(200).send({
            success: true,
            data: {
                data: newCat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map