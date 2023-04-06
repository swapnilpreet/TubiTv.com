import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/lazyLoadImages/Img";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setbackground] = useState("");
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const SearchQureyHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, Tv shows and people to discover.Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movies or tv show..."
              onChange={(e) => setquery(e.target.value)}
              onKeyUp={SearchQureyHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
