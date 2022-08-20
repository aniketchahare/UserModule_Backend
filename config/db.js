const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

function connectDB() {
    // Create the database connection 
    return mongoose.connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true, useUnifiedTopology: true
        }, (error,data) => {
            if (error) console.log("Mongodb connection failed");
            else {
                console.log("Mongodb connection established");
            }
        }
    );
}

module.exports = { connect: connectDB() }