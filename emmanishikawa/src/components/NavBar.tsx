import NavButton from "./NavButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar(){

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
      <>
          <div className="flex fixed justify-center w-screen h-[60px] bg-accent/25 border-b-[1.5px] border-blue-border backdrop-blur-md z-100">
              <div className="flex relative h-auto w-screen lg:w-3xl mx-8 lg:m-0 text-white font-[kodomo] text-[20px] md:text-[22px] items-center">
                  <button className="cursor-pointer" onClick={handleScrollToTop}>Emma Nishikawa</button>
                  <div className="ml-auto"><NavButton/></div>
              </div>
          </div>
      </>
  )
}