import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "../../../Shared/Title/Title";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Mathematics",
    institution: "Government Titumir College, Dhaka",
    year: "2020",
    address: "A.K. Khandakar Road, Mohakhali, Dhaka, Bangladesh",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Government Science College, Dhaka",
    year: "2012 - 2014",
    group: "Science",
    address: "34/B, West Farmgate - Tejturi Bazar Rd, Dhaka, Bangladesh",
    icon: <FaUniversity />,
  },
];

const Education = () => {
  return (
    <div className="bg-secondary py-4 md:py-8" id="education">
      <div className="px-4 md:px-8">
        <Title firstLetter={'E'} title={'ducation'}></Title>
      </div>
      <div>
        <VerticalTimeline lineColor="#F6A98F" layout="1-column-left" animate>
          {educationData.map((edu) => (
            <VerticalTimelineElement
              key={edu.id}
              className="vertical-timeline-element--education"
              contentStyle={{ textAlign: "left" }}
              contentArrowStyle={{ borderRight: '7px solid  white' }} // Hides the arrow
              iconStyle={{ background: "#F6A98F", color: "#fff" }}
              icon={edu.icon}
              position="right" // Aligns all items on the right side
            >
              <h2 className="text-xl text-gray-500 font-semibold">
                {edu.degree}
              </h2>
              <div className="space-y-1">
                <p className="text-gray-400">
                  <span className="text-gray-500 font-semibold">
                    Institution:
                  </span>{" "}
                  {edu.institution}
                </p>
                <p className="text-gray-400">
                  <span className="text-gray-500 font-semibold">Year:</span>{" "}
                  {edu.year}
                </p>
                {edu.group && (
                  <p className="text-gray-400">
                    <span className="text-gray-500 font-semibold">Group:</span>{" "}
                    {edu.group}
                  </p>
                )}
                <p className="text-gray-400">
                  <span className="text-gray-500 font-semibold">Address:</span>{" "}
                  {edu.address}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
