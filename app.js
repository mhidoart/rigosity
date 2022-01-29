const express = require('express');
const mongoose = require('mongoose');

//schemas
const userSchema = require('./schemas/user-schema')

const app = express()
const port = 5000
//using a miidleware (make server accept json as body)
app.use(express.json())

//users area


//end users area
mongoose.connect('mongodb://localhost:27017/mylib').then(
    async () => {
        console.log("MongoDB connected ..");
        const user = {
            email: 'user1@gmail.com',
            password: '123',
            firstName: 'bano',
            lastName: 'mehdi'
        }

        await new userSchema(user).save()
    }
)



app.listen(port, () => {
    console.log("server has started on port  " + port);
})