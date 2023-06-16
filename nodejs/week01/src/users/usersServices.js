"use strict";
import { readAndProcessFile, writeFileAsync } from "../utils/manipulateFile.js";

const USERS_FILE = "../../data/users.json";
const filePath = new URL(USERS_FILE, import.meta.url);
const users = await getAllUsers();
let counter = users.length;

export async function getAllUsers() {
  const users = await readAndProcessFile(filePath);
  return users;
}

export async function addUser(userToAdd) {
  try {
    const users = await getAllUsers();
    counter++;
    userToAdd.id = counter;
    users.push(userToAdd);
    await writeFileAsync(filePath, users);
    return userToAdd;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateUser(userId, fieldsToUpdate) {
  try {
    const users = await getAllUsers();

    const existingUser = users.find((user) => user.id === userId);
    const userIndex = users.findIndex((user) => user.id === userId);

    const newUser = { ...existingUser, ...fieldsToUpdate };
    users[userIndex] = newUser;
    await writeFileAsync(filePath, users);
  } catch (error) {
    console.error(error.message);
  }
}

export async function getUserById(userId) {
  const users = await getAllUsers();
  const userById = await users.find((user) => user.id === userId);
  return userById;
}

export async function deleteUser(idUserToDelete) {
  const users = await getAllUsers();
  const newUsers = users.filter((user) => user.id !== idUserToDelete);
  await writeFileAsync(filePath, newUsers);
}
