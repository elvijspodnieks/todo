const mongoose = require('mongoose')
const connectToDB = async () => {
    await mongoose.connect(process.env.URI).then((res) => {
        console.log("Mongodb connected succ")
    })
};

module.exports = connectToDB