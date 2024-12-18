import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./styles/readme.css";

interface Channel {
  name: string;
  pfp: string;
  description: string;
  url: string;
}

const SocialReadme: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchChannels = async () => {
      const data: Channel[] = [
        {
          name: "YouTube",
          pfp: "https://avatars.githubusercontent.com/u/176326202?v=4",
          description:
            "This is my YouTube channel where I upload comedy videos potrated in VideoGames.",
          url: "https://www.youtube.com/channel/@s42yt",
        },
        {
          name: "Twitch",
          pfp: "https://avatars.githubusercontent.com/u/176326202?v=4",
          description:
            "Watch me live on Twitch where I stream coding sessions and gaming.",
          url: "https://www.twitch.tv/s42yt",
        },
        {
          name: "TikTok",
          pfp: "https://avatars.githubusercontent.com/u/176326202?v=4",
          description:
            "Follow me on TikTok for short tech tips and fun videos.",
          url: "https://www.tiktok.com/@s42yt",
        },
        {
          name: "Instagram",
          pfp: "https://avatars.githubusercontent.com/u/176326202?v=4",
          description:
            "Check out my Instagram for behind-the-scenes content and personal updates.",
          url: "https://www.instagram.com/your-channel-id",
        },
      ];
      setChannels(data);
    };

    fetchChannels();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`readme ${isVisible ? "visible" : ""}`}>
      <h1>👋 My Social Channels</h1>
      {channels.map((channel, index) => (
        <div key={index} className="channel">
          <h2>{channel.name}</h2>
          <img src={channel.pfp} alt={`${channel.name} profile`} />
          <p>{channel.description}</p>
          <a href={channel.url} target="_blank" rel="noopener noreferrer">
            Visit {channel.name}
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SocialReadme;
