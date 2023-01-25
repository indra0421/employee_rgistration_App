const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("email not valid");
            }
        },
        required: true
    },
    phone: {
        type: Number,
        required: true,
        min: 10,
        // unique: true
    },
    dob: {
        type: Date,
        required: true,
    },
    bgroup: {
        type: String,
        required : true
    },

    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }


})

employeeSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`the current password before hashing is ${this.password}`);       //before hashing
        this.password = await bcrypt.hash(this.password, 10);          //hashing the password and also storing
        // console.log(`the current password after hashing is ${this.password}`);       //after hashing

        //undefined using for -it will not be shown
        this.confirmpassword = undefined;

    }
    next();    // next method will be called
})



module.exports = new mongoose.model("Register", employeeSchema);