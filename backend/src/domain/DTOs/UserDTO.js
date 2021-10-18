/** Dependencies */
const { attributes } = require("structure");

const UserDTO = attributes({
    UserName: {
        type: String,
        required: true,
        default: ''
    },
    Email: {
        type: String,
        required: true,
        default: ''
    },
    Password: {
        type: String,
        required: true,
        default: ''
    },
    Status: {
        type: String,
        required: true,
        default: 'NotCompleted'
    },
    CreatedDateTime: {
        type: String,
        required: true,
        default: ''
    },
    UpdatedDateTime: {
        type: String,
        required: true,
        default: ''
    },
})(
    class UserDTO {
        // greet() {
        //   return `Hello ${this.name}`;
        // }
    }
);

module.exports = UserDTO;