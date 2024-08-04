import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    linkdin,
    resume,
    figma,
    docker,
    certi,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    webfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "View Resume",
      icon: resume, 
      link: "https://drive.google.com/file/d/1XlWAkFp2lb-9zVn-Ckup16QZgW4DORDD/view?usp=drive_link"
    },
    {
      title: "View LinkedIn",
      icon: linkdin, 
      link: "https://www.linkedin.com/in/thejas-d-r-7388b3255/" 
    },
    { 
      title: "View GitHub",
      icon: github, 
      link: "https://github.com/thejas2324" 
    },
   
];

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    
    {
      title: "Fullstack development Intern",
      company_name: "Bloom IT Solutions, Bangalore",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2023 - January 2024",
      points: [
        "Collaborated remotely with a team of professionals to design, develop, and maintain user-friendly websites.Developed a strong understanding of HTML5,CSS3,JavaScript,Bootstrap and had the opportunity to apply  knowledge to real-world projects.",
        "Implemented a new design for the website homepage that increased user satisfaction by 20x.",
        "Honed Problem-solving,Time management,Creativity,Self-motivated,Organizational skills, which will undoubtedly benefit me in my future career as a front-end developer",
        "Developed a responsive landing page that resulted in a 25x increase in Website performance.",
      ],
    },
    
    {

      title: "Master of Computer Applications(MCA)",
      company_name: "East West College of Management, Bangalore",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2021 - December 2023",
      points: [
        "Academics at MCA EWCM Bangalore Acquired comprehensive knowledge of Advanced Web Programming.",
        "Successfully completed numerous projects,and web-based applications.",
        "Consistently received positive feedback for delivering high-quality work within strict deadlines Contributed to a dynamic learning environment by sharing knowledge and ideas with peers.",
       
      ],
    },
    {
      title: "BSc (Computer Science)",
      company_name: "JSS College of Arts, Commerce and Science, Mysore",
      icon: tesla,
      iconBg: "#383E56",
      date: "June 2017 - March 2021",
      points: [
        "Graduated with First Class in BSc, demonstrating a strong academic performance throughout the program.",
        "Gained practical experience in debugging and troubleshooting code issues.",
        "Prepared to tackle basic software development challenges and build innovative solutions that meet real-world needs.",
      ],
    },
    {
      title: "Certifications",
      company_name: "",
      icon: certi,
      iconBg: "#383E56",
      date: "",
      points: [
        "Full-stack web development Internship - Bloom IT Solutions.",
        "Full-stack web development - Udemy.",
        "MySql Tutorial - Great Learning.",
        "Data Structure - Great Learning.",
      ],
    },
   
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I got an opportunity to interact with Sameer Dixit on a few occasions and he has impressed me with his knowledge of front end technologies. He is an avid learner and keen applicator of his learnings to the projects he has worked on. I highly recommend him.",
    //   name: "Anil Kulkarni",
    //   designation: "Head Of Engineering",
    //   company: "Zoom",
    //   image: "https://www.linkedin.com/in/ankit5999/overlay/photo/",
    // },
    // {
    //   testimonial:
    //     "Great person, enthusiast to lean new things. I will recommend Sammer as a great tech guy interested in development.",
    //   name: "Ankit Kumar",
    //   designation: "Team lead",
    //   company: "Solitera Limited",
    //   image: "https://www.linkedin.com/in/ankit5999/overlay/photo/",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "RBDGTC Hostel",
      description:
        "This PHP Laravel Framework-based application serves as a comprehensive platform providing extensive information about RBDGTC hostel, catering to the needs of prospective students. Additionally, it streamlines the application process through an intuitive online system, allowing prospective students to conveniently apply for hostel accommodation, access relevant information, and navigate through various amenities and facilities offered by RBDGTC hostel.",
      tags: [
        {
          name: "PHP Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/thejas2324/RBDGTC-Hostel-Website",
    },
    {
      name: "Trip Or Travels",
      description:
        "The primary goal of this project is to develop a platform for travelers to discover and explore cities through curated tour packages. Our application aims to provide customers with a seamless browsing and booking experience for these thoughtfully crafted tour packages. Additionally, users can conveniently secure their travel arrangements, including integrated cab booking services, all from the comfort of their own homes. The platform also offers personalized recommendations based on user preferences and experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/thejas2324/tripandtravel",
    },
    {
      name: "Webfolio",
      description:
        "Developed a professional webfolio as a career project using Create Folio in React.js. Implemented responsive design principles and dynamic content rendering to showcase skills and projects effectively. Deployed the project on a Netlify server for seamless access and performance. Integrated a contact form with email notifications to facilitate direct communication with potential employers. Utilized modern design trends and best practices to ensure an engaging and user-friendly experience across all devices.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
      ],
      image: webfolio,
      source_code_link: "https://github.com/thejas2324/webfolio",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };