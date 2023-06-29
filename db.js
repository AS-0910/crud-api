const {Client}=require('pg');

const connectDB = () => {
    const client= new Client({
        host:"13.233.198.198",
        user:"hba",
        port:5432,
        password:"hba@123",
        database:"Site" 
    });

    return client;
};

// client.connect();

module.exports= connectDB;