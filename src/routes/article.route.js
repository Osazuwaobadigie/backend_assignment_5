import { Router } from "express";
import * as articleController from "../controllers/article.controller.js";
import { creatArticleMiddleware } from "../middleware/article.middleware.js";

const articleRoute = Router();

// articleRoute.use(authMiddleware);


articleRoute.get("/",  articleController.getAll);
articleRoute.post("/",  articleController.create);
articleRoute.get("/",  articleController.getOne);
articleRoute.put("/:articleID",  articleController.update);
articleRoute.delete("/:articleID",  articleController.Delete);


export default articleRoute;
