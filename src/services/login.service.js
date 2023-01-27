const { User } = require('../models');

const autenticationLogin = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  if (!user) return { type: 400, message: 'Invalid fields' };

  return { type: '', message: user };
};

module.exports = {
  autenticationLogin,
};