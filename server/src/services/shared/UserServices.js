const getDetailUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            
        } catch (error) {
            return reject({
                message: error.message
            })
        }
    })
}

module.exports = {
    getDetailUser
}