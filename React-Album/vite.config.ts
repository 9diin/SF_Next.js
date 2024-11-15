import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // // SCSS 파일을 전역으로 불러오기 위한 설정
                // additionalData: `@use "@/styles/scss/index.scss";`, // `as *`를 추가해 SCSS가 전역에서 사용되도록 처리
                api: "modern", // 또는 api 옵션을 생략해도 될 수 있습니다.
            },
        },
    },
});
