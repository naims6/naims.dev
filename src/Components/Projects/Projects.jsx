import React from "react";
import ToyBazzar from "../../assets/projects/toybazzar.png";
import BookHaven from "../../assets/projects/thebookhaven.png";
const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
        {/* project card */}
        <div className="border border-gray-600/25 rounded-xl p-2.5 shadow-sm">
          <figure className="rounded-xl bg-gray-700">
            <img
              className="w-full h-[230px] rounded-xl object-cover"
              src={BookHaven}
              alt="The book haven"
            />
          </figure>
          {/* name, github and live link */}
          <div className="mt-3 flex justify-between items-center">
            <h2 className="font-medium text-xl">The Book Haven</h2>
            <div className="flex gap-1">
              <button>G</button>
              <button>L</button>
            </div>
          </div>
          {/* desc */}
          <div className="mt-3">
            <p className="text-text-secondary">
              The Book Haven is a modern full-stack web application built with
              React and Tailwind CSS, designed for book lovers.
            </p>
          </div>
        </div>
        {/* project card */}
        <div className="border border-gray-600/30 rounded-xl p-2.5 shadow-sm">
          <figure className="rounded-xl bg-gray-700">
            <img
              className="w-full h-[230px] rounded-xl object-cover"
              src={ToyBazzar}
              alt="toy bazzar image"
            />
          </figure>
          {/* name, github and live link */}
          <div className="mt-3 flex justify-between items-center">
            <h2 className="font-medium text-xl">Toy Bazzar</h2>
            <div className="flex gap-1">
              <button>G</button>
              <button>L</button>
            </div>
          </div>
          {/* desc */}
          <div className="mt-3">
            <p className="text-text-secondary">
              TOY BAZAAR is a modern online toy store that allows customers to
              purchase toys from a wide collection of categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
