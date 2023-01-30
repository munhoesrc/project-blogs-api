// para chamar no index
const { BlogPost, PostCategory, Category } = require('../models');

const create = async (userId, { title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, userId });
  const categoriesId = categoryIds.map((item) => ({ 
    postId: post.id, 
    categoryId: item,
  }));
    if (categoryIds.length === 0) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  const verifyCategories = categoryIds.map((e) => Category.findByPk(e));
  const resolve = await Promise.all(verifyCategories);
  if (resolve.some((i) => i === null)) {
    return { type: 400, message: 'one or more "categoryIds" not found',
  };
}
    await PostCategory.bulkCreate(categoriesId);
  return { type: 201, message: post };
};

module.exports = {
  create,
};