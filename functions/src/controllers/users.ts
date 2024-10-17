import User from "../models/User";
import establishConnection from "../establishConnection";
import HTTPHandler from "../interfaces/HTTPHandler";

// CREATE
export const postUser: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();

        const user = new User({
            ...req.body,
			createdBy: req.body.createdBy
        });

        await user.save(); 

        res.status(201).send(user); 
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(400).send("Bad Request"); 
    }
};

// READ 1
export const getUser: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (err) {
        res.status(404).send("User Not Found");
    }
};

// READ ALL
export const getUsers: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const users = await User.find();
        res.status(200).send(users);
    } catch (e: any) {
        res.status(500).send("Server Error");
    }
};

// UPDATE
export const putUser: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(user);
    } catch (err) {
        res.status(404).send("User Not Found");
    }
};

// DESTROY
export const deleteUser: HTTPHandler = async (req, res) => {
    try {
        await establishConnection();
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(404).send("User Not Found");
    }
};


