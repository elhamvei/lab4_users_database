const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: 'Invalid email format'
        }
    },
    address: {
        street: {
            type: String,
            required: [true, 'Street is required']
        },
        suite: {
            type: String,
            required: [true, 'Suite is required']
        },
        city: {
            type: String,
            required: [true, 'City is required'],
            validate: {
                validator: (value) => /^[a-zA-Z\s]+$/.test(value),
                message: 'City name must contain only alphabets and spaces'
            },
            zipcode: {
                type: String,
                required: [true, 'Zip code is required'],
                validate: {
                    validator: (value) => /^\d{5}-\d{4}$/.test(value),
                    message: 'Zip code format must be like 12345-1234'
                },
                geo: {
                    lat: {
                        type: Number,
                        required: [true, 'Latitude is required']
                    },
                    lng: {
                        type: Number,
                        required: [true, 'Longitude is required']
                    }
                }
            },
            website: {
                type: String,
                required: true,
                validate: {
                    validator: (value) => {
                        return validator.isURL(value, { protocols: ['http', 'https'] });
                    },
                    message: 'Invalid web URL address'
                }
            },
            company: {
                name: {
                    type: String,
                    required: [true, 'Company name is required']
                },
                catchPhrase: {
                    type: String,
                    required: [true, 'Catch phrase is required']
                },
                bs: {
                    type: String,
                    required: [true, 'BS is required']
                }
            },
            phone: {
                type: String,
                required: true,
                validate: {
                    validator: (value) => {
                        return /^\d-\d{3}-\d{3}-\d{4}$/.test(value);
                    },
                    message: 'Phone format must be like 1-123-123-1234'
                }
            }
        });

const User = mongoose.model('User', userSchema);

module.exports = User;
