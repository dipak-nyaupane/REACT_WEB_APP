import mongoose from "mongoose";
const connection={};

async function connectDb(){
    if (connection.isConnected){
        console.log("Already connected to database");
        return;
    }
    if(mongoose.connections.length>0){
        connection.isConnected=mongoose.connections[0].readyState;
        if (connection.isConnected===1){
            console.log("Use previous connection to the databases.");
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MANGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("New Connection to the database.")
    connection.isConnected=db.connections[0].readyState;
}
export async function disconnectDb() {
    if(connection.isConnected){
        if(process.env.NODE_END==="Production"){
            await mongoose.disconnect();
            connection.isConnected=false;
        }else{
            console.log("Not diconnecting from the datebase.");
        }
    }

}
const db ={connectDb,disconnectDb}
export default db;

