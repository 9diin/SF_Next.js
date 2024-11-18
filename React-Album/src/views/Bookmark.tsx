import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/common";
import { ImageCard } from "@/components/home";
import { ImageDataType } from "@/types";

function BookmarkPage() {
    const { toast } = useToast();
    const [bookmarks, setBookmarks] = useState<ImageDataType[]>([]);

    const getLocalStorage = () => {
        const storedImages = localStorage.getItem("bookmark");
        let bookmarks: ImageDataType[] = [];

        if (storedImages) {
            try {
                bookmarks = JSON.parse(storedImages);
            } catch (error) {
                console.error("Error parsing localStorage:", error);
                bookmarks = [];
            }
        }

        if (bookmarks.length === 0) {
            toast({
                title: "로컬스토리지에 저장된 데이터가 없습니다.",
            });
        } else {
            setBookmarks([...bookmarks]);
        }
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                {bookmarks.length ? (
                    <div className="page__container__contents">
                        {bookmarks.map((image: ImageDataType) => {
                            return <ImageCard data={image} key={image.id} />;
                        })}
                    </div>
                ) : (
                    <div className="w-full flex items-center justify-center mt-24 text-xl">
                        조회가능한 데이터가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookmarkPage;
