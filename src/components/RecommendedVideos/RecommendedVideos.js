import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./RecommendedVideos.css";
import Ad from "./ad.png";

function RecommendedVideos() {
  let componentArr = [];
  for (let i = 0; i <= 5; i++) {
    componentArr.push(
      <VideoCard
        title="Voice Of Wrestling Ep-110"
        views="220k Views"
        timestamp="1 day ago"
        channelImage="https://yt3.ggpht.com/5o948bG7HzhrVMOJQFi4ZzQeoV3YAXthbFpkJb-W7anyKNCjraL01Jm7RW7XzmE5ZTPVikDROg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Wrestle Chatter"
        image="https://img.youtube.com/vi/-MEwjWg5bhA/maxresdefault.jpg"
      />
    );
    componentArr.push(
      <VideoCard
        title="CM Punk Returns"
        views="2M Views"
        timestamp="1 year ago"
        channelImage="https://yt3.googleusercontent.com/ytc/APkrFKZ22keNcl3_YJhYmq4BZLFvXYw5YlueM-iqoyCXLu0=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="WWE"
        image="https://img.youtube.com/vi/z-6DiL4IiKs/maxresdefault.jpg"
      />
    );
    componentArr.push(
      <VideoCard
        title="Bumbrah leaving Mumbai Indians ?"
        views="110k Views"
        timestamp="2 Days ago"
        channelImage="https://yt3.ggpht.com/SayIlQf1KaQLZAXVWY328-KhqZIHST4xPtZEbZIQSrCGJuLSsORrHdalSlX3zKM4J_li33SCsY4=s68-c-k-c0x00ffffff-no-rj"
        channel="Crico"
        image="https://img.youtube.com/vi/gYlBUVKy490/maxresdefault.jpg"
      />
    );
    componentArr.push(
      <VideoCard
        title="This SmartPhone is Great Value For Money!"
        views="225K Views"
        timestamp="19 hours ago"
        channelImage="https://yt3.ggpht.com/0op3NrEEmhcR4jwkCnSNv4PWvHE6kj7He8C2aocxyLfx1Tx-hN1JwmxaUj5O626ooqnWSrCJ=s68-c-k-c0x00ffffff-no-rj"
        channel="Tech Burner"
        image="https://img.youtube.com/vi/5aFgJpL1mBw/maxresdefault.jpg"
      />
    );
    componentArr.push(
      <VideoCard
        title="Chief Minister For 24 Hours"
        views="229K Views"
        timestamp="1 Month ago"
        channelImage="https://yt3.ggpht.com/ytc/APkrFKbcLA9WyrcIfCfh_tQ0H5-Td4y7u170BnxNaBcdKg=s68-c-k-c0x00ffffff-no-rj"
        channel="Fukra Insaan"
        image="https://img.youtube.com/vi/Ek_4quIEIKE/maxresdefault.jpg"
      />
    );
  }
  return (
    <div className="recommendedVideos">
      <img className="ad-pic" src={Ad}></img>
      <div className="recommendedVideos_videos">{componentArr}</div>
    </div>
  );
}

export default RecommendedVideos;
