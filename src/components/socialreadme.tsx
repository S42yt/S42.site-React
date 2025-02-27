"use client";

import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

interface Channel {
  name: string;
  pfp: string;
  description: string;
  url: string;
}

export default function SocialReadme() {
  const [channels, setChannels] = useState<Channel[]>([]);

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

  return (
    <ScrollAnimation className="p-5 mx-5 mb-10 text-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-300/80">👋 My Social Channels</h1>
      <div className="space-y-12">
        {channels.map((channel, index) => (
          <div key={index} className="channel mb-10">
            <h2 className="text-2xl font-bold mb-4">{channel.name}</h2>
            <div className="relative w-[150px] h-[150px] mx-auto my-4 transition-all duration-300 rounded-full hover:rounded-lg overflow-hidden">
              <Image 
                src={channel.pfp} 
                alt={`${channel.name} profile`} 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-400 mb-4">{channel.description}</p>
            <a 
              href={channel.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visit {channel.name}
            </a>
            <hr className="border-gray-700 my-8" />
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}