/** Dependencies */
const { attributes } = require("structure");

const UserFoodDTO = attributes({
    UserId: {
        type: Number,
        required: true,
    },
    FoodName: {
        type: String,
        required: true,
    },
    Gram: {
        type: Number,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    },
    Calorie: {
        type: Number,
        required: true,
    },
    Carb: {
        type: Number,
        required: true,
    },
    Protein: {
        type: Number,
        required: true,
    },
    Fat: {
        type: Number,
        required: true,
    },
})(
    class UserFoodDTO {
        // greet() {
        //   return `Hello ${this.name}`;
        // }
    }
);

module.exports = UserFoodDTO;