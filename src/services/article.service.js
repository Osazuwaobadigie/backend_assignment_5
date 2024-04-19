import User from "../database/user.schema.js";
import article from "../database/article.schema.js";


export const getAll = async () => {
  return article.find().populate("user");
};

export const create = async (userId) => {
  if (!isValidObjectId(userId)) {
    throw new Error("Invalid user id");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  
  return article.create({ user: userId });
};

export const getOne = async (articleId) => {
  return article.findOne({ _id: articleId });
};

export const update = async (articleId,) => {
   if (!isValidObjectId(userId)) {
    throw new Error("Invalid user id");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  
  return article.update({ user: userId });
};

export const Delete = async (articleId) => {
  return article.deleteOne({ _id: articleId });
};

