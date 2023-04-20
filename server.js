const dotenv = require('dotenv');
dotenv.config();


var express = require("express");
var cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

const taskRoutes = require('./src/routes/task-routes');
const projectRoutes = require('./src/routes/project-routes');
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes)

const dbConnect = require('./src/config/dbConnect.js');

const server = app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});

const db = dbConnect.devDBConnect();
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Dev DB successfully");
});

module.exports = server;