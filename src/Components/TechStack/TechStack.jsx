import React from "react";

const TechStack = () => {
  const skills = [
    "Next.js",
    "TypeScript",
    "Javascript",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Firebase",
    "React.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <div className="mt-10">
      <h1 className="text-xl font-medium mb-2">Tech Stack</h1>
      <div>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((s) => (
            <li className="text-text-reverse bg-bg-surface text-sm px-1.5 py-1 rounded-md whitespace-nowrap">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
