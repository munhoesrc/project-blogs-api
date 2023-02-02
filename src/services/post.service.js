// para chamar no index
const { BlogPost, PostCategory, User, Category } = require('../models');

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
  const solve = await Promise.all(verifyCategories);
  if (solve.some((i) => i === null)) {
    return { type: 400, message: 'one or more "categoryIds" not found',
  };
}
// bulkCreate() O método permite inserir vários registros na tabela do banco de dados com uma única chamada de função.
    await PostCategory.bulkCreate(categoriesId);
      return { type: 201, message: post };
};

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return { type: 200, message: allPosts };
};

const getPostsById = async (userId) => {
  const post = await BlogPost.findByPk(userId, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  if (!post) return { type: 404, message: 'Post does not exist' };
    return { type: 200, message: post };
};

const update = async (id, body) => {
  const { title, content, userId } = body;

  const updatePostById = await getPostsById(id);

  if (updatePostById.message.userId !== userId) return { type: 401, message: 'Unauthorized user' };
  await BlogPost.update({ title, content }, {
    where: { id },
  });
  
  const getNewUpdate = await getPostsById(id);
  return { type: 200, message: getNewUpdate.message };
};

module.exports = {
  create,
  getAll,
  getPostsById,
  update,
};
