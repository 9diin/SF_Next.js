import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { searchValueAtom } from "@/store";

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
    const location = useLocation();
    const [searchValue, setSearchValue] = useAtom(searchValueAtom);
    const [navMenu, setNavMenu] = useState<Nav[]>(navJson);

    useEffect(() => {
        navMenu.forEach((nav: Nav) => {
            nav.isActive = false;

            if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
                nav.isActive = true;
                setSearchValue(nav.searchValue);
            }
        });
        setNavMenu([...navMenu]);
    }, [location.pathname]);

    /** 네비게이션 UI */
    /** useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출해보도록 한다. */
    const navLinks = navMenu.map((nav: Nav) => {
        return (
            /** Link를 클릭했을 때, navMenu에서 map 함수를 통해 순환하는 nav의 요소를 가지고 검색 기능처럼 구현한다.
             * 1. searchValue를 활용해야 할 것 같다.
             * 2. searchValue를 store에 선언한 searchValueAtom에 할당해야할 것 같다.
             * 2-1. Link 클릭을 했을 때, path가 바뀐다. => path 경로에 대한 데이터를 활용할 수 있을 것 같다.
             * 2-2. Link를 Button으로 바꾼다. 클릭 이벤트를 할당하고 => 이벤트 내에서 setAtom과 관련된 함수를 호출한다.
             */
            <Link to={nav.path} key={nav.index}>
                <small className="text-sm font-normal leading-10">{nav.label}</small>
            </Link>
        );
    });
    return <nav className={styles.nav}>{navLinks}</nav>;
}

export { Nav };
