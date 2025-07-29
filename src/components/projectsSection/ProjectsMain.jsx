import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Loan Application System",
    year: "Jul2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/nayanhajare/Loan-App-frontend",
  },
  {
    name: "TeamSpace – Collaboration Tool",
    year: "Jun2025",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/nayanhajare/TeamSpace-Frontend",
  },
  {
    name: "Investment Portfolio Tracker",
    year: "Feb2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/nayanhajare/Investment-Protfolio-Tracker",
  },
  {
    name: "Portfolio Website",
    year: "Aug2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/nayanhajare/portfolio-website",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project) => (
          <SingleProject
            key={project.link} // Use a unique value for key
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // Pass the required link prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
