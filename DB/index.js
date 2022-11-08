const mongoose = require('mongoose');
const DB = "mongodb://localhost:27017/NodeServer" 

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    console.log('MONGO-DB Server Connected')
}).catch( () => {
    console.log('Server not Connected')
})