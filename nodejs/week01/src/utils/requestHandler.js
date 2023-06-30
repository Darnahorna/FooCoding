"use strict";

import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { getRequestData } from "./getRequestData.js";
import { IncomingMessage, ServerResponse } from "http";
import {
  updateUser,
  addUser,
  getUserById,
  getAllUsers,
  deleteUser,
} from "../users/usersServices.js";
import {
  addPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../posts/postsServices.js";

/**
 * This function manage a HTTP request
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
export const requestHandler = async (request, response) => {
  const { headers, method, url } = request;
  const { address, port } = request.socket.server.address();
  const fullEndpoint = `http://${address}:${port}${url}`;

  // Set response headers

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const path = url.split("/")[1];

  switch (path) {
    case "users": {
      const usersPattern = new URLPattern({ pathname: "/users/:id" });
      const usersEndpoint = usersPattern.exec(fullEndpoint);
      const id = parseInt(usersEndpoint?.pathname?.groups?.id);

      switch (method) {
        case "POST": {
          const body = JSON.parse(await getRequestData(request));
          const newUser = await addUser(body);
          response.setHeader("Content-Type", "application/json");
          response.statusCode = StatusCodes.CREATED;
          response.write("User is successfully added!");
          response.end(JSON.stringify(newUser));
          break;
        }
        case "DELETE":
          const userToDelete = await getUserById(id);
          if (userToDelete) {
            await deleteUser(id);
            response.statusCode = StatusCodes.NO_CONTENT;
            response.end(JSON.stringify(userToDelete));
          } else {
            response.statusCode = StatusCodes.NOT_FOUND;
            response.end(JSON.stringify({ message: "User is not found" }));
          }
          break;

        case "GET":
          if (id) {
            const user = await getUserById(id);
            if (user) {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.end(JSON.stringify(user));
            } else {
              response.statusCode = StatusCodes.NOT_FOUND;
              response.end(JSON.stringify({ message: "User is not found" }));
            }
          } else {
            const users = await getAllUsers();
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.OK;
            response.end(JSON.stringify(users));
          }
          break;

        case "PATCH":
          const body = JSON.parse(await getRequestData(request));
          const userToUpdate = await getUserById(id);
          if (userToUpdate) {
            const updatedUser = await updateUser(id, body);
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.CREATED;
            response.write("User is successfully updated!");
            response.end(JSON.stringify(updatedUser));
          } else {
            response.statusCode = StatusCodes.NOT_FOUND;
            response.end(JSON.stringify({ message: "User is not found" }));
          }
          break;

        default:
          break;
      }

      break;
    }

    case "posts": {
      const postsPattern = new URLPattern({ pathname: "/posts/:id" });
      const postsEndpoint = postsPattern.exec(fullEndpoint);
      const id = parseInt(postsEndpoint?.pathname?.groups?.id);

      switch (method) {
        case "POST":
          const data = JSON.parse(await getRequestData(request));
          const newPost = await addPost(data);
          response.statusCode = StatusCodes.CREATED;
          response.write("Post is successfully added!");
          response.end(JSON.stringify(newPost));
          break;

        case "DELETE":
          const postToDelete = await getPostById(id);
          if (postToDelete) {
            await deletePost(id);
            response.statusCode = StatusCodes.NO_CONTENT;
            response.end(JSON.stringify(postToDelete));
            response.write("Deleted successfully!");
          } else {
            response.statusCode = StatusCodes.NOT_FOUND;
            response.end(JSON.stringify({ message: "Post is not found" }));
          }
          break;

        case "GET":
          if (id) {
            const post = await getPostById(id);
            if (post) {
              response.statusCode = StatusCodes.OK;
              response.end(JSON.stringify(post));
            } else {
              response.statusCode = StatusCodes.NOT_FOUND;
              response.end(JSON.stringify({ message: "User is not found" }));
            }
          } else {
            const posts = await getAllPosts();
            response.statusCode = StatusCodes.OK;
            response.end(JSON.stringify(posts));
          }
          break;

        case "PATCH":
          const body = JSON.parse(await getRequestData(request));
          const postToUpdate = await getPostById(id);
          if (postToUpdate) {
            const updatedPost = await updatePost(id, body);
            response.statusCode = StatusCodes.CREATED;
            response.write("Post is successfully updated!");
            response.end(JSON.stringify(updatedPost));
          } else {
            response.statusCode = StatusCodes.NOT_FOUND;
            response.end(JSON.stringify({ message: "Post is not found" }));
          }
          break;

        default:
          break;
      }

      break;
    }
  }
};
