import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";


const SingleProject = ({ name, year, align, image, githubLink, deployedLink }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <div className={`flex gap-4 sm:justify-center ${
          align === "left" ? "md:justify-end" : "md:justify-start"
        }`}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            Live Demo <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};
SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  align: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
};

export default SingleProject;

