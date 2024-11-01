import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Card } from "@/components/ui/card";

function GetKakaoMapCard() {
    useKakaoLoader();

    return (
        <Card>
            <Map // 지도를 표시할 Container
                id="map"
                center={{
                    // 지도의 중심좌표
                    lat: 37.5683,
                    lng: 126.9778,
                }}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                }}
                level={13} // 지도의 확대 레벨
            >
                <MapMarker // 마커를 생성합니다
                    position={{
                        // 마커가 표시될 위치입니다
                        lat: 37.5683,
                        lng: 126.9778,
                    }}
                />
            </Map>
        </Card>
    );
}

export { GetKakaoMapCard };
