/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuvaraj Geethavel",
  title: "Hi all, I'm Yuvi",
  subTitle: emoji(
    "A passionate Creative Web Developer 🌟  in crafting immersive experiences through Three.js, WebGL, Unity, and Unreal Engine. Proficient in building 3D pipelines and harnessing the power of JavaScript, React, Angular, and C# , AFrame, webassembly and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NJwh6st-b_0pjpxKXa8V0yTIZ7ytDRnr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do 🔧",
  subTitle: "🎨 Creative Developer Passionate About Visuals and Math-Infused Tech",
  skills: [
    emoji(
      "⚡ Craft immersive 3D games and simulations with cutting-edge technologies"
    ),
    emoji("⚡ Dive into the world of Computer Vision, leveraging mathematical principles for innovative projects"),
    emoji(
      "⚡ Seamlessly integrate visual elements and mathematical algorithms for dynamic user experiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "	fas fa-gamepad"
    },
    {
      skillName: "WASM",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Blender",
      fontAwesomeClassname:  "fas fa-palette"
    },
    {
      skillName: "After Effects",
      fontAwesomeClassname: "fab fa-adn"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT ROURKELA",
      logo: require("./assets/images/NIT_Rourkela_Colour_Logo.webp"),
      subHeader: "Integrated M.Sc in Life Science",
      desc: "Mentor, Cinematics Club",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "3D Pipeline",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Web Developer",
      company: "KIXR",
      companylogo: require("./assets/images/KIXR.png"),
      date: "Feb 2023 – Present",
      desc: "Worked on multiple projects ranging from various tracking AR projects to a shirt 3D configurator, a 2D drawing tool, and held the lead position on a huge scale real estate project.",
      descBullets: [        
        "My main R&D focuses: VSLAM + IMU integration for world tracking, and custom glTF mesh compression + KTX2 texture.",
        "Worked on diverse AR tracking projects, spanning from world to shoe tracking, utilizing a range of tools including both open-source and third-party plugins."
      ]
    },
    {
      role: "Game Developer",
      company: "Byjus",
      companylogo: require("./assets/images/Byjus.webp"),
      date: "Aug 2020 – Jan 2023",
      desc: "Joined newly formed Byju's R&D team, 3D educational games for grades 6 to 8. In 2 years hustle, streamlined Unity WebGL pipeline, releasing 15+ games on BYJU's US App.",
      descBullets: [
        "Developed specialized controllers, from scratch, like car, flight, parkour, and customised third-person mechanics",
        "Managed UI design ensuring cohesive experiences for kids and specific game needs as project scaled."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 
  "My Projects 🖥️"
  
  
  
  
  
  ,
  projects: [
    {
      image: require("./assets/images/Konig.webp"),
      projectName: "Konig Orange County",
      projectDesc: "As project lead, I've figured out the feasibility of rendering 4M triangles in web-based walkthroughs using Shapespark. I've automated the pipeline, minimizing developer intervention, solely relying on 3D artists for implementation  for future projects. And I'm in final stage of an independent of shapespark optimized pipeline for avatar integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uidev.kiksar.com/demo_3dBuilding/exterior_day/index.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Reeds.webp"),
      projectName: "Reeds Ring",
      projectDesc: "I have developed a high-quality, optimized WebGL diamond shader utilizing WebGi. Additionally, the Virtual Try-On feature was implemented using hand tracking through the MediaPipe model.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uidev.kiksar.com/RingVTO/index.html"
        }
      ]
    },
    {
      image: require("./assets/images/angular.webp"),
      projectName: "3D Configurator in Angular",
      projectDesc: "I have worked on developing an innovative Angular 3D Configuration Component project. It provides unmatched customization options, enabling users to effortlessly customize and edit textures, setting a new standard for design flexibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kixr3d.com/#/communityDesigns"
        }
      ]
    },
    {
      image: require("./assets/images/Freelancing.webp"),
      projectName: "Freelancing Project",
      projectDesc: "I collaborated with a team of friends to develop this game in Unity. My primary responsibilities included the bus controller, managing collisions, and integrating the connecting logic across all 27 levels. Unfortunately, I am unable to share the public link as the client has temporarily removed the game from the Play Store."
    },
    {
      image: require("./assets/images/Save the City.webp"),
      projectName: "Save the City",
      projectDesc: "This educational game, developed within the Byju's platform using Unity, tasks children with saving the city by closing a smoking air tunnel before its spread. Throughout the gameplay, players are prompted to answer questions, enhancing their learning experience. And pardon me for glitches in the built, I only had old built to showcase and this project is made for mobile devices",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://side-scroller.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/AXE.webp"),
      projectName: "AXE AR AD",
      projectDesc: "I successfully simulated the functionality of surface tracking using raycasting and gyroscope techniques in A-Frame, without relying on any third-party AR plugins. This project was completed within a one-week timeframe and this project is made for mobile devices. Furthermore, I possess expertise in integrating image and location-based AR tracking. I have also worked with platforms such as 8th Wall and Blippar.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uidev.kiksar.com/axe-portal/index.html"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses 📚"),

  achievementsCards: [
    {
      title: "Computer Vision nanodegree in Udacity",
      subtitle: "Learned various types of filters, CNN architectures, and the basics of pose estimation. Completed training and testing algorithms for face landmark points.",
      image: require("./assets/images/Computer Vision.webp"),
      imageAlt: "Google Code-In Logo",
    },
    {
      title: "Threejs Journey by Bruno Simon",
      subtitle: "I've gained proficiency in Three.js through a beginner-friendly course, covering WebGL basics and advanced techniques like particle rendering and physics integration. Now equipped with extensive expertise, I've handled complex 3D coding projects independently.",
      image: require("./assets/images/Bruno Simon.webp"),
      imageAlt: "Google Assistant Action Logo",
    },

    {
      title: "Unity Parkour Controller",
      subtitle: "I've learned advanced animation techniques like target matching for adaptable animations, and how to architect parkour actions in Unity using scriptable objects for data-driven flexibility",
      image: require("./assets/images/Parkour.webp"),
      imageAlt: "PWA Logo",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7077109905",
  email_address: "yuvarajvelraj@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
