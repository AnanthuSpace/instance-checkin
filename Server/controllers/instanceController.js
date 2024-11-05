const Instance = require("../models/instanceModal");

const getInstance = async (req, res) => {
    try {
        const instanceData = await Instance.find()
        return res.status(200).json({ success: true, instanceData });
    } catch (error) {
        console.error("Error saving instance:", error); 
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const addInstance = async (req, res) => {
    try {
        const { instanceName, participantTypes, tickets, alloted } = req.body;

        console.log("Request Body:", req.body); 

        const newInstance = new Instance({
            name: instanceName,
            participantTypes: participantTypes,
            tickets: tickets, 
            alloted: alloted,
        });

        const response = await newInstance.save();

        if (response) {
            const instanceData = await Instance.find({}, { _id: 0 }); 
            console.log("Saved Instance Data:", instanceData); 
            return res.status(200).json({ success: true, message: "Instance added successfully", instanceData });
        }
    } catch (error) {
        console.error("Error saving instance:", error); 
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    getInstance,
    addInstance
};
