/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * @summary Retrieve all comments.
    * @description Fetches all comments from the database, sorted by creation date in descending order.
    * @route GET /api/comments
    * @returns {Array<Object>} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * DELETE /:id
    * @summary Delete a comment by ID.
    * @description Deletes a comment from the database based on the provided comment ID.
    * @route DELETE /api/comments/{id}
    * @param {string} id.path.required - The ID of the comment to delete
    * @returns {Object} 200 - Success message if deletion is successful
    * @returns {Object} 404 - Error message if comment is not found
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => { 
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});