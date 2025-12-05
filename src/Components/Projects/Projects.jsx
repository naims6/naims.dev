import React from "react";
import ToyBazzar from "../../assets/projects/toybazzar.png";
const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
        {/* project card */}
        <div className="">
          <figure className="rounded-xl bg-gray-700">
            <img
              className="w-full h-[230px] rounded-xl object-cover"
              src={ToyBazzar}
              alt="toy bazzar image"
            />
          </figure>
          {/* name, github and live link */}
          <div className="mt-3 flex justify-between items-center">
            <h2 className="font-medium text-2xl">Toy Bazzar</h2>
            <div className="flex gap-1">
              <button>G</button>
              <button>L</button>
            </div>
          </div>
          {/* desc */}
          <div className="mt-3">
            <p className="text-text-secondary">
              A learning platform with image feedback, group chat, and
              note-taking for streamlined learning.
            </p>
          </div>
        </div>
        {/* project card */}
        <div className="">
          <figure className="rounded-xl bg-gray-700">
            <img
              className="w-full h-[230px] rounded-xl object-cover"
              src={ToyBazzar}
              alt="toy bazzar image"
            />
          </figure>
          {/* name, github and live link */}
          <div className="mt-3 flex justify-between items-center">
            <h2 className="font-medium text-2xl">Toy Bazzar</h2>
            <div className="flex gap-1">
              <button>G</button>
              <button>L</button>
            </div>
          </div>
          {/* desc */}
          <div className="mt-3">
            <p className="text-text-secondary">
              A learning platform with image feedback, group chat, and
              note-taking for streamlined learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
