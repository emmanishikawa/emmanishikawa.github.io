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
        <div className='hidden lg:flex items-center justify-center h-14 w-56 p-5  bg-blue-100 rounded-3xl'>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="max-h-5 w-32 pr-2 text-[16px] overflow-hidden font-[kodomo]">{songs[count].title}</div>
                    <div className="text-[10px]">{songs[count].artist}</div>
                </div>
                <div className="flex flex-row">
                    <button onClick={handlePlay}><img src={play ? pauseIcon : playIcon}/></button>
                    <button onClick={()=>{
                        setCount(prevCount => (prevCount + 1) % 5);
                        if(play) {handlePlay()};
                    }}><img src={skipIcon}/></button>
                </div>
            </div>
        </div>
        </>
    )
}
