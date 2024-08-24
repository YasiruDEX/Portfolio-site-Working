export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Pioneering Engineering Solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Adapting to Robotics and AI-Driven Automation Needs",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech arsenal",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by a Passion for Robotics & AI.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building LUNA vision navigation system",
    description: "Progressing with",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LUNA: Vision-based Automated Restaurant Robot",
    des: "Developed a Restaurant Robot using ROS and Kinect2, featuring a custom Kalman-based food stabilization tray for autonomous navigation and interaction in restaurant environments.",
    img: "/p1.svg", // original image
    iconLists: [
      "/ros.png",
      "/kinect.webp",
      "/kalman.png",
      "/ubuntu.png",
      "/solidworks.png",
    ],
    link: "/project/luna",
  },
  {
    id: 2,
    title: "TechBot: STM32/Vision-based Robot",
    des: "An innovative robot with a custom-designed 4-layer PCB, STM32F405VGT6 microcontroller, and Raspberry Pi for advanced machine vision and navigation tasks.",
    img: "/p2.svg", // original image
    iconLists: ["/stm32.svg", "/rapberrypi.svg", "/cubeide.png", "/pid.jpg"],
    link: "/project/techbot",
  },
  {
    id: 3,
    title: "Stable Diffusion Based Criminal Face Generation Platform",
    des: "AI-driven solution enhancing accuracy and efficiency in forensic facial synthesis, aiding law enforcement in suspect identification.",
    img: "/p3.svg", // original image
    iconLists: [
      "/pytorch.png",
      "/huggingface.svg",
      "/onnx.png",
      "/llm.jpg",
      "/diffusion.webp",
    ],
    link: "/project/criminal-face-generation",
  },
  {
    id: 4,
    title: "A Vision-Language Driven Navigation System with SLAM",
    des: "A SLAM-based navigation system utilizing vision-language inputs to guide a robot with natural language instructions and image feeds.",
    img: "/p4.svg", // original image
    iconLists: [
      "/ros.png",
      "/gazebo.png",
      "/huggingface.svg",
      "/nav2.png",
      "/mistral.png",
    ],
    link: "/project/vision-language-navigation",
  },
  {
    id: 5,
    title: "Ratatouille: A Fast Maze Traversing Micromouse",
    des: "Fast Maze-Traversing Micromouse navigating complex mazes autonomously using advanced sensors and algorithms.",
    img: "/p1.svg", // original image
    iconLists: [
      "/solidworks.png",
      "/altium.jpg",
      "/cubeide.png",
      "/gazebo.png",
      "/webots.png",
    ],
    link: "/project/ratatouille",
  },
  {
    id: 6,
    title: "Cosmo Robot",
    des: "An ATMEGA2560-based robot showcasing precise line following, wall avoidance, ramp navigation, mechanical arm interaction, and more.",
    img: "/p2.svg", // original image
    iconLists: [
      "/arduino.svg.png",
      "/mechanicalarm.png",
      "/pid.jpg",
      "/solidworks.png",
    ],
    link: "/project/cosmo-robot",
  },
];

export const testimonials = [
  {
    quote: "Stable Diffusion Based AI Criminal Face Generation Platform For Forensic Identification, out of 45 Projects.\nDeveloped an AI-driven solution using Stable Diffusion models to enhance forensic facial synthesis. This platform improves accuracy and efficiency in suspect identification by minimizing subjective interpretation and manual effort.",
    name: "Aurora 24",
    title: "1st Runner Up"
  },
  {
    quote: "Earendel Pro Track: IoT-based Automated Telescope Tracker mount\nCreated an IoT-based telescope mount for automated celestial tracking. The system enhances stargazing with real-time updates, user-friendly controls, and educational value, integrating various technologies for improved astronomical experiences.",
    name: "SLIOT Challenge 2023 - Open Category IOT Challenge",
    title: "Finalists"
  },
  {
    quote: "TechBot: STM32/Vision-based Robot, out of over 100 registrations.\nDeveloped an advanced robot featuring a custom 4-layer PCB with STM32F405VGT6 microcontroller and Raspberry Pi for machine vision. The robot demonstrates sophisticated navigation and vision capabilities.",
    name: "Sri Lanka Robotic Challenge 2024 - University Category",
    title: "Finalists"
  },
  {
    quote: "Stable Diffusion Based Criminal Face Generation Platform For Forensic Identification, out of 150 entries.\nAI-driven platform leveraging Stable Diffusion models for forensic facial synthesis, enhancing law enforcement capabilities in suspect identification and minimizing manual effort and interpretation.",
    name: "IEEE IES Generative AI International Hackathon",
    title: "Finalists"
  },
  {
    quote: "NeuralVoice - A Neural Interface Communication Device for Individuals with Paralysis\nEmpower paralyzed individuals with a device decoding neural impulses for communication. Utilizing EMG signals, ML models, LLM refinement, and TTS, it enhances social integration and mental well-being.",
    name: "Brainstorm 24",
    title: "SemiFinalists"
  },
  {
    quote: "FoodFocus: Smart Consumption Tracker\nTracks sugar, salt, and oil consumption, indicating daily limits. Using loadcells, ATmega, and sophisticated manipulation, it provides detailed reports and doubles as a clock with alarm features.",
    name: "EN1190 - Engineering Design Project",
    title: "Finalists"
  },
  {
    quote: "Analog Function Generator\nGenerates sinusoidal, triangular, sawtooth, and PWM signals up to 20kHz with variable parameters. Designed using analog components, it features versatile waveform options and easy signal output.",
    name: "EN2091: Laboratory Practice and Projects",
    title: "Finalists"
  },
  {
    quote: "IoT based Medicine Storage\nSmart Medibox designed to assist users in managing medication effectively. It integrates several features to ensure medication adherence and proper storage conditions.",
    name: "EN2853 Embedded Systems and Applications project",
    title: "Finalists"
  },
  {
    quote: "Home energy monitoring system integrated with home automation\nAn interface designed to integrate with existing domestic electrical systems in Sri Lanka. Capable of monitoring individual power usage of outlets and integrating them with home automation.",
    name: "IEEE Sri Lanka Challenge Sphere 2024 - Arduino Challenge",
    title: "First Place Champions"
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/arduino.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "NFT Artist",
    desc: "Created unique digital art pieces for Coullax (Pvt) Ltd, contributing to their NFT collection.",
    className: "md:col-span-2",
    thumbnail: "/nft.png", // Original image path
  },
  {
    id: 2,
    title: "3D Character/Animation Artist",
    desc: "Developed 3D characters and animations for VirtualPensor (Pvt) Ltd, enhancing visual storytelling.",
    className: "md:col-span-2",
    thumbnail: "/charactor.png", // Original image path
  },
  {
    id: 3,
    title: "Freelance Seller",
    desc: "Provided freelance 3D art services through Fiverr, delivering customized designs and animations.",
    className: "md:col-span-2",
    thumbnail: "/fiverr.png", // Original image path
  },
  {
    id: 4,
    title: "3D Printing Business Owner",
    desc: "Managed BroocFab, a 3D printing business, offering custom 3D printed products and services.",
    className: "md:col-span-2",
    thumbnail: "/broocfab.png", // Original image path
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
