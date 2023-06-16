# Node.js HTTP Server

This repository shows how to create a Node.js HTTP from Scrath, implementing basic routing but trying to get the necessary functionality to show how this type of application works under the hood.

## Requirements:

Node.js 18.16.x or greater.

## Running the server

To run the application in production mode you can use the next command:

```bash
npm run start
```

To run the application in development mode you can use the next command:

```bash
npm run start:dev
```

Note: The application in development mode use the Node.js native watch feature to reload the application after file changes.

## Endpoints

### Users

#### Add a User

- URL: /users
- Method: POST
- Request Body: JSON object containing the user data.
- Success Response:
  _ Status Code: 201 (Created)
  _ Response Body: JSON object containing the newly created user.

#### Get All Users

- URL: /users
- Method: GET
- Success Response:
  - Status Code: 200 (OK)
  - Response Body: JSON array containing all the users.

#### Get User by ID

- URL: /users/:id
- Method: GET
- URL Parameters: Replace :id with the ID of the user.
- Success Response:
  - Status Code: 200 (OK)
  - Response Body: JSON object containing the user data.

#### Update a User

- URL: /users/:id
- Method: PATCH
- URL Parameters: Replace :id with the ID of the user.
- Request Body: JSON object containing the updated user data.
- Success Response:
  - Status Code: 201 (Created)
  - Response Body: JSON object containing the updated user data.

#### Delete a User

- URL: /users/:id
- Method: DELETE
- URL Parameters: Replace :id with the ID of the user.
- Success Response:
  - Status Code: 204 (No Content)

### Posts

#### Add a Post

- URL: /posts
- Method: POST
- Request Body: JSON object containing the post data.
- Success Response:
  - Status Code: 201 (Created)
  - Response Body: JSON object containing the newly created post.

#### Get All Posts

- URL: /posts
- Method: GET
- Success Response:
- Status Code: 200 (OK)
- Response Body: JSON array containing all the posts.

##### Get Post by ID

- URL: /posts/:id
- Method: GET
- URL Parameters: Replace :id with the ID of the post.
- Success Response:
  - Status Code: 200 (OK)
  - Response Body: JSON object containing the post data.

#### Update a Post

- URL: /posts/:id
- Method: PATCH
- URL Parameters: Replace :id with the ID of the post.
- Request Body: JSON object containing the updated post data.
- Success Response:
  - Status Code: 201 (Created)
  - Response Body: JSON object containing the updated post data.

#### Delete a Post

- URL: /posts/:id
- Method: DELETE
- URL Parameters: Replace :id with the ID of the post.
- Success Response:
  - Status Code: 204 (No Content)

## Testing

For better testing you can use Postman Public Workspace. Click here - https://www.postman.com/darnahorna/workspace/node-http-server.
