import {
  atma,
  baja,
  brittos,
  cash_flow,
  cdc,
  chargeswap,
  climec,
  cluboard,
  comicify_ai,
  devfolio,
  ecell,
  fkdc,
  gdsc,
  genesis,
  greentrust,
  hinduja,
  huntly,
  hyundai,
  imperial,
  pba,
  placeicon,
  portfolio,
  publiclab,
  recruitment,
  srm,
  sytolab,
  toyota,
  zulip,
} from "../assets";

import {
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiArduino,
  SiAutodesk,
  SiBootstrap,
  SiChartdotjs,
  SiDjango,
  SiDotnet,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiGooglecloud,
  SiGooglemaps,
  SiIpfs,
  SiJavascript,
  SiJquery,
  SiMicrosoftexcel,
  SiMicrosoftoffice,
  SiMicrosoftpowerpoint,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPowerbi,
  SiPython,
  SiReact,
  SiReplit,
  SiRubyonrails,
  SiSolid,
  SiSolidity,
  SiTailwindcss,
  SiTwilio,
  SiWeb3Dotjs,
} from "react-icons/si";

import { FaHandshake, FaHardHat } from "react-icons/fa";

import { FaQuestion } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
import { IoIosNotificationsOutline, IoIosPeople } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";

import { DiCss3, DiMsqlServer } from "react-icons/di";

export const resumeLink = "/sri-resume.pdf";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction =
  "https://www.linkedin.com/in/sri-sudharsan-1a7994127/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Awards & Participation",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: srm,
    title: "SRM Institute of Science and Technology kattankulathur, Chennai",
    degree: "Bachelor of Technology",
    duration: "August 2020 - July 2024",
    content1: "Major: Automobile Engineering",
    content2: "CGPA: 8.2",
  },
  {
    id: "education-2",
    icon: pba,
    title:
      "12th - Sree Shankara Bala vidhyalaya golden jubilee school and junior college",
    degree: "",
    duration: "June 2017 - June 2019",
  },
  {
    id: "education-3",
    icon: brittos,
    title: "10th - St Brittos academy Velachery",
    degree: "",
    duration: "May 2014 - May 2017",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: fkdc,
    event: "FKDC-SEASON 6 (TEAM AUTOCREED RACING)",
    position: "Winner",
    content1: "Vehicle Dynamics Design Engineer",
    content2: "Corporate analysis",
    project:
      "https://drive.google.com/drive/folders/1mD5mh11zwF1hrBKlHr0iyZtlMqm58-vi",
  },
  {
    id: "a-2",
    icon: imperial,
    event: "FORMULA IMPERIAL- 2021 (TEAM 1.618)",
    position:
      "1st Place in B-Plan and Cost, 2nd place in Design and Innovation",
    content1: "Vehicle dynamics design engineer",
    content2: "",
    content3: "",
  },
  {
    id: "a-3",
    icon: baja,
    event: "E-BAJA (TEAM ELECRUISERS)",
    position: "Top 10 Overall",
    content1: "Vehicle dynamics design engineer",
  },
  {
    id: "a-4",
    icon: atma,
    event: "ATMA",
    position: "Top 20 Overall",
    content1:
      "Role of Tyres in Road safety organised by ATMA & ITTAC in collaboration with SRM IST",
    content2: "",
    content3: "",
  },
];

export const skills = [
  {
    title: "Tools and Skills",
    items: [
      {
        id: "pl-1",
        icon: SiMicrosoftexcel,
        name: "Excel",
      },
      {
        id: "pl-2",
        icon: SiMicrosoftoffice,
        name: "Microsoft Office",
      },
      {
        id: "pl-3",
        icon: SiMicrosoftpowerpoint,
        name: "PowerPoint",
      },
      {
        id: "pl-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "pl-5",
        icon: SiPowerbi,
        name: "PowerBI",
      },
      {
        id: "pl-6",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-7",
        icon: SiAutodesk,
        name: "Autodesk Inventor",
      },
      {
        id: "pl-8",
        icon: SiSolid,
        name: "SolidWorks",
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        id: "pl-1",
        icon: IoIosPeople,
        name: "Team Management",
      },
      {
        id: "pl-2",
        icon: IoAnalytics,
        name: "Strategic Analysis",
      },
      {
        id: "pl-3",
        icon: FaQuestion,
        name: "Critical Thinking",
      },
      {
        id: "pl-4",
        icon: FaHandshake,
        name: "Networking",
      },
      {
        id: "pl-5",
        icon: GiPublicSpeaker,
        name: "Public Speaking",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Hinduja Leyland Finance, Hosur",
    logo: hinduja,
    positions: [
      {
        title: "PMO Engineer",
        duration: "Feb 2025 - present",
        content: [
          {
            text: "Manage full project lifecycle for commercial engine manufacturing, ensuring on-time delivery and compliance with quality standards",
            link: "",
          },
          {
            text: "Coordinate with cross-functional teams to streamline workflows, reducing process bottlenecks by 10%",
            link: "",
          },
          {
            text: "Develop and monitor project schedules, budgets, and resource allocations",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Climec Labs, Chennai",
    logo: climec,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Mechanical Designer & Project Coordinator",
        duration: "Oct 2024 - Dec 2024",
        content: [
          {
            text: "Translated customer requirements into detailed design proposals using AutoCAD and SolidWorks, achieving a 95% approval rate",
            link: "",
          },
          {
            text: "Oversaw end-to-end manufacturing operations, optimizing supply chain logistics to reduce lead time by 12%",
            link: "",
          },
          {
            text: "Implemented quality control measures that reduced manufacturing defects by 8%",
            link: "",
          },
          {
            text: "Pitched and presented custom design solutions, expanding client base by 20%",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Sytolab, Bengaluru",
    logo: sytolab,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Mechanical Engineer",
        duration: "May 2024 - Sep 2024",
        content: [
          {
            text: "Created 2D and 3D models of Bio-Mechanical devices,ensuring that all designs meet industry standards and are optimized for both functionability and manufacturability",
            link: "",
          },
          {
            text: "Designed intricate machine parts are that with biological systems, such as prosthetics,medical implants,or lab equipment used for bio-reasearch",
            link: "",
          },
          {
            text: "Utilized advanced CAD software (SolidWorks,Autocad Inventor) to produce detail schematic and prototypes for bio-machine interfaces",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Toyota Kirloskar Motor, Bengaluru",
    logo: toyota,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Quality Check Intern",
        duration: "Mar 2024 - May 2024",
        content: [
          {
            text: "Assembled Cars like CMPV,Fortuner, Innova crysta.",
            link: "",
          },
          //
          {
            text: "Reduced the manpower as much as possible ways by not creating any MUDA and making it efﬁciently automated",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Hyundai Motors India Limited, Chennai",
    logo: hyundai,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Quality Check Intern",
        duration: "Jun 2023 - Jul 2023",
        content: [
          {
            text: "Month long internship where I assembled i10,i20,Aura and all new Verna",
            link: "",
          },
          {
            text: "Rendered the idea of shift of cars while Trolly change from one trim line to another line to reduce the time",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform",
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask",
      },
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS",
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol",
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js",
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat",
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS",
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino",
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol",
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server",
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio",
      },
    ],
  },
  {
    id: "project-5",
    title: "Non-Teaching Recruitment Portal, NITK",
    github: "",
    link: "http://recruitment.nitk.ac.in/",
    image: recruitment,
    content:
      "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    id: "project-6",
    title: "Career Development Centre, NITK Website",
    github: "",
    link: "http://cdc.nitk.ac.in/",
    image: cdc,
    content: "The official website of CDC, NITK with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-7",
    title: "Huntly",
    github: "",
    link: "https://devfolio.co/projects/huntly-b5a9",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework",
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter",
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit",
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API",
      },
    ],
  },
  {
    id: "project-8",
    title: "Cluboard",
    github: "https://github.com/mittal-parth/Cluboard",
    link: "",
    image: cluboard,
    content:
      "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js",
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Minimiser",
    github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
    link: "https://minimise-cash-flow.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: hyundai,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sri-sudharsan-1a7994127/",
  },

  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sudharsansri800@gmail.com",
  },

  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/_srisudharsan/",
  },
];

export const aboutMe = {
  name: "Sri Sudharsan",
  tagLine:
    "PMO Engineer @Hinduja Leyland Finance | Ex-MDDE @Sytolab | Ex-Intern @Hyundai | Ex-Intern @Toyota | SRM'24",
  intro:
    "A Costing and Design Engineer specializing in the integration of design innovation with cost management in product development. I assess project designs for feasibility, optimize material and manufacturing costs, and ensure that the final product meets both technical and budgetary requirements.",
};
