const mongoose=require('mongoose');

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        maxlength: 40,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // validate: function ( email ) {
        //     return new Promise( function ( resolve ) {
        //         setTimeout( function () {
        //             resolve( isEmail( email ) );
        //         }, 5 );
        //     } );
        //},

    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    // confirmedEmail: Boolean
}, {
    timestamps: true
} );

userSchema.methods.toJSON = function () { //para no enviar el password(se mira en el network)
    const user = this._doc;
    delete user.password;
    return user
}

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;