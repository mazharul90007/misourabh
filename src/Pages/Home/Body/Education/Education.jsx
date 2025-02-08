import { FaAward, FaGraduationCap, FaUniversity } from "react-icons/fa";
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

const certificationData = [
  {
    id: 1,
    courseName: 'Complete Web Development Course',
    institution: 'Programming Hero',
    period: 'June 2024 to January 2025',
    address:'Online',
    icon: <FaAward />
  },
  {
    id: 2,
    courseName: 'Professional Web Design',
    institution: 'BASIS SEIP ',
    period: '9th April 2023 to 25th June 2023',
    address:'Karwan Bazar, Dhaka, Bangladesh',
    icon: <FaAward />
  },
  {
    id: 3,
    courseName: 'Professional Web Design and Development ',
    institution: 'UY LAB ',
    period: '30th January 2023 to 24th July 2023',
    address:'Wireless Gate Rd, Mohakhali, Dhaka, Bangladesh',
    icon: <FaAward />
  },
  {
    id: 4,
    courseName: 'Professional English Communication Skills Certification',
    institution: 'Workplace Skills Development Academy New Zealand (WSDA)',
    period: '18th June 2023',
    address:'BITM',
    icon: <FaAward />
  },
]

const Education = () => {
  return (
    <div className="bg-secondary py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0" id="education">

      {/* Education */}
      <div className="md:col-span-1">
        <div className="px-4 md:pl-8">
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

      {/* Certification */}
      <div className="md:col-span-1 md:border-l">
        <div className="text-2xl font-robotoSlab mb-5 font-semibold border-b-2 pb-3 ml-5">
          <span className="text-primary">C</span>ourses & <span className="text-primary">C</span>ertifications
        </div>
        <div>
          <VerticalTimeline lineColor="#F6A98F" layout="1-column-left" animate>
            {certificationData.map((certificate) => (
              <VerticalTimelineElement
                key={certificate.id}
                className="vertical-timeline-element--education"
                contentStyle={{ textAlign: "left" }}
                contentArrowStyle={{ borderRight: '7px solid  white' }} // Hides the arrow
                iconStyle={{ background: "#F6A98F", color: "#fff" }}
                icon={certificate.icon}
                position="right" // Aligns all items on the right side
              >
                <h2 className="text-xl text-gray-500 font-semibold">
                  {certificate.courseName}
                </h2>
                <div className="space-y-1">
                  <p className="text-gray-400">
                    <span className="text-gray-500 font-semibold">
                      Institution:
                    </span>{" "}
                    {certificate.institution}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500 font-semibold">Duration:</span>{" "}
                    {certificate?.period}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500 font-semibold">Address:</span>{" "}
                    {certificate.address}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
