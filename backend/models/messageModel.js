const mongoose = require("mongoose")

const messageModel = mongoose.Schema({
sender: {type: mongoose.Schema.type.ObjectID, ref:"User"},
content: {type: String, trim: true},
chat: {
    type: mongoose.Schema.type.ObjectID, ref:"Chat"

}

}, 
{
    timeStamp: true
}
)
const Message = mongoose.model("Message",messageModel)
module.exports =Message;