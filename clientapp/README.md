# TransactTrackingSys Web Client Documentation

## What's This ?

```

The "Web client" is a web interface providing an easier usage of both APIs [Socket and REST].
The Client have a easy and extensible implementation, which means we can later on add more functionalities without too much hassle; For now, it only consist on a stateful single page app, displaying the transactions in real time [thanks to Socket.io].
Some filters are also implemented for [as the name suggest] filtering out data by values [wether ID, State, Timestamp or Receiver/Sender name].

```

## Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/3b366e06-fb5b-4792-b74f-c6d663e9cbd1/deploy-status)](https://app.netlify.com/sites/transacttrackingsys-client/deploys)

## Stack

![ENV](https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.env&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TAILWINDCSS](https://img.shields.io/badge/TAILWINDCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NETLIFY](https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![GIT](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)
![BUN](https://img.shields.io/badge/BUN-000000?style=for-the-badge&logo=bun&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![REACTJS](https://img.shields.io/badge/REACTJS-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SOCKETIO](https://img.shields.io/badge/SOCKETIO-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![DOCKER](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## Scripts

`npm start` or `bun start`\

> Runs the app.\
> After completion, app's live at `http://localhost:3000`

`npm run build` or `bun run build`\

> Builds the app for production to the `build` folder.\
> It correctly bundles React in production mode and optimizes the build for the best performance.\
> The app is ready to be deployed after completion

`npm run dev` or `bun run dev`\

> Run the app in development mode.
