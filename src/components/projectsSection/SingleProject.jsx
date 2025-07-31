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
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-700 relative group shadow-2xl hover:shadow-cyan/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-orange/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
        <img 
          src={image} 
          alt="website image" 
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500" 
        />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/50 rounded-xl transition-all duration-500"></div>
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

