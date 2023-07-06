// node server that listens in port 80
// run with: node app.js

import { Person } from "./person.js";
import express from 'express';
import http from 'http';
import path from 'path';
import { getGlobals } from 'common-es';

const { __dirname, __filename } = getGlobals(import.meta.url)
var app = express();
var httpServer = http.Server(app);

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// serve index.html from the root directory
app.get('/', function(req, res){
    console.log('index served');
    res.sendFile(__dirname + '/index.html');
    }
);

app.get('/createperson', function(req, res){
        function createPerson() {
            console.log('createPersonFunction');
            var person = new Person("John", 30);
            person.greet();
        }
        res.send('Person created');
    }
);

// listen to port 80
httpServer.listen(80, function(){
    console.log('listening on *:80');
    }
);

