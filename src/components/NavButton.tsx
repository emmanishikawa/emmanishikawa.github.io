import links from "./Links.ts";

export default function NavButton(){
    return (
        <>
            <div className="flex flex-row">
                {links.map((link) => (
                    <button className="h-10 w-10 mr-1 p-2 items-center justify-center bg-main rounded-2xl border-[1.5px] border-blue-border cursor-pointer" type="button"
                        onClick={() => {
                            window.open(link.url, '_blank');
                            }}>
                        <img src={link.svg_url}/>
                    </button>
                ))}
            </div>    
        </>
    )
}