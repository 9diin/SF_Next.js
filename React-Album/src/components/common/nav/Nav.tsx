import { useState } from "react";
import { Link } from "react-router-dom";

import navJson from "./nav.json";
import styles from "./nav.module.scss";

interface Nav {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function Nav() {
    const [navMenu, setNavMenu] = useState<Nav[]>(navJson);

    /** 네비게이션 UI */
    /** useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출해보도록 한다. */
    const navLinks = navMenu.map((nav: Nav) => {
        return (
            <Link to={nav.path} key={nav.index}>
                <small className="text-sm font-normal leading-10">{nav.label}</small>
            </Link>
        );
    });

    return <nav className={styles.nav}>{navLinks}</nav>;
}

export { Nav };
