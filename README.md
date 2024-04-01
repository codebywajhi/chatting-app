<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="container">
  <h1>Chatting App</h1>

  <p>First, I created the HTML structure for the app.</p>

  <h2>NodeServer Folder</h2>
  <p>In the NodeServer folder, I installed the necessary packages using npm (Node Package Manager).</p>
  <pre>
    "author": "Wajhi",
    "license": "ISC",
    "dependencies": {
      "Express": "^4.18.2",
      "node": "^20.3.1",
      "nodemon": "^2.0.22",
      "prompt": "^1.3.0",
      "socket.io": "^4.7.0"
    }
  </pre>
  <p>The server files are available in this folder, and I utilized socket.io for server-client communication.</p>

  <h2>Client Side</h2>
  <p>For the client-side, I created a new client.js file and installed all the necessary npm packages.</p>
  <p>The app prompts questions to the user using the prompt package.</p>

  <h2>Running the App</h2>
  <p>To run the app, navigate to the NodeServer directory and run the following commands:</p>
  <pre>
    cd nodeServer
    nodemon server.js
  </pre>
  <p>This will start the app and make it available for use.</p>

  <h2>Author</h2>
  <p>Author: Wajhi ur Rehman</p>
</div>
</body>
</html>
