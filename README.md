# the-social-network


## Description

The Social Network is a dynamic social platform designed for users to express and share their thoughts. This platform empowers users to create and update their posts, engage with others through reactions, and build connections with friends.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and manage your post.
- Add reactions to post.
- Connect with friends by adding or removing them.
- View post and profiles of other users.
- Get a count of reactions on each post.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Other technologies your app uses

## Installation

1. Clone this repository to your local machine.
   
git clone git@github.com:physixkz/the-social-network.git

Install the required dependencies.

cd your-app-name
npm install
### Start the server.

npm start
Your app should now be running on http://localhost:3001.

## Usage
Use your favorite API testing tool (e.g., Postman or Insomnia) to interact with the API endpoints.
Register and log in to create, update, and react to thoughts.
Explore the API to see all available endpoints.

## API Endpoints

POST /api/users

GET /api/users

GET /api/users/:id

PUT /api/users/:id

DELETE /api/users/:id

POST /api/users/:userId/friends/:friendId

DELETE /api/users/:userId/friends/:friendId

GET /api/thought

GET /api/thought/:id

POST /api/thought

PUT /api/thought/:id

DELETE /api/thought/:id

POST /api/thought/:thoughtId/reactions

DELETE /api/thought/:thoughtId/reactions/:reactionId

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.


https://drive.google.com/file/d/1Ol8J9ebWHxAxX3Lr9qA-xW7pQeynYOZt/view