import React from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './RecommendedVideos.css';
import Ad from './ad.png';

function RecommendedVideos() {
  let componentArr = [];
  for(let i = 0;i <= 5;i++){
    componentArr.push(<VideoCard
      title="Inside the World's Highest Tech Prison."
      views="1.3M Views"
      timestamp="1 day ago"
      channelImage="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s176-c-k-c0x00ffffff-no-rj"
      channel="Mrwhosetheboss"
      image="https://i.ytimg.com/vi/lHtocbq47o4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpxlwNv0rBRbYdWF8AX3aRNrG_GQ"
    />);
    componentArr.push(<VideoCard
      title="Lionel Messi vs Liverpool (HOME) - 2018 HD."
      views="793K Views"
      timestamp="1 year ago"
      channelImage="https://yt3.ggpht.com/Us_corDV-asik-4_CL1EMGimJPjJTwmzUKFaI-CQ4rTxI_2Rl7ezuHvQlbe-0xUA_1hXQ530zyc=s88-c-k-c0x00ffffff-no-rj"
      channel="LittleMagician HD"
      image="https://i.ytimg.com/vi/Y1OdlUH193Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaYYuk0DgcqupM1xTPvNeAo5aoSg"
    />);
    componentArr.push(<VideoCard
      title="How to Make Learning as Addictive as Social Media..."
      views="2.3M Views"
      timestamp="3 weeks ago"
      channelImage="https://yt3.ggpht.com/ytc/APkrFKbX5I7QRigmp4xY1PkSe5neweYxhJGOTizuQpqiTg=s68-c-k-c0x00ffffff-no-rj"
      channel="TED"
      image="https://i.ytimg.com/vi/P6FORpg0KVo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKPgUAJRlD8GfzjIhTufSR8LTdwg"
    />);
    componentArr.push(<VideoCard
      title="Messi is INSANE in 2023"
      views="10K Views"
      timestamp="19 hours ago"
      channelImage="https://yt3.ggpht.com/ytc/APkrFKa-mPwRwPKgJta6JOrGyvWjy-rIRAfpBwPd90IFWA=s88-c-k-c0x00ffffff-no-rj"
      channel="Dinho"
      image="https://i.ytimg.com/vi/DaEQt5YRbqA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvUk4FtZd07YQSkCzFM382sheWIg"
    />);
    componentArr.push(<VideoCard
      title="L13. Print all Permutations of a String/Array | Recursion..."
      views="229K Views"
      timestamp="2 years ago"
      channelImage="https://yt3.ggpht.com/ytc/APkrFKZ5jBrOJvXn14fdwPWEijA1nDvY9Z09--HgyQrA=s68-c-k-c0x00ffffff-no-rj"
      channel="take U forward"
      image="https://i.ytimg.com/vi/f2ic2Rsc9pU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU1CS3xJMf8qFRCedXvgsWYnwmfA"
    />);
  }
  return (
    <div className='recommendedVideos'>
      <img className='ad-pic' src={Ad}></img>
      <div className='recommendedVideos_videos'>
        {componentArr}
      </div>
    </div>
  )
}

export default RecommendedVideos
