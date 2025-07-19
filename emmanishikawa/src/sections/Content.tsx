import Intro from "./Intro";

export default function Content(){
    return (
        <>
            <div className="flex h-screen w-screen justify-center ">
                <div className="flex relative w-screen h-auto mx-8 lg:m-0 lg:w-3xl top-14 lg:top-25 justify-center">
                    <Intro/>
                </div>
            </div>
        </>
    )
}