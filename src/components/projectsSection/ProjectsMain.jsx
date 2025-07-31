import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Loan Application System",
    year: "Jul2025",
    align: "right",
    image: "/images/Loan_app.jpeg",
    githubLink: "https://github.com/nayanhajare/Loan-App-frontend",
    deployedLink: "https://loan-app-frontend-eight.vercel.app",
  },
  {
    name: "TeamSpace – Collaboration Tool",
    year: "Jun2025",
    align: "left",
    image: "/images/TeamSpace.jpeg",
    githubLink: "https://github.com/nayanhajare/TeamSpace-Frontend",
    deployedLink: "https://team-space-pi.vercel.app",
  },
  {
    name: "Investment Portfolio Tracker",
    year: "Feb2025",
    align: "right",
    image: "/images/Investment portfolio.jpeg",
    githubLink: "https://github.com/nayanhajare/Investment-Protfolio-Tracker",
    deployedLink: "https://nayan-investmentportfoliotracker.netlify.app/login.html",
  },
  // {
  //   name: "Portfolio Website",
  //   year: "Aug2025",
  //   align: "left",
  //   image: "/images/website-img-4.jpg",
  //   githubLink: "https://github.com/nayanhajare/portfolio-website",
  //   deployedLink: "https://nayanportfolio-xi.vercel.app",
  // },
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
        {projects.map((project, index) => (
          <motion.div
            key={project.githubLink}
            variants={fadeIn("top", 0.2 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <SingleProject
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
