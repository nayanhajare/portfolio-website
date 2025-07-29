import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I am Nayan Hajare, a passionate and detail-oriented Full Stack Web
        Developer. I specialize in building responsive, dynamic web applications
        using modern technologies like React, Node.js, MongoDB, and Firebase.
        With hands-on experience working on real-world projects such as a Loan
        Application System, a Collaborative Workspace Platform, and an
        Investment Portfolio Tracker, I love turning complex problems into
        simple, user-friendly solutions. My goal is always to create meaningful
        digital experiences that are both functional and visually engaging.
        Whether it is front-end design or back-end architecture, I enjoy working
        across the stack to deliver polished, scalable applications.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
