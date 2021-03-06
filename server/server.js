/**
 * Created by Jitender on 21/10/16.
 */

import express from 'express';
import webpack from 'webpack';
import mongoose from 'mongoose';
import path from 'path';
import config from '../webpack.config.js';
import open from 'open';
import SocketIo from 'socket.io';
var bodyParser = require('body-parser');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('../server/routes')(app);

mongoose.connect('mongodb://localhost/chat-app');
mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on http://localhost:%s",port);
        open(`http://localhost:${port}`);
            }
    });

    const io = new SocketIo(server);

    io.on('connection', function(socket) {
        socket.on('chat', function(data) {
            socket.broadcast.emit('chat', data);
        });
        socket.on('typing', function (data) {
            socket.broadcast.emit('typing', data.user);
        });
        socket.on('stop typing', function (data) {
            socket.broadcast.emit('stop typing', data.user);
        });
    });
