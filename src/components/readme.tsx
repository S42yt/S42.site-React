"use client";

import { FaReact } from "react-icons/fa";
import toast from "react-hot-toast";
import ScrollAnimation from "./ScrollAnimation";

export default function Readme() {
  const handleReactClick = () => {
    toast("This Website is made with React :D", {
      icon: <FaReact />,
      style: {
        background: "#333",
        color: "#fff",
        marginTop: "80px",
      },
    });
  };

  return (
    <ScrollAnimation className="p-5 mx-5 my-5 mb-10 text-center rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-300/80">👋 Hey its me S42</h1>
      <ul className="list-none p-0">
        <li className="my-2.5">
          ✨I'm a <strong>German</strong> 🇩🇪 and <strong>Turkish</strong>🇹🇷
        </li>
        <li className="my-2.5">
          👾<strong>Software Developer</strong> and{" "}
          <strong>Software Designer</strong>
        </li>
        <li className="my-2.5">
          💽Working on <a href="https://biogg.net" className="text-blue-400 hover:underline">Biogg.net</a> and{" "}
          <a href="https://discord.gg/cutecraft" className="text-blue-400 hover:underline">CuteCraft.net</a> at the Moment
        </li>
      </ul>
      <p></p>
      <h3 className="text-xl font-semibold my-4 text-blue-300/80">
        📲Contact me through Discord:{" "}
        <a href="https://discord.com/users/787306646417571860" className="text-blue-400 hover:underline">S42</a>
      </h3>
      <hr className="border-gray-700 my-6" />
      
      <h2 className="text-2xl font-bold mb-4 text-blue-300/80">🔥Skills and Tools:</h2>
      <div className="flex flex-wrap justify-center gap-2">
        <img
          src="https://img.shields.io/badge/vscode-%231572B6.svg?style=for-the-badge&logo=vscode&logoColor=white"
          alt="VSCode"
          className="m-1"
        />
        {/* Additional skill badges */}
        <img
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="React"
          onClick={handleReactClick}
          className="m-1 cursor-pointer"
        />
        {/* More skill badges would go here */}
      </div>
      
      <h2 className="text-2xl font-bold my-6 text-blue-300/80">💻 Learning at the Moment:</h2>
      <div className="flex flex-wrap justify-center gap-2">
        <img
          src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
          alt="Java"
          className="m-1"
        />
        {/* More learning badges would go here */}
      </div>
      
      <hr className="border-gray-700 my-6" />
      
      <h2 className="text-2xl font-bold mb-4 text-blue-300/80">📊 Stats:</h2>
      <div className="flex justify-center my-4">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=S42yt&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt="Top Languages"
        />
      </div>
      
      <hr className="border-gray-700 my-6" />
    </ScrollAnimation>
  );
}