const UserServices = require("../../services/shared/UserServices");

const getDetailUser = async (req, res) => {
    try {
        const userId = req?.user?._id;

        const result = await UserServices.getDetailUser(userId);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
        });
    }
};

module.exports = {
    getDetailUser,
};
