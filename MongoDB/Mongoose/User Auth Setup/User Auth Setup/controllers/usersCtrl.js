import User from "../models/User";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const registerUserCtrl = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("User already exists");
    }


    //Hashing the password can be done like this;
    //generates the algorithm to use for hashing
    const salt = await bcrypt.genSalt(15); //oy320t/fb;qp21y37y1-627-[i3f]
    //hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt); // 123456 => oy320t/fb;qp21y37y1-627-[i3f]


    // Create new user
    const user = await User.create({
        username,
        email,
        password
    });
    res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: user
    });
})