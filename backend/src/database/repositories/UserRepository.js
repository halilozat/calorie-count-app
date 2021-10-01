// class UserRepository {
//     constructor(model) {
//         this.model = model;
//     }

//     addUser(user) {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const newUser = this.model.create(user);
//                 const output = await newUser.save();

//                 resolve(output);
//             } catch (error) {
//                 reject(error);
//             }
//         })
//     }

// }


// module.exports = UserRepository;