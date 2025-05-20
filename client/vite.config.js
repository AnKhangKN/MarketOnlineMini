import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: [
            "react-icons/hi",       // hoặc các nhóm icon khác bạn dùng như "react-icons/fa", "react-icons/md"
            "antd",                 // preload để tránh lỗi khi Ant Design đang optimize
        ],
    },
});
