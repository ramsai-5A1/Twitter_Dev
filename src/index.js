import express from 'express';
import {connect} from './config/database.js';
const app = express();

 import HashtagRepository from './repository/hashtag-repository.js';
 import service from './services/tweet-service.js';

app.listen(3000, async () => {
    console.log("Server started");
    await connect();
    console.log('Mongo db connected');
    let ser = new service();
    await ser.create({content: 'Done with #refractor ?'});
});