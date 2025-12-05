import { Link } from "react-router";
import AuthorImage from "../../assets/fullstack-developer.jpg";
import About from "./About/About";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          {/* image part */}
          <div className="w-22 h-22 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover cursor-pointer transfrom hover:scale-102 transition-all duration-300"
              src={AuthorImage}
              alt="Full Stack Developer Image"
            />
          </div>
          {/* details part name, title, location*/}
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter">
              Naim Sorker
            </h1>
            <h3 className="text-lg font-medium text-text-secondary">
              Full-Stack Developer
            </h3>
            <h4 className="text-sm text-text-secondary">Dhaka, Bangladesh</h4>
          </div>
        </div>
      </div>
      <About />
      {/* contacts actions btn */}
      <div className="flex items-center gap-5 mt-6">
        <Link className="flex items-center bg-bg-surface text-text-reverse py-2 px-5 rounded-lg gap-2 text-base font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-user"
          >
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M15 18a3 3 0 1 0-6 0"></path>
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
            <circle cx="12" cy="13" r="2"></circle>
          </svg>
          <span className="tracking-wide">Resume</span>
        </Link>
        {/* linked in  */}
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin size-5 hover:transition-colors group-hover:text-neutral-800 group-hover:dark:text-neutral-200"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
        {/* github */}
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github size-5 hover:transition-colors group-hover:text-neutral-800 group-hover:dark:text-neutral-200"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </Link>
        {/* email */}
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail size-5 hover:transition-colors group-hover:text-neutral-800 group-hover:dark:text-neutral-200"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
