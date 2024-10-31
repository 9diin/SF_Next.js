import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartCandlestick, FolderOpen, Globe } from "lucide-react";
import navJson from "./nav.json";

interface Navigation {
    id: number;
    path: string;
    label: string;
    isActive: boolean;
    icon: string;
}

const iconMapping: { [key: string]: JSX.Element } = {
    FolderOpen: <FolderOpen className="mr-2 text-neutral-600" />,
    ChartCandlestick: <ChartCandlestick className="mr-2 text-neutral-600" />,
    Globe: <Globe className="mr-2 text-neutral-600" />,
};

function CommonNavigation() {
    const location = useLocation();
    const [navigation, setNavigation] = useState<Navigation[]>(navJson);

    useEffect(() => {
        navigation.forEach((nav: Navigation) => {
            nav.isActive = false;

            if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
                nav.isActive = true;
            }
        });
        setNavigation([...navigation]);
    }, [location.pathname]);

    // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출해보도록 한다.
    const navLinks = navigation.map((item: Navigation) => {
        const icon = iconMapping[item.icon]; // Get the icon component

        return (
            <Link to={item.path} className={item.isActive ? `w-full h-full flex item-center py-2 px-4 bg-neutral-100 rounded-md` : `w-full h-full flex items-center py-2 px-4`} key={item.path}>
                <div className="flex items-center">
                    {icon}
                    <span className="text-lg font-medium">{item.label}</span>
                </div>
            </Link>
        );
    });
    return (
        <nav className="h-full w-80 flex flex-col bg-white border-x px-10 py-8 gap-14">
            <div className="w-full">
                <img src="/assets/images/logo.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4">{navLinks}</div>
        </nav>
    );
}

export { CommonNavigation };
