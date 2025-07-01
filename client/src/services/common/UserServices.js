import axios from "axios";

export const getDetailUser = async() => {
    try {

        const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_API}/`
        )
        return res.data
        
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
    throw error;
    }
}