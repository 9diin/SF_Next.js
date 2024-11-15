import { useState } from "react";
import navJson from "./nav.json";

interface Nav {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function Nav() {
    const [navMenu, setNavMenu] = useState<Nav[]>(navJson);
    return <nav>Nav</nav>;
}

export { Nav };
