"use strict";
import { readAndProcessFile, writeFileAsync } from "../utils/manipulateFile.js";

const POSTS_FILE = "../../data/posts.json";
const filePath = new URL(POSTS_FILE, import.meta.url);
const posts = await getAllPosts();
let counter = posts.length;

export async function getAllPosts() {
  const posts = await readAndProcessFile(filePath);
  return posts;
}
export async function addPost(postToAdd) {
  try {
    const posts = await getAllPosts();
    counter++;
    postToAdd.post_id = counter;
    posts.push(postToAdd);
    await writeFileAsync(filePath, posts);
    return postToAdd;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updatePost(postId, fieldsToUpdate) {
  try {
    const posts = await getAllPosts();

    const existingPost = posts.find((post) => post.post_id === postId);
    const postIndex = posts.findIndex((post) => post.post_id === postId);

    const newUser = { ...existingPost, ...fieldsToUpdate };
    posts[postIndex] = newUser;

    await writeFileAsync(filePath, posts);
  } catch (error) {
    console.error(error.message);
  }
}
export async function getPostById(postId) {
  const posts = await getAllPosts();
  const postById = await posts.find((post) => post.post_id === postId);
  return postById;
}

export async function deletePost(idPostToDelete) {
  const posts = await getAllPosts();
  const newPosts = posts.filter((post) => post.post_id !== idPostToDelete);
  await writeFileAsync(filePath, newPosts);
}
