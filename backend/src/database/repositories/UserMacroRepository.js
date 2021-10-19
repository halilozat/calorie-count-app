class UserMacroRepository {
    constructor(model) {
        this.model = model;
    }

    addUserMacros(macros) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = new this.model(macros);
                const output = await query.save();

                resolve(output);

            } catch (error) {
                reject(error);
            }
        })
    }

    updateUserMacros(userId, updateMacros) {
        return new Promise(async (response, reject) => {
            try {
                const macros = await this.model.findOne({ where: { userId } }); //request.params.userId
                macros.update(updateMacros); //request.body

                response(macros)

            } catch (error) {
                reject(error)
            }
        })
    }

    findMacrosByUserId(userId) {
        return new Promise(async (response, reject) => {
            try {
                const macros = await this.model.findOne({ where: { userId } });

                response(macros);
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteUserMacros(payload) {

    }
}

module.exports = UserMacroRepository;