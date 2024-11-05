const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const instanceSchema = new mongoose.Schema({
    instanceId: {
        type: String,
        require: true,
        default: uuidv4
    },
    name: {
        type: String,
        required: true
    },
    participantTypes: {
        type: [String],
        required: true
    },
    tickets: {
        type: [String],
        required: true
    },
    alloted: {
        type: Number,
        required: true
    },
    checkin: {
        type: Number,
        required: true,
        default: 0
    },
    pending: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Instance = mongoose.model("instances", instanceSchema);
module.exports = Instance;
