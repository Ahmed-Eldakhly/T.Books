const mongoose = require('mongoose')
const ValidationMessage = require('../../../validation-messages');
/**
 {
   "name":"",
   "image":"",
}
*/
const categorySchema = mongoose.Schema({
    categoryName: { 
        type: String, 
        unique: [true,ValidationMessage.CATEGORY_NAME_UNIQUE], 
        minLength: [2,ValidationMessage.CATEGORY_NAME_MIN_LENGTH], 
        maxLength: [30,ValidationMessage.CATEGORY_NAME_MAX_LENGTH],
        required: [true,ValidationMessage.CATEGORY_NAME_REQUIRED] 
    },
    categoryBooks: [{
        type:mongoose.Schema.Types.ObjectId, ref: 'Book'
    }],
    categoryImage:{
        type: String,
        required: [true,ValidationMessage.CATEGORY_IMAGE_REQUIRED]
    }
})

const Category = mongoose.model("Category" , categorySchema);
module.exports = Category;