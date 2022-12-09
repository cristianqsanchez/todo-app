# Yep, this is another typically todo app :memo:

This app is build to learn the mern stack and also I'm trying use a clean folder structure, this project is divided into a `client` with vite and react and a `server` with express and mongo

# Contents

- [Project structure](#project-structure-open_file_folder)
- [Installation](#installation-genie)
- [Backend](#run-backend-localhost3000-rocket)
  - [Config](#server-config-gear)
  - [Structure](#backend-structure-open_file_folder)
- [Frontend](#run-frontend-localhost5173-rocket)
  - [Structure](#frontend-structure-open_file_folder)

# Project structure :open_file_folder:

```
client/
 src/
 package.json
 vite.config.js

server/
 src/
 package.json
 .env
```

# Installation :genie:

## Clone repository

```
git clone https://github.com/cristianqsanchez/todo-app.git
cd todo-app
```

## Run backend `localhost:3000` :rocket:

### Server config :gear:

Server is connected to mongodb through the environment vaiable **MONGODB_URL** in `.env` file as show in [.env.example](./server/.env.example)

You can create a mongodb cluster and get the url in [mongodb.com :herb:](https://www.mongodb.com/)

```
cd server
echo "MONGODB_URL=YOUR_MONGODB_URL" >> .env
```

### Start :tada:

```
cd server
npm i
npm run dev
```

### Backend structure :open_file_folder:

```
src/
 tasks/
  controllers/
  model/
  routes/
 app.js
 index.js
```

## Run frontend `localhost:5173` :rocket:

```
cd client
npm i
npm run dev
```

### Frontend structure :open_file_folder:

```
src/
 components/
  hooks/
  services/
 App.jsx
 main.jsx
 index.html
```
