const mongoose = require('mongoose')

async function connectDB() {
 await mongoose.connect(
   "mongodb+srv://asthagupta86400_db_user:2EJCzIMrqD7MzFRe@yt-complete-backend.zzw2mgr.mongodb.net/Notes_App_DB",
 );
 console.log("Connected to MongoDB")

}


module.exports = connectDB;