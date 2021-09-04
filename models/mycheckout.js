const mongoose = require('mongoose')
const mycheckout = mongoose.model('mycheckout', {
    userid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    paymentmethod: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    },
    token: {
        type: String
    },
    productinfo: {
        myproduct: [{
            productname: {
                type: String
            },
            productid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
            },
            productquantity: {
                type: String
            }
        }],
        itemcount: {
            type: String,
        },
        totalamount: {
            type: String
        },

        totalamounttax: {
            type: String
        },

    },

    billingaddress: {
        billingfirstname: {
            type: String
        },
        billinglastname: {
            type: String
        },
        billingphone: {
            type: String
        },
        billingemail: {
            type: String
        },
        billingaddress: {
            type: String
        },
        billingzip: {
            type: String
        },
        billingdistrict: {
            type: String
        },
        billingprovince: {
            type: String
        }
    },

    checkoutDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mycheckout;