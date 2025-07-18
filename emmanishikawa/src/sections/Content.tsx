import Intro from "./Intro";

export default function Content(){
    return (
        <>
            <div className="flex h-screen w-screen justify-center ">
                <div className="flex relative w-screen h-auto lg:w-3xl lg:top-25 justify-center">
                    <Intro/>
                </div>
            </div>
        </>
    )
}