import NavButton from "./ContactButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar(){

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
      <>
          <div className="flex fixed justify-center w-screen h-[76px] bg-accent/25 border-b-[1.5px] border-blue-border backdrop-blur-md z-100">
              <div className="flex relative h-auto w-screen lg:w-2xl mx-8 lg:m-0 text-white font-[kodomo] text-[24px] md:text-[28px] items-center">
                  <button className="cursor-pointer" onClick={handleScrollToTop}>Emma Nishikawa</button>
                  <div className="ml-auto"><NavButton/></div>
              </div>
          </div>
      </>
  )
}