import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { Avatar, AvatarFallback, AvatarImage, Button, Separator } from "@/components/ui";
import { BookMarked } from "lucide-react";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles[`header__logo-box`]}>
                <Link to={"/bookmark"}>
                    <img src="src/assets/logo.svg" alt="" className={styles[`header__logo-box__logo`]} />
                </Link>
            </div>
            <div className={styles[`header__user-box`]}>
                {/* 북마크 버튼 */}
                <Button variant={"secondary"}>
                    <BookMarked />
                    북마크
                </Button>
                <Separator orientation="vertical" className="h-10 mx-1" />
                {/* 아바타  */}
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* 유저 닉네임 & 이메일 */}
                <div className="flex items-center gap-1">
                    <small className="text-sm font-medium leading-none">9Diin</small>&middot;
                    <small className="text-sm font-medium leading-none">9Diin@gmail.com</small>
                </div>
            </div>
        </header>
    );
}

export { Header };
