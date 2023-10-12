import Header from "../Header/Header";
import { BiSearch } from "react-icons/bi";

export default function Hero() {
  return (
    <section className="hero_wrap h-[85vh] md:h-[95vh]">
      <Header />

      <div className="container h-full z-20 relative">
        <div className="h-full flex flex-col justify-center items-center gap-6 -mt-20">
          <h2 className="text-4xl sm:text-7xl font-semibold">Learn to Code</h2>
          <p className="sm:text-2xl">Largest web developer Blog site.</p>
          <div className="relative">
            <input
              type="text"
              className="sm:w-[500px] border outline-none pl-4 pr-11 py-2.5 text-[15px] rounded-md placeholder:font-light focus:border-primary focus:border text-neutral"
              placeholder="Insert tracking ID to track your parcel"
            />

            <button className="absolute right-3 top-3 border-l pl-3">
              <BiSearch className="text-primary text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
