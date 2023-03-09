var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const URI = process.env.URI;
 
 
 function devDBConnect() {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        }
    );
    return mongoose.connection;
}
function dbClose(){
    mongoose.disconnect();
}

module.exports = {devDBConnect, dbClose};