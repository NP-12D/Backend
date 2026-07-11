const { default: mongoose } = require("mongoose")

async function connectToMongo(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log({message:"დაკავშირდა წარმატებით"})
    } catch (error) { 
        console.log(error,"ეს ერორი მოიდს cofnig-დან კერძოდ მონგოს ქონექთის ფუქნციიდან")
    }
}

module.exports = connectToMongo