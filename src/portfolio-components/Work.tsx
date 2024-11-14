import React from "react";
import { Button, Card, Img, Label, Text } from "../components/index";

const Work: React.FC = () => {
  const projects = [
    {
      title: "React Portfolio",
      description: "Portfolio made using React.",
      image: "/portfolio-business.png",
      link: "https://github.com/rsinghbhamra1/codin-4",
      techList: ["React", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "EvoVault",
      description: "Front-end Website made using HTML, CSS and Javascript.",
      image: "/portfolio2-business.png",
      link: "https://evo-vault.vercel.app/",
      techList: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <section className="pt-16 mb-12">
      <h2 className="text-3xl font-semibold mb-6">Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            cardTitle={project.title}
            cardContent={project.description}
            backgroundColor="#1f2937"
            textColor="#ffffff"
          >
            <div className="mb-4 w-[500px]">
              <Img
                src={project.image}
                altText={project.title}
                borderRadius="8px"
              />
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button
                buttonText="View Project"
                backgroundColor="#3b82f6"
                textColor="#ffffff"
              />
            </a>
            <div className="mt-4">
              <Label labelText="Technologies Used:" textColor="#ffffff" />
              <ul className="list-disc list-inside">
                {project.techList.map((tech, idx) => (
                  <li key={idx}>
                    <Text text={tech} textColor="#ffffff" />
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Work;
