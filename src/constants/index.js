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
    blog,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    grocery,
    meta,
    starbucks,
    tesla,
    shopify,
    blockchain,
    jobit,
    tripguide,
    threejs,
    shirt,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI-UX Designer",
      icon: creator,
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
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "node.js",
      icon: nodejs,
    },
    {
      name: "blockchain",
      icon: blockchain,
    },
    
  ];
  //delete this also
  const experiences = [
  
      
  ];
  //i have to delete this testi....
  
  const testimonials = [
   
  ];
  //and write my own projectc rather than this
  const projects = [
    {
      name: "3D T-Shirt Designing",
      description:
        "I developed a 3D T-shirt designing app using React and Three.js, enabling users to customize colors, upload images, and generate logos through an integrated AI image generator for a seamless online experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
     
    },
    {
      name: "Code Blogging website ",
      description:
        "I developed a code blogging website where developers can share tutorials, snippets, and technical articles. The platform supports syntax highlighting, user interaction through comments, and provides a space for coders to engage in knowledge sharing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog ,
     
    },
    {
      name: "Grocery4U ",
      description:
        "I developed the GROCERY4U app using Kotlin, offering users a seamless grocery shopping experience with easy navigation, and a user-friendly interface. The app streamlines grocery management with secure and efficient features.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "User-Interface",
          color: "green-text-gradient",
        },
      ],
      image: grocery ,
     
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };