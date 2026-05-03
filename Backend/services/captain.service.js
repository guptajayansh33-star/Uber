const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({ 
    email, fullname, password, vehicle, 
    color, numberPlate, capacity, vehicleType }) => {

        if(!email || !password || !fullname || !vehicle || !color || !numberPlate || !capacity || !vehicleType) {
            throw new Error("All fields are required");
        }

        const captain = captainModel.create({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname,
            },
            email,
            password,
            vehicle: {
                color,
                numberPlate,
                capacity,
                vehicleType,
            }
        });
        return captain;
}