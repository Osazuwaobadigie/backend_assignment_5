import * as articleService from "../services/article.service.js";

export const getAll = async (req, res) => {
  const articles = await articleService.getAll();
  res.json(articles);
};

export const create = async (req, res) => {
  const { userId } = req.body;
  try {
    const article = await articleService.create(userId);
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  const { articleId } = req.params;
  const article = await articleService.getOne(articleId);
  res.json(article);
};

export const update = async (req, res) => {
  const { articleId } = req.body;
  try {
    const data = await articleService.update(articleId);
    res.json({ message: "Update Successful", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const Delete = async (req, res) => {
  const { articleId } = req.body;
  try {
    const data = await articleService.Delete(articleId);
    res.json({ message: "Delete Successful", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
