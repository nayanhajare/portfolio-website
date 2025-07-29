import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
  job: "Customer Service Executive",
  company: "IGT Solutions (Indigo Airlines Process)",
  date: "Feb 2024 - Dec 2024",
  responsibilities: [
    "Assisting customers with flight bookings, cancellations, and rescheduling.",
   
    "Working with CRM tools and adhering to SLA timelines.",
  ],
}

//   {
//     job: "Front-End Developer",
//     company: "Alex Apps",
//     date: "2022 - Present",
//     responsibilities: [
//       "Implementing reusable components.",
//       "Participating in large scale application.",
//       "Working on the performance of web applications.",
//       "Generating new ideas for better user experience.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Nucamp",
//     date: "2023 - Present",
//     responsibilities: [
//       "Explaining and facilitating web development concepts.",
//       "Help students with their assignments and grade them weekly.",
//       "Provide support for students through their learning journey.",
//     ],
//   },
//   {
//     job: "Course Instructor",
//     company: "Sprints",
//     date: "2024 - Present",
//     responsibilities: [
//       "Teaching JavaScript, React and TailwindCSS.",
//       "Participating in preparing course materials.",
//       "Helping students through their way in learning web development technologies.",
//     ],
//   },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
