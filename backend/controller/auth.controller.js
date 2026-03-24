const authServer = require("../server/auth.server.js");

class AuthController{
    async register(req, res, next){
        try {
            const {email, password} = req.body
            const data = await authServer.register(email, password);
            return res.json(data)
        } catch (error) {
            console.log(error);
        }
    }

    async activation(req, res, next){
        try {
            const userId = req.params.id
            await authServer.activation(userId)
            return res.json({message: 'User activated'})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthController();