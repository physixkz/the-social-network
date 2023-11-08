const router = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllPosts).post(createPost);

router
  .route("/:id")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

router.route("/:postId/reactions").post(addReaction);

router.route("/:postId/reactions/:reactionId").delete(removeReaction);

module.exports = router;