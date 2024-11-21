import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Toaster } from "@/shared/ui/toast/toaster";
import { AsideSection } from "@/widgets";
import "./styles/globals.css";
import "./styles/main.scss";

const NOTO_SANS_KR = Noto_Sans_KR({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "NEXT.js TODO-BOARD",
    description: "NEXT.js와 Shadcn UI를 활용한 TODO-BOARD 만들기",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={NOTO_SANS_KR.className}>
                <div className="page">
                    <AsideSection />
                    <main className="page__main">{children}</main>
                </div>
                <Toaster />
            </body>
        </html>
    );
}
