const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});     

const users = {};

io.on("connection", socket => {
    socket.on("new_user_joined", name => {
        // it will show this line into terminal
        console.log("new user", name)
        // name will be save as a users[socket .id]
        users[socket.id] = name;
        // socket.broadcast.emit => it will emit , send the notificatioin
        //  to all of the users which have joined the meeting chat
        socket.broadcast.emit("Another_User_Joined", name);
    });

    // messaging functionality here //

    // socket.broadcast.emit("received" = > it will emit , send the notificatioin
    //  to all of the users that message has been received

    socket.on("send", message => {
        socket.broadcast.emit("receive", {
            message: message, name: users[socket.id]
        });
    });
});

// here we can observe the followng events
// 1 =>  Emit
// 2 =>  broadcast Event
// 3 =>  sen message 