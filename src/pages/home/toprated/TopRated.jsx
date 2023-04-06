import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import Carousel from "../../../Components/carousel/Carousel";
import SwitchTabs from "../../../Components/switchtab/SwitchTab";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle"> Top Rated</span>
                <SwitchTabs data={["Movies", "TV Show"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}   endpoint={endpoint}/>
        </div>
    );
};

export default TopRated;