const AuthServices = require("../../services/shared/AuthServices") ;

const signUpUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (!email || !password || !confirmPassword) {
            return res.status(400).send({
                error: "Thiếu thông tin!",
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                error: "Mật khẩu không khớp!",
            });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Email không hợp lệ!"
            });
        }

        const result = await AuthServices.signUpUser(email, password);

        return res.status(200).json(result); 

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal Server Error",
        });
    }
};

const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await AuthServices.signInUser(email, password);

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({
            error: error.message || "Internal Server Error",
        })
    }
}

module.exports = {
    signUpUser,
    signInUser
};
