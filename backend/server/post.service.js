const postModel = require("../models/post.model.js");

class PostService {
  async create(post) {
    const newPost = await postModel.create(post);
    return newPost;
  }

  async getAll() {
    const allPosts = await postModel.find();
    return allPosts;
  }

  async delete(id) {
    const post = await postModel.findByIdAndDelete(id);
    return post;
  }

  async edit(post, id) {
    if (!id) {
      throw new Error("Id is not found");
    }
    
    const updatedData = await postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedData;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id is not found");
    }
    const post = await postModel.findById(id);
    return post;
  }
}

module.exports = new PostService();
