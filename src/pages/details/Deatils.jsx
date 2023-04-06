import React from 'react'
import './style.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DeatilsBanner from './deatailbanner/DeatilsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosection/VideoSeaction'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'



const Deatils = () => {
  const {mediaType,id}=useParams();
  const {data,loading} =  useFetch(`/${mediaType}/${id}/videos`);

  const {data : credits, loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DeatilsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Deatils