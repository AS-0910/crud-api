const {Client}=require('pg')
const client=new Client({
    host : "13.233.198.198",
    user : "hba",
    port : 5432,
    password : 'hba@123',
    database : 'Site'
})
if(client.connect())
    console.log('Connection Established')
else
    console.log('Error in Establishing Connection')

module.exports=client