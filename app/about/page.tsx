import Image from "next/image";
import profile from "../../public/images/profile-picture.png";
import Card from "@/components/card";
import H1 from "@/components/h1";

export const metadata = {
  title: "About",
};
interface WorkExperience {
  company: string;
  position: string;
  years: string;
  descriptions: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "Slash Digital",
    position: "Full-Stack Developer",
    years: "Aug 2022 - Dec 2023",
    descriptions: [
      "Collaborated with a cross-functional team in the development of a robust community app using React Native, TypeScript, Redux, GraphQL, Jest.",
      "Develop web front-end for tax companies by using Vue.js.",
      "Tested and debugged code for complete and robust software.",
      "Conducted code reviews to ensure adherence to coding standards and best practices.",
    ],
  },
  {
    company: "Zenius",
    position: "Software Engineer",
    years: "Apr 2022 - July 2022",
    descriptions: [
      "Collaborated with cross-functional teams to enhance functionality and improve user experience.",
      "Developed and maintained software applications using React with TypeScript.",
    ],
  },
  {
    company: "Taksu Teknologi",
    position: "Front-End Developer",
    years: "Jun 2018 - Apr 2022",
    descriptions: [
      "Worked on site in Bali and customer base in Singapore.",
      "Build and develop e-commerce web and mobile apps by using Laravel, React, React Native.",
      "Performed maintenance and debugging for several high-traffic web applications.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="flex">
        <Image
          src={profile}
          alt="Hendra"
          className="w-24 h-24 rounded-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
          quality={50}
          placeholder="blur"
        />
        <div className="ml-5">
          <h1 className="text-3xl">Putu Hendra Eka Parman</h1>
          <h3 className="text-base">
            Proficient in full-stack development and well-versed in a variety of
            programming languages, frameworks, and technologies.
          </h3>
        </div>
      </div>

      <div className="mt-8">
        <H1>Work Experience</H1>
        {workExperiences.map((work, index) => (
          <WorkCard
            key={index}
            company={work.company}
            position={work.position}
            years={work.years}
            descriptions={work.descriptions}
          />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ company, position, years, descriptions }: WorkExperience) {
  return (
    <Card className="h-full mb-5">
      <H1>
        {position} ~ {company}
      </H1>
      <p>{years}</p>
      <ul className="list-disc ml-4">
        {descriptions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
