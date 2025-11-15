require("dotenv").config()

import mongoose, { Error } from "mongoose"
const mongo_url = process.env.DATABASE_URL

export const DatabaseConnect = async ()=>{
    if( mongo_url ){
        await mongoose.connect(mongo_url)
            .then(
                ()=>{
                    console.log("db connected successfully");
                }
            )
            .catch(
                (e:Error)=>{
                    console.log("Error while connecting to mongodb "+ e)
                    process.exit(1)
                }
            )
    }
    else{
        console.log("mongodb url is not found !")
    }
}