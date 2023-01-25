const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/employeeRegistration", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log("connection successful with mongodb....");
//     })
//     .catch((e) => {
//         console.log(e);

//     });

const url = "mongodb+srv://indra:indra@cluster0.1ohycp2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
    .then(() => {
        console.log("connection successful with mongodb....");
    })
    .catch((e) => {
        console.log(e);
    });
