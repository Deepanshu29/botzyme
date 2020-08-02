const mongoose = require('mongoose');
const url = "mongodb+srv://Deepanshu:X35RiRFRLREH1O70@cluster0-7m7a4.mongodb.net/botzymeEnquiry?retryWrites=true&w=majority";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected');
})

const enquireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    },
    phoneNo : {
        type: Number,
        required: true,
        match: /^([0-9]{8,10})$/
    },
    Enquiry: {
        type: String,
        required: true,
        minlength: 50
    }
});

const enquireModel = mongoose.model('enquiry', enquireSchema);

module.exports = enquireModel;

