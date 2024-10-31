import { CommonHeader, CommonNavigation } from "@/components/common";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <CommonNavigation />
                <div className="flex-1 py-6 px-8">
                    <CommonHeader />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
