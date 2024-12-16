import React, { useEffect, useState, useRef } from 'react';
import './styles/portfolio.css';

const texts = ["S42.site", "Portfolio", "Developer", "Designer"];

const Portfolio: React.FC = () => {
    const [currentText, setCurrentText] = useState(texts[0]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isReadmeVisible, setIsReadmeVisible] = useState(false);
    const readmeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setCurrentText(
                isDeleting
                    ? fullText.substring(0, currentText.length - 1)
                    : fullText.substring(0, currentText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 10000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, typingSpeed]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsReadmeVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (readmeRef.current) {
            observer.observe(readmeRef.current);
        }

        return () => {
            if (readmeRef.current) {
                observer.unobserve(readmeRef.current);
            }
        };
    }, []);

    return (
        <div className="portfolio">
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <h1 className='headertext'>{currentText}<span className="cursor">|</span></h1>
            </header>
            <section className="portfolio-content">
                <p>Welcome to my portfolio! Here you will find my projects and experiences.</p>
                <div style={{ height: '150vh' }}></div> {/* Added extra height for scrolling */}
                <div ref={readmeRef} className={`readme-content ${isReadmeVisible ? 'slide-in' : ''}`}>
                    <h2>👋 Hey its me S42</h2>
                    <ul>
                        <li>✨I’m a <strong>German</strong> 🇩🇪 and <strong>Turkish</strong>🇹🇷</li>
                        <li>👾<strong>Software Developer</strong> and <strong>Software Designer</strong></li>
                        <li>💽Working on <a href="https://biogg.net">Biogg.net</a> and <a href="http://discord.cutecraft.net">CuteCraft.net</a> at the Moment</li>
                    </ul>
                    <p><em>i stole from tamikaschu uwu</em></p>
                    <h3>📲Contact me through Discord: <a href="https://discord.com/users/787306646417571860">S42</a></h3>
                    <hr />
                    <h3>🔥Skills and Tools:</h3>
                    <p>
                        <img src="https://img.shields.io/badge/vscode-%231572B6.svg?style=for-the-badge&logo=vscode&logoColor=white" alt="VSCode" />
                        <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
                        <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash Script" />
                        <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" alt="Cloudflare" />
                        <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
                        <img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
                        <img src="https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white" alt="Deno JS" />
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
                        <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
                        <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" />
                        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
                        <img src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js" />
                        <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
                        <img src="https://img.shields.io/badge/Docker-3982CE?style=for-the-badge&logo=Docker&logoColor=white" alt="Docker" />
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        <img src="https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B" alt="Krita" />
                        <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" alt="Unity" />
                        <img src="https://img.shields.io/badge/unrealengine-%23313131.svg?style=for-the-badge&logo=unrealengine&logoColor=white" alt="Unreal Engine" />
                        <img src="https://img.shields.io/badge/blockbench-%231572B6.svg?style=for-the-badge&logo=blockbench&logoColor=white" alt="Blockbench" />
                    </p>
                    <h3>💻 Learning at the Moment:</h3>
                    <p>
                        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                        <img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
                        <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                        <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
                    </p>
                    <hr />
                    <h3>📊 Stats:</h3>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=S42yt&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="GitHub Stats" />
                    <hr />
                    <h3>💰 You can help me by Donating</h3>
                    <a href="https://patreon.com/S42yt">
                        <img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Patreon" />
                    </a>
                    <hr />
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
