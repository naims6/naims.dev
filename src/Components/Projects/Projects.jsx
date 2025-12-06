import React from "react";
import ToyBazzar from "../../assets/projects/toybazzar.png";
import BookHaven from "../../assets/projects/thebookhaven.png";
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: BookHaven,
      name: "The Book Haven",
      description:
        "The Book Haven is a modern full-stack web application built with React and Tailwind CSS, designed for book lovers.",
      githubReposiory: "https://github.com/naims6/The-Book-Haven.git",
      liveLink: "https://thebookhaven-c1738.web.app/",
    },

    {
      id: 2,
      img: ToyBazzar,
      name: "Toy Bazzar",
      description:
        "TOY BAZAAR is a modern online toy store that allows customers to purchase toys from a wide collection of categories.",
      githubReposiory: "https://github.com/naims6/Toy-Bazaar.git",
      liveLink: "https://toy-bazaar-fc704.web.app/",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
        {projects.map((p) => (
          <div className="border border-gray-600/25 rounded-xl p-2.5 shadow-sm">
            <figure className="rounded-xl bg-gray-700 overflow-hidden">
              <Link target="_blank" to={p.githubReposiory}>
                <img
                  className="w-full h-[230px] rounded-xl object-cover hover:scale-102 transition-all duration-300 cursor-pointer"
                  src={p.img}
                  alt={p.name}
                />
              </Link>
            </figure>
            {/* name, github and live link */}
            <div className="mt-3 flex justify-between items-center">
              <h2 className="font-medium text-xl">{p.name}</h2>
              <div className="flex gap-1">
                <a
                  href={p.githubReposiory}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href={p.liveLink}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* desc */}
            <div className="mt-3">
              <p className="text-text-secondary">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
