import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center mx-auto p-3 max-w-6xl justify-between ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">GM</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />

          <button>
            <FaSearch className="text-slate-700" />
          </button>
        </form>

        <ul className=" flex items-center justify-between  gap-4">
                  <Link to="/">
                      <li className="hidden sm:inline text-slate-700 hover:underline font-semibold  " >Home</li>
                  </Link>
                  <Link to="/About">
                      <li className="hidden sm:inline text-slate-700 hover:underline font-semibold   ">About</li>
                  </Link>
                  <Link to="/SingIn">
                      <li className=" text-slate-700 hover:underline font-semibold   ">Sing In</li>
                  </Link>
                  
        </ul>
      </div>
    </header>
  );
};

export default Header;
