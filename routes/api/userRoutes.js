const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,  
  deleteUser,
  addThought,
  removeThought,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)   
  .delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts')
  .post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId')
  .delete(removeThought);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;