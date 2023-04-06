import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import Carousel from "../../../Components/carousel/Carousel";
import SwitchTabs from "../../../Components/switchtab/SwitchTab";
import {TiArrowLeftOutline} from 'react-icons/ti'
import "./style.scss";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <div>
                <span className="carouselTitle">Popular</span>
                </div>
                <SwitchTabs data={["Movies", "TV Show"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default Popular;