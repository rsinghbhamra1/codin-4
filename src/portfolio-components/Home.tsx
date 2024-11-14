import React from "react";
import { Text, Label, Img } from "../components/index";

const Home: React.FC = () => {
  // Basic information
  const basicInfo = {
    name: "Rupinderjit Bhamra",
    bio: "A dedicated web development student passionate about full-stack development.",
    profileImage: "/profile.png",
    college: "Red River College",
  };

  // Skills section
  const skills = {
    description: "Proficient in modern web development technologies.",
    languagesFrameworks: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "PHP",
      "Ruby",
      "Python",
    ],
    tools: ["Git", "Docker", "Visual Studio Code", "Jest"],
  };

  // Developer setup
  const developerSetup = {
    vscodeSetup: "Extensions: ESLint, Prettier, Live Server.",
    terminalSetup: "Bash with custom aliases and prompts.",
    preferredFont: "Open Sans",
  };

  return (
    <div>
      {/* Basic Information Section */}
      <section id="basicInfo" className="mb-12 h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          {/* Name and Bio */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold">{basicInfo.name}</h1>
            <h2 className="text-2xl font-semibold mt-2">{basicInfo.college}</h2>
            <p className="mt-4 text-lg">
              <Text text={basicInfo.bio} textColor="#ffffff" />
            </p>
          </div>
          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-[450px] overflow-hidden rounded-full">
              <Img
                src={basicInfo.profileImage}
                altText="Profile"
                borderRadius="50%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mb-12 h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <p className="text-lg mb-4">
          <Text text={skills.description} textColor="#ffffff" />
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label labelText="Languages/Frameworks:" textColor="#ffffff" />
            <ul className="list-disc list-inside">
              {skills.languagesFrameworks.map((lang, index) => (
                <li key={index}>
                  <Text text={lang} textColor="#ffffff" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label labelText="Tools:" textColor="#ffffff" />
            <ul className="list-disc list-inside">
              {skills.tools.map((tool, index) => (
                <li key={index}>
                  <Text text={tool} textColor="#ffffff" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Developer Setup Section */}
      <section
        id="developerSetup"
        className="h-screen flex flex-col justify-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Developer Setup</h2>
        <div className="space-y-4">
          {/* VSCode Setup */}
          <div>
            <h3 className="text-2xl font-semibold">VSCode Setup</h3>
            <p className="mt-2">
              <Text text={developerSetup.vscodeSetup} textColor="#ffffff" />
            </p>
          </div>
          {/* Terminal Setup */}
          <div>
            <h3 className="text-2xl font-semibold">Terminal Setup</h3>
            <p className="mt-2">
              <Text text={developerSetup.terminalSetup} textColor="#ffffff" />
            </p>
          </div>
          {/* Preferred Editor Font */}
          <div>
            <h3 className="text-2xl font-semibold">Preferred Editor Font</h3>
            <p className="mt-2">
              <Text text={developerSetup.preferredFont} textColor="#ffffff" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
