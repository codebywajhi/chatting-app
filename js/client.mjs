const socket = io('http://localhost:8000');

const form = document.getElementById('form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.querySelector('#container');

// const append = (message, position) => {
//     // Creating the (div) Element ! 
//     const messageElement = document.createElement("div");
//     messageElement.innerText = message;
//     messageElement.classlist.add("message");
//     messageElement.classlist.add(position);
//     // compiling all the messageElement into the container 
//     messageContainer.append(messageElement);

// }

const append = (message, position) => {
    const messageElement = document.createElement("div");
    messageElement.innertext = message;
    messageElement = document.classlist.add("message")
    messageElement = document.classlist.add(position)
    messageContainer.append = (messageElement);
}

const name = prompt(" Please Enter Your name to Join !");
console.log(name);
socket.emit("new_user_joined", name);


socket.on("Another_User_Joined", name => {
    socket.broadcast.emit(`Join the chat Now `, name, "right")
});


