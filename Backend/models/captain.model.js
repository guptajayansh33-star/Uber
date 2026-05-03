const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlenth: [3, "First name must be at least 3 characters long"]
        },
        lastname: {
            type: String,
            minlenth: [3, "Last name must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        section: false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlenth: [3, "Vehicle color must be at least 3 characters long"]
    },
    numberPlate: {
        type: String,
        required: true,
        unique: true,
        minlenth: [3, "Vehicle number plate must be at least 3 characters long"]
    },
    capacity: {
        type: Number,
        required: true,
        min: [1, "Vehicle capacity must be at least 1"],
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ['car', 'bike', 'auto'],
    }
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;