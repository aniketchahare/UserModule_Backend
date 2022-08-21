const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: Number,
        trim: true,
        required: true
    },
    emailId: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    profileUrl: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('users', userSchema);

module.exports = {
    async create(userData) {
        try {
            let user = new User(userData)
            return await user.save();
        } catch (err) {
            // console.error("create err in mondel--> ", err);
            throw err;
        }
    },

    async find(query) {
        try {
            return await User.find(query);
        } catch (err) {
            // console.error("find err in mondel--> ", err);
            throw err;
        }
    },

    async update(findBy, data) {
        try {
            return await User.findByIdAndUpdate(findBy, { $set: data }, { new: true });
        } catch (err) {
            // console.error(err);
            throw err;
        }
    },

    async delete(findBy) {
        try {
            return await User.findOneAndDelete(findBy);
        } catch (err) {
            // console.error(err);
            throw err;
        }
    },


    async get(findBy) {
        try {
            return await User.find(findBy);
        } catch (err) {
            // console.error(err);
            throw err;
        }
    },
}