import { Avatar, Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Section from "../section";
import Paragraph from "../text/paragraph";
import SkillTag from "../text/skillstag";

// Icons
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPowershell,
  SiReact,
  SiChakraui,
  SiTailwindcss,
  SiDocker,
  SiMysql,
  SiExpress,
  SiGitlab,
  SiGit,
  SiVite,
  SiTableau,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import FadeIn from "../transitions/scrollanimations";

const MySkills = [
  {
    group: "Programming Languages",
    tags: [
      {
        name: "Python",
        color: "blue",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        color: "green",
        icon: SiJavascript,
      },
      {
        name: "HTML",
        color: "orange",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        color: "blue",
        icon: SiCss3,
      },
    ],
  },
  {
    group: "DevOps",
    tags: [
      {
        name: "PowerShell",
        color: "blue",
        icon: SiPowershell,
      },
      {
        name: "Docker",
        color: "blue",
        icon: SiDocker,
      },
      {
        name: "Git",
        color: "red",
        icon: SiGit,
      },
      {
        name: "Gitlab",
        color: "orange",
        icon: SiGitlab,
      },
    ],
  },
  {
    group: "Development Frameworks",
    tags: [
      {
        name: "React",
        color: "blue",
        icon: SiReact,
      },
      {
        name: "Next.js",
        color: "gray",
        icon: TbBrandNextjs,
      },
      {
        name: "Chakra UI",
        color: "teal",
        icon: SiChakraui,
      },
      {
        name: "Tailwind CSS",
        color: "cyan",
        icon: SiTailwindcss,
      },
      {
        name: "ExpressJS",
        color: "black",
        icon: SiExpress,
      },
      {
        name: "Vite",
        color: "purple",
        icon: SiVite,
      },
    ],
  },
  {
    group: "Data Analytics",
    tags: [
      {
        name: "Tableau",
        color: "blue",
        icon: SiTableau,
      },
      {
        name: "MySQL",
        color: "cyan",
        icon: SiMysql,
      },
      {
        name: "Numpy",
        color: "green",
        icon: SiNumpy,
      },
      {
        name: "Pandas",
        color: "white",
        icon: SiPandas,
      },
    ],
  },
];

const About = () => {
    return (
        <Section top={"15rem"} id={"about"}>
            <Avatar
                mb={{ base: 5, md: 10 }}
                size="2xl"
                name="Donovan Koh"
                src="/images/avatar.jpg"
                css={{ transition: "all 0.1s ease-in-out" }}
                _hover={{ boxShadow: "md", transform: "translate(0, -3px)" }}
                id="about"
            />
            <FadeIn>
                <Heading
                as="h1"
                pb={3}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
                >
                A Little Bit About Myself 🙋‍♂️
                </Heading>

                <Paragraph py={4}>
                I am currently a year 2 student at <b>Singapore Polytechnic</b>{" "}
                pursing a Diploma in <u>AI and Analytics</u> 🤖!
                </Paragraph>
                <Paragraph py={4}>
                I'm an <i>organised, proactive, commited, hard-working</i> and{" "}
                <i>passionate</i> <u>problem solver</u> 👥.
                </Paragraph>
                <Paragraph py={4}>
                I'm also an <i>independent learner</i> who can adapt to changes
                quickly. I'm always looking for opportunities to learn, grow and
                upskill as a <u>AI developer and data analyst</u> 📊.
                </Paragraph>
                <Paragraph py={4}>
                I aspire to pursue a career as a <u>military C4 expert (C4X)</u> at the newly 
                established <u>Digital and Intelligence Service (DIS)</u> leveraging my
                knowledge in AI and Analytics to develop impactful products and 
                solutions for the public good and digital defence 📱 of Singapore. 
                I am also highly interested in applying for the <u>Digital Specialist (DigiSpec)</u> Work-Learn Scheme.
                </Paragraph>
            </FadeIn>
            <FadeIn>
                <Heading
                as="h1"
                pt={10}
                fontSize={{ base: "20px", sm: "25px", md: "30px" }}
                fontWeight={{ base: "bold", md: "extrabold" }}
                >
                My Skills 💡
                </Heading>
            </FadeIn>
            {MySkills.map((skill, index) => (
                <FadeIn key={index}>
                <Box>
                    <Heading as="h3" size="md" py={4}>
                    {skill.group}
                    </Heading>
                    {skill.tags.map((tag, index) => (
                    <SkillTag key={index} icon={tag.icon} color={tag.color}>
                        {tag.name}
                    </SkillTag>
                    ))}
                </Box>
                </FadeIn>
            ))}
        </Section>
    );
};

export default About;
