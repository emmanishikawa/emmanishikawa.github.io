import { useEffect, useRef, useState } from "react";
import songs from "./Songs.ts"
import playIcon from "../assets/icons/play.svg";
import pauseIcon from "../assets/icons/pause.svg";
import skipIcon from "../assets/icons/skip-forward.svg";

export default function MusicPlayer() {
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);

    const audioRef = useRef(new Audio(songs[count].song_url));

    useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[count].song_url);
    if (play) {
      audioRef.current.play();
    }
    }, [count]);

    const handlePlay = () => {
        if (!play) {
        audioRef.current.play();
        setPlay(true);
        } else {
        audioRef.current.pause();
        setPlay(false);
        }
    };

    return (
        <>
        <div className='hidden lg:flex fixed left-5 bottom-5 items-center justify-center h-16 w-60 p-5  bg-accent rounded-3xl border-[1.5px] border-blue-border cursor-crosshair'>
            <div className="flex flex-row ml-1 ">
                <div className="flex flex-col">
                    <div className="max-h-5 w-32 px-2 text-[16px] overflow-hidden font-[kodomo] text-white">{songs[count].title}</div>
                    <div className="text-[12px] px-2 text-mygray-500">{songs[count].artist}</div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <button className="flex h-10 w-10 mr-1 items-center justify-center bg-main rounded-2xl border-[1.5px] border-blue-border cursor-pointer" onClick={handlePlay}><img src={play ? pauseIcon : playIcon}/></button>
                    <button className="flex h-10 w-10 mr-1 items-center justify-center bg-main rounded-2xl border-[1.5px] border-blue-border cursor-pointer" onClick={()=>{
                        setCount(prevCount => (prevCount + 1) % 5);
                        if(play) {handlePlay()};
                    }}><img src={skipIcon}/></button>
                </div>
            </div>
        </div>
        </>
    )
}
