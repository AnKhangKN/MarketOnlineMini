const getDetailUser = (res, req) => {
    try {

        const user = req.user;

        const result = UserServices.getDetailUser

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
        })
    }
}

module.exports = {
    getDetailUser
}