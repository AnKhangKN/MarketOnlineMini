const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./app");

dotenv.config();

const PORT = process.env.PORT || 5050;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running in port ${PORT}`);
    });
});
