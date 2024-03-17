const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./src/config/config')
const bodyParser = require('body-parser')
const router = require('./src/routes/items.route')


require('dotenv').config()
connectDB()
const app = express()

//middlewares
app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))

//routes
app.use('/api/items',router)


const port = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send('Server is running')
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})