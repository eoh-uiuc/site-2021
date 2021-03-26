const exhibitData = [
  {
    name: "Mechanical Science and Engineering",
    link: "/exhibits/mechanical-science-and-engineering",
    latitude: 40.111855,
    longitude: -88.226143,
    description:
      "The Department of Mechanical Science and Engineering offers top-ranked degree programs in engineering mechanics, mechanical engineering, and theoretical and applied mechanics. Our curricula offer students unparalleled strengths in key fundamental areas, such as fluid and solid mechanics, thermodynamics and heat transfer, dynamics and controls, biomechanical sciences, computational science, applied math, applied physics, and chemistry.",
    tags: [
      "Good for older students",
      "Mechanics",
      "Physics",
      "Construction",
      "Kid-Friendly",
      "Water",
      "Research",
      "Design Team",
      "Art and Design",
      "Robotics",
      "Electronics",
      "Sustainable",
    ],
    exhibits: [
      {
        name: "Off-Road Illini Baja SAE",
        rso: "Off-Road Illini",
        video: "https://youtu.be/GpkkhQ7DdPg",
        description:
          "In this video we talk about what goes into building a vehicle for the Baja SAE competition, and finish off by showing the car in action! Email the team lead Jack 0'Donnel, jack0@illinois.edu if you have any questions!",
        tags: [],
        links: [],
      },
      {
        name: "Tensegrity Table",
        rso: "",
        video: "https://youtu.be/N8EpTCult0w",
        description:
          "A 4ftx4ft wooden table supported entirely by steel wires, demonstrating the power of tension forces. Email the team lead Max Marsh, mmarsh31@illinois.edu if you have any questions!",
        tags: ["Mechanics", "Physics", "Construction"],
        links: [],
      },
      {
        name: "Bike Pump Powered Cannon",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/aqejUREHbe4",
        description:
          "A PVC tennis ball cannon that is powered by a bike pump. Pressure is pumped into the cannon to launch projectiles at wooden targets, which are placed at varying distances. Email the team lead Leotis Davenport, leotisd2@illinois.edu if you have any questions!",
        tags: ["Physics", "Kid-Friendly", "Mechanics"],
        links: [],
      },
      {
        name: "Levitating Water",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/ttc763AEZ-w",
        description:
          "The levitating water project demonstrates an optical illusion that utilizes the stroboscopic effect. LED strobe lights are positioned along a vertical stream of water and the frequency of the strobe lights are synced up with the frequency of the water droplets, which creates the illusion of floating water droplets when, in reality, the drops are falling naturally. Email the team lead Noboru Myers, noborum2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Water", "Physics"],
        links: [],
      },
      {
        name: "DIY Experiments with Magnets",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/ZTQT8GZ4tK4",
        description:
          "This exhibit demonstrates the power of magnets through DIY projects that can be done at home with household items. The three projects featured all showcase a different application of magnets found in everyday life. Email the team lead Avi Distler, avrammd2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Physics", "Mechanics"],
        links: [],
      },
      {
        name: "Standbeest",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/pAbJItHPxgw",
        description:
          "Based off of Theo Jansen's Strandbeest, this wooden creature contains three sets of legs designed to 'walk' along a path. Using metal components, wooden fiberboard, and 3D printed parts, watch the Strandbeest come to life! Email the team lead John Venetos, jkv2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Mechanics", "Good for older students"],
        links: [],
      },
      {
        name: "Demonstration of Ultrasonic Non-Destructive Evaluation",
        rso: "Wave Propagation and Metamaterials Laboratory",
        video: "https://youtu.be/YVikY8YDYvM",
        description:
          "Ultrasonic non-destructive evaluation is a technique used in industry to identify sub-surface cracks using ultrasonic waves. We will cover the basic properties of ultrasonic NDE and ask you to interpret a measurement that we do! Email the team lead Madison Yang, mcy2@illinois.edu if you have any questions!",
        tags: ["Research", "Good for older students", "Mechanics"],
        links: [],
      },
      {
        name: "Pi Tau Sigma Siege Weapons Design Team",
        rso: "Pi Tau Signa",
        video: "https://youtu.be/Xo2rrZtmeC0",
        description:
          "Our exhibit is a 3D model of a siege weapon we designed along with a presentation of our design and testing process. Email the team lead Sean Taylor, seanlt2@illinois.edu if you have any questions!",
        tags: ["Design Team", "Mechanics", "Art and Design"],
        links: [],
      },
      {
        name: "Pi Tau Sigma Design Team",
        rso: "Pi Tau Sigma",
        video: "https://youtu.be/twNmU3-_47w",
        description:
          "We built a cool Rube Goldberg type machine on a CAD software and ran animation. Email the team lead Siddharth Kandimalla, ssk5@illinois.edu ifyou have any questions!",
        tags: ["Design Team", "Robotics", "Kid-Friendly"],
        links: [],
      },
      {
        name: "Illini Formula Electric",
        rso: "",
        video: "https://youtu.be/j_DvptBpGFM",
        description:
          "We are Illini Formula Electric: a fully student-led organization on campus that designs, builds, and competes with an all-electric open-wheel style race car! Each year, we improve on our designs with knowledge learned in the classroom and within the organization and apply those improvements to our next iteration.",
        tags: ["Cars", "Sustainable", "Electronics"],
        links: [
          {
            name: "Website",
            address: "https://illiniformulaelectric.com/",
          },
        ],
      },
      {
        name: "The Rheology Zoo",
        rso: "",
        video: "https://youtu.be/PdmaOLZ9ddU",
        description:
          "The Rheology Zoo studies fluids, solids, and things-in-between. We challenge conventional notions of fluids and solids, and explain the four key phenomena of rheology which have a vast array of academic and industrial applications. Email the team lead Randy Ewoldt at samyas2@illinois.edu if you have any questions!",
        tags: ["Mechanics", "Good for older students", "Physics"],
        links: [],
      },
      {
        name: "FSAE Illini Motorsports",
        rso: "Illini Motorsports",
        video: "https://youtu.be/i7SsSGjevtk",
        description:
          "Join Illini Motorsports in celebrating their 40th season as the racing legacy of UIUC. Every year, we design, build, and compete a race car from scratch. Email Team Lead Salam Mulheim at smullhe2@illinois.edu for any questions.",
        tags: [],
        links: [
          {
            name: "Website",
            address: "http://motorsports.illinois.edu",
          },
        ],
      },
      {
        name: "ASME Special Projects - Music Box",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/iCc4k9ZQwRc",
        description:
          "'Hail to the Orange' with the large, crank-powered music box! Email Zachary Hernandez at zdh2@illinois.edu for any questions!",
        tags: [],
        links: [],
      },
      {
        name: "Hydraulic Arm",
        rso: "American Society of Mechanical Engineers",
        video: "https://youtu.be/POtdm2UV7oQ",
        description:
          "Syringe-Powered Hydraulic Gripping Arm. Email Griffin Sipes at gsipes2@illinois.edu for any further questions!",
        tags: [],
        links: [],
      },
      {
        name: "Eco Illini Supermileage",
        rso: "Eco Illini Supermileage",
        video: "https://youtu.be/xEqKvaVSWek",
        description:
          "Student-built prototype gas & electric vehicle that reach over 1100 MPG! Email Team Lead Stefan Kamzol at skamzol2@illnois.edu for any questions.",
        tags: [],
        links: [],
      },
    ],
  },
  {
    name: "Loomis Laboratory of Physics",
    link: "/exhibits/loomis-laboratory",
    latitude: 40.111026,
    longitude: -88.22344,
    description:
      "The Department of Physics at the University of Illinois at Urbana-Champaign is a world leader in theoretical and experimental physics research and education, with an illustrious history, a prestigious faculty, and outstanding students.",
    tags: ["Kid-Friendly", "Art and Design", "Physics"],
    exhibits: [
      {
        name: "The Rube Goldberg Society's 2020-2021 machine",
        rso: "The Rube Goldberg Society",
        video: "https://youtu.be/BUyzfYPNyS8",
        description:
          "This Exhibit is the Rube Goldberg Society's 2020-2021 Machine! This machine's goal is to wrap a Pringles can like a birthday/holiday present! Email the team lead Tierny Dufficy, ttd2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Art and Design", "Physics"],
        links: [],
      },
      {
        name: "Society of Physics Students",
        rso: "Society of Physics Students",
        video: "https://youtu.be/-s2XHRxrnUs",
        description:
          "Fun and interactive demos with various parts of physics, including electricity and magnetism, optics, nuclear physics, and more. Email Team Lead Nicholas Nusgart at nusgart3@illinois.edu for any questions.",
        tags: [],
        links: [],
      },
    ],
  },
  {
    name: "Transportation Building",
    link: "/exhibits/transportation-building",
    latitude: 40.111687,
    longitude: -88.225196,
    description:
      "ISE was created to lead an emerging discipline that unites business with systems engineering.",
    tags: [
      "Kid-Friendly",
      "Future-Oriented",
      "Art and Design",
      "Design Team",
      "Good for older students",
    ],
    exhibits: [
      {
        name: "Supply Chain Maze",
        rso: "Institute of Industrial and Systems Engineers",
        video: "https://youtu.be/xhHHZRT3Pao",
        description:
          "The Institute of Industrial and Systems Engineers (IISE) presents the Supply Chain Maze Challenge. This interactive activity focused on the ISE principles of efficiency and optimization. Email the team lead Brett Meyers, brettmm2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Future-Oriented"],
        links: [],
      },
      {
        name: "Egg Drop Challenge",
        rso: "Institute of Industrial and Systems Engineers",
        video: "https://youtu.be/-p9RT2xemGU",
        description:
          "The Institute of Industrial and Systems Engineers (IISE) is excited to present the Egg Drop Challenge. This interactive activity combines basic design principles with optimization of materials. Email the team lead Brett Meyers, brettmm2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Future-Oriented", "Physics"],
        links: [
          {
            name: "Handout",
            address:
              "https://drive.google.com/open?id=1lWBGEAszZ8NpnEsL731_kBI5XeoeS2lf",
          },
          {
            name: "More information",
            address:
              "https://sciencing.com/successful-drop-contraptions-science-project-8423692.html",
          },
        ],
      },
      {
        name: "Product Design Lab",
        rso: "ISE Product Design Lab",
        video: "https://youtu.be/FdBKtV6Airc",
        description:
          "The Product Design Laboratory is a lab within the Department of Industrial and Enterprise Systems Engineering (ISE) at the University of Illinois at Urbana-Champaign. Join us as we show building information modeling (Revit), product design (Fusion360), and 3D printing. Email Professor Molly Goldstein at mhg3@illinois.edu for any other questions!",
        tags: ["Art and Design", "Design Team", "Good for older students"],
        links: [],
      },
    ],
  },
  {
    name: "Everitt Laboratory",
    link: "/exhibits/everitt",
    latitude: 40.110911,
    longitude: -88.228249,
    description:
      "Bioengineering is the application of life science, physical science, mathematics and engineering principles to define and solve problems in biology, medicine, health care and other fields.",
    tags: [
      "Sustainable",
      "Research",
      "Environment",
      "Mechanics",
      "Programming",
      "Good for older students",
      "Molecular Scale",
      "Kid-Friendly",
      "Prosthetics",
      "Future-Oriented",
      "Health and Medicine",
      "DNA",
      "Electronics",
      "Biology",
      "Data Science",
      "Robotics",
      "Smart Technology",
      "Design Team",
    ],
    exhibits: [
      {
        name: "The Chroma Glove",
        rso: "",
        video: "https://youtu.be/zvrdDiyO4UI",
        description:
          "A new way to see: turning light waves into vibrations. Our glove provides tactile stimulation to differentiate between different RGB values to allow visually impaired people to “feel” color! Email the team lead Sanketh Bhaskar & Athenacia Papoutsis , sanketh2@illinois.edu if you have any questions!",
        tags: ["Prosthetics", "Future-Oriented", "Health and Medicine"],
        links: [],
      },
      {
        name: "Seeing CRISPR Clear",
        rso: "",
        video: "https://youtu.be/6paZWKY0pWs",
        description:
          "Our project “Seeing CRISPR Clear” consists of 2 parts: an interchangeable DNA base pair circuit model and an interactive app downloadable from the APP store, “Exploring CRISPR.” We want to share with others the impacts of CRISPR and explain the future potential of gene editing. Email the team lead Joy Chen and Mia Ko, joychen@illinois.edu if you have any questions!",
        tags: ["DNA", "Electronics", "Biology"],
        links: [
          {
            name: "Download the App",
            address: "http://tinyurl.com/EOHCRISPR",
          },
        ],
      },
      {
        name: "Metastabuddies",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/vlQb2ZeyO5o",
        description:
          "An education video explaining cancer cell metastasis. Follow along with our at-home activity to simulate this process firsthand. Email the team lead Amy Lee, alee241@illinois.edu if you have any questions!",
        tags: ["Health and Medicine", "Molecular Scale", "Kid-Friendly"],
        links: [
          {
            name: "Handout",
            address:
              "https://docs.google.com/document/d/1MG6LXBXfKY5JXBym8VoOauEe9KQCB5FUVhV3W3QJzWo/edit",
          },
        ],
      },
      {
        name: "Mission Chill: The Blanket That Cools",
        rso: "",
        video: "https://youtu.be/C_xShkjTuJM",
        description:
          "We created a temperature-dependent cooling blanket for patients suffering from heat-related illnesses, and have a tasty at-home activity to demonstrate thermodynamic concepts! Email the team lead Emily Murray & Iksha Handa, emurray5@illinois.edu if you have any questions!",
        tags: ["Health and Medicine", "Good for older students", "Electronics"],
        links: [
          {
            name: "Handout",
            address:
              "https://drive.google.com/file/d/1cBQ74eZ1vx8MYiuBf14Gq0vDmlyjit6W/view",
          },
        ],
      },
      {
        name: "Modeling XNAs",
        rso: "",
        video: "https://youtu.be/1HzlpTX5Reg",
        description:
          "Modeling futuristic nucleic acids through an interactive website! Watch to learn about XNAs and use our model! Email the team lead Peter Baffoe, pbaffoe2@illinois.edu if you have any questions!",
        tags: ["Future-Oriented", "DNA", "Programming"],
        links: [],
      },
      {
        name: "Building a Better Shoe",
        rso: "",
        video: "https://youtu.be/xukKZGwLm0o",
        description:
          "Plantar fasciitis effects over 33 million people in the United States. We set out to build a shoe that can combat plantar fasciitis. Email the team lead Fiona Tomlins & Edward Tomlins, fiona2@illinois.edu if you have any questions!",
        tags: ["Biology", "Health and Medicine", "Mechanics"],
        links: [],
      },
      {
        name: "Compost-A-Glove",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/gqTJZajq_2M",
        description:
          "We designed a biodegradable disposable glove for medical use, with the hope of reducing overall plastic waste and preserving the environment. Email the team lead Niharika Dangarwala, ndanga2@illinois.edu if you have any questions!",
        tags: ["Sustainable", "Research", "Environment"],
        links: [
          {
            name: "Presentation",
            address: "https://app.animaker.com/video/W8B5DOS0HLA9CMSO",
          },
        ],
      },
      {
        name: "Modeling Scoliosis",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/LcuQnKEgJmM",
        description:
          "Scoliosis is common across the country, but it can be hard to understand what it really means without seeing it for yourself! This project shows 3D comprehensive models of a spine with scoliosis and an unaffected spine to help viewers understand how scoliosis can affect physiology, as well as gain a better understanding of what scoliosis is. Email the team lead Donna Gieser & Antoni Okinczyc, dgieser2@illinois.edu if you have any questions!",
        tags: ["Biology", "Health and Medicine"],
        links: [],
      },
      {
        name: "Determining Emotions through a Photo",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/mtdnJXxm3Sg",
        description:
          "Emotional intelligence is *definitely* not a strong suit of machines. But using machine learning technique to build a emotion recognition model, our group developed an Android app that accurately detects the emotion displayed by the user in a photo. Email the team lead Shreya Basu, shreyab4@illinois.edu if you have any questions!",
        tags: ["Data Science", "Good for older students", "Biology"],
        links: [],
      },
      {
        name: "Cockroach Technokinesis",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/dRtrHOu_RH0",
        description:
          "We explore the applications of a brain-computer interface by pairing an EEG headset with a cyborg cockroach. Will we be able to control a cockroach using only our minds? Email the team lead Vincent Lam, vl8@illinois.edu if you have any questions!",
        tags: ["Robotics", "Biology", "Electronics"],
        links: [
          {
            name: "Cockroach Backpack",
            address: "https://backyardbrains.com/products/roboroachBackpack",
          },
          {
            name: "More Information",
            address: "https://www.nature.com/articles/nrn2478",
          },
          {
            name: "More Information",
            address: "https://www.nature.com/articles/nrn2478",
          },
          {
            name: "Gumpy",
            address: "http://www.gumpy.org/",
          },
        ],
      },
      {
        name: "Covid Remote Health Monitoring",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/Bc9ZJto_xkA",
        description:
          "COVID-19 has caused a surge over the past year to invest in remote, contactless health monitoring from temperatures to respiratory rate. Check out our exhibit where we showcase new developments in remote health monitoring. Email the team lead Anthony Nepomuceno, anepom3@illinois.edu if you have any questions!",
        tags: ["Health and Medicine", "Smart Technology", "Design Team"],
        links: [
          {
            name: "Website",
            address: "https://healthmirroruiuc.wixsite.com/home",
          },
        ],
      },
      {
        name: "Virtually Controlled Soft-Robotics Hand",
        rso: "",
        video: "https://youtu.be/0zow2_HSDS8",
        description:
          "Utilizing computer vision to control a pneumatically controlled soft-robotic hand in Champaign, IL. Email the team lead Amy Lee, alee241@illinois.edu if you have any questions! Email the team lead Nathan Chung, nychung2@illinois.edu if you have any questions!",
        tags: ["Robotics", "Programming", "Health and Medicine"],
        links: [
          {
            name: "Website",
            address: "https://nychung2.github.io/eoh21/",
          },
        ],
      },
      {
        name: "SootheStone",
        rso: "",
        video: "https://youtu.be/RsyJtLyxCb0",
        description:
          "The SootheStone is wearable technology that seeks to mitigate anxiety-related harm—monitoring heart rate and cortisol levels to provide real-time feedback to the wearer, and the option of three avenues of alternative stimulation: sight, touch, and smell. Email the team lead Isabella Lebovic at lebovic2@illinois.edu ifyou have any questions.",
        tags: [
          "Health and Medicine",
          "Smart Technology",
          "Good for older students",
        ],
        links: [],
      },
      {
        name: "Biomimicry: Robotic Hand",
        rso: "Biomedical Engineering Society",
        video: "https://youtu.be/b_7UhUizvbU",
        description:
          "This exhibit models an affordable prosthetic robotic hand that mimics human motion. This hand demonstrates how engineers can be inspired by human anatomy and inspire future generations of engineers with a similar project for kids at home. Email Victoria Kindratenko & Kaitlin O'Reilley at kndrtnk@illinois.edu if you have any questions.",
        tags: ["Prosthetics", "Robotics", "Kid-Friendly"],
        links: [
          {
            name: "CAD Files",
            address:
              "https://grabcad.com/library/uiuc-eoh-biomimetic-robotic-hand-1",
          },
          {
            name: "Biomimicry Code",
            address:
              "https://drive.google.com/open?id=1-KSqQxhncdcDaEKtMSSb5iKQn4ez-ea3",
          },
        ],
      },
      {
        name: "Shazam: The E-Nose",
        rso: "",
        video: "https://youtu.be/i_Ap3mktiWE",
        description:
          "Come learn about your olfactory senses and the applications of a digital nose! (Transcript Available). Email Ayusha Acharya at ayushaa2@illinois.edu for any further questions.",
        tags: [],
        links: [],
      },
    ],
  },
  {
    name: "Newmark Civil Engineering Laboratory",
    link: "/exhibits/civil-engineering-laboratory",
    latitude: 40.114021,
    longitude: -88.226546,
    description:
      "The Department of Civil and Environmental Engineering (CEE) at the University of Illinois Urbana-Champaign enjoys an outstanding reputation for excellence in undergraduate and graduate education, and for research that improves the quality of life in our nation and around the world.",
    tags: [
      "Water",
      "Environment",
      "Weather",
      "Boats",
      "Construction",
      "Mechanics",
      "Kid-Friendly",
      "Physics",
      "Research",
      "Kid-Friendly",
      "Trains",
      "Electronics",
      "Health and Medicine",
    ],
    exhibits: [
      {
        name: "Chicago Underground",
        rso: "",
        video: "https://youtu.be/xuOEzj-AedA",
        description:
          "Physical model of the Tunnel and Reservoir Plan, TARP, aka “Deep Tunnel” in Chicago, and how it works to protect and improve area waterways and reduce flooding throughout the metropolitan area. Email the team lead Amy Lee, alee241@illinois.edu if you have any questions! Email the team lead Yifan He, yifanhe1@illinois.edu if you have any questions!",
        tags: ["Water", "Environment", "Weather"],
        links: [
          {
            name: "More Information",
            address:
              "https://www.arcgis.com/apps/Cascade/index.html?appid=f3804b77acfb42a0941f8bbaf0f93066",
          },
        ],
      },
      {
        name: "Conrete Canoe",
        rso: "UIUC Concrete Canoe",
        video: "https://youtu.be/aygeeq4LNTc",
        description:
          "We are the Concrete Canoe team and each year we design, build and RACE a canoe made of CONCRETE.  Watch our video to learn more about how we do the impossible and make concrete that floats! Email the team lead Ana Okinczyc, anako2@illinois.edu if you have any questions!",
        tags: ["Boats", "Water", "Construction"],
        links: [],
      },
      {
        name: "DIY Fluid Mechanics - 101",
        rso: "",
        video: "https://youtu.be/I94-7hQTgGM",
        description:
          "The exhibit presents two simple and fascinating concepts of fluid mechanics through easy demonstrations. These demonstrations can later be performed at home as well, hence the name DIY Fluid Mechanics. Email the team lead Vindhyawasini Prasad, vindhya2@illinois.edu if you have any questions!",
        tags: ["Mechanics", "Kid-Friendly", " Water"],
        links: [],
      },
      {
        name: "The Amazing Race: Ducks & Dye",
        rso: "",
        video: "https://youtu.be/i7wwXSodocE",
        description:
          "Experience how objects move in rivers! In this exhibit we will show a duck race and a dye release on Boneyard Creek that let us understand how rivers move. Email the team lead Christian Munoz, camunoz4@illinois.edu if you have any questions!",
        tags: ["Water", " Kid-Friendly", "Environment"],
        links: [],
      },
      {
        name: "3, 2, 1 Lift-Off! DIY Hydraulic Pressurized Rocket",
        rso: "Hydrosystem Laboratory",
        video: "https://youtu.be/OIqfi0hzRfk",
        description:
          "Let's learn about Rocket Science! Email the team lead Dongchen Wang, dwang53@illinois.edu if you have any questions!",
        tags: ["Water", "Kid-Friendly", "Physics"],
        links: [],
      },
      {
        name: "ASCE: Beginner Lessons in Civil Engineering!",
        rso: "American Society of Civil Engineers",
        video: "https://youtu.be/yU3Gbdgvvig",
        description:
          "Come visit our virtual booth for intro lessons on some of our most popular civil engineering studies, including structural engineering, geotechnical engineering, and construction management! Email the team lead Rober Wiggins at rjw5@illinois.edu if you have any questions.",
        tags: ["Kid-Friendly", "Physics", "Construction"],
        links: [
          {
            name: "Brindge Construction Game",
            address: "https://www.crazygames.com/game/construct-a-bridge",
          },
          {
            name: "Stop Disasters Game",
            address: "https://www.stopdisastersgame.org/stop_disasters/",
          },
          {
            name: "More information",
            address: "https://energy.concord.org/energy3d/",
          },
        ],
      },
      {
        name: "Life of Asphalt",
        rso: "Illinois Center for Transportation",
        video: "https://youtu.be/2M_8wK9psSA",
        description:
          "Making an asphalt concrete road starts by following a challenging cooking recipe: it requires looking into the future and powerful equipment. The Illinois Center for Transportation takes us on a ride through the life of a road paved with asphalt, from the design methods to its recycling stage. Email Team Lead Javier Garcia Mainieri at jjg5@illinois.edu if you have any questions.",
        tags: ["Research", "Kid-Friendly", "Sustainable"],
        links: [],
      },
      {
        name: "Railroad Block Signal Display",
        rso: "American Railway Engineering and Maintenance-Of-Way Association",
        video: "https://youtu.be/edgr5z2S3UI",
        description:
          "The presentation demonstrates a railroad block signal system and explains its operation. The electrical design matches that of the first fail-safe designs. Email Geordie Roscoe at groscoe2@illinois.edu for any questions!",
        tags: ["Trains", "Electronics"],
        links: [
          {
            name: "Website",
            address: "https://publish.illinois.edu/aremachapter/",
          },
        ],
      },
      {
        name: "Effectiveness of masks in limiting droplet spread from coughing",
        rso: "",
        video: "https://youtu.be/PW2ArwPKpJ0",
        description:
          "How do masks help restrict the spread of virus? There are so many varieties of masks available, which one is well suited for your needs? Email Pallav Ranjan at pallavr2@illinois.edu for any further questions.",
        tags: ["Health and Medicine", "Physics", " Environment"],
        links: [],
      },
    ],
  },
  {
    name: "Nuclear Engineering Laboratory",
    link: "/exhibits/nuclear-engineering-laboratory",
    latitude: 40.111239,
    longitude: -88.224408,
    description:
      "Nuclear, Plasma, and Radiological Engineering first was established as the Department of Nuclear Engineering in 1958 as an inter-disciplinary program and was granted departmental status in 1986. In 1999, the department's name was changed to Nuclear, Plasma and Radiological Engineering, reflecting the wide variety of courses available to students.",
    tags: ["Environment", "Sustainable", "Physics"],
    exhibits: [
      {
        name: "American Nuclear Society",
        rso: "Americann Nuclear Society",
        video: "https://youtu.be/t04-l41sT1k",
        description:
          "Interactive projects exploring everything nuclear! Email the team lead Dilan Kurukulasuriya, dilantk2@illinois.edu if you have any questions!",
        tags: ["Environment", "Sustainable", "Physics"],
        links: [],
      },
      {
        name: "Women in Nuclear",
        rso: "Women in Nuclear",
        video: "https://youtu.be/QvMSp6xiJ7w",
        description:
          "Learn about nuclear science with the UIUC Women in Nuclear chapter! We talk about radiation, nuclear power plants, and plasmas. Email Natalie Gaughan at ncg5@illinois.edu for any questions you may have!",
        tags: ["Kid-Friendly", "Molecular Scale", "Physics"],
        links: [
          {
            name: "Demo 1 Geiger Counter",
            address: "https://tinyurl.com/Demo1GeigerCounter",
          },
          {
            name: "Demo 2 Mouse Trap Reactor",
            address: "https://tinyurl.com/Demo2MousetrapReactor",
          },
          {
            name: "Demo 3 Plasma Ball",
            address: "https://tinyurl.com/Demo3PlasmaBall",
          },
        ],
      },
    ],
  },
  {
    name: "Engineering Hall",
    link: "/exhibits/engineering-hall",
    latitude: 40.110833,
    longitude: -88.226923,
    description:
      "Engineering Hall serves all disciplines within the UIUC College of Engineering and is well known for representing the school's colors with its orange bricks and blue roof.",
    tags: [
      "Chemistry",
      "Future-Oriented",
      "Water",
      "Sustainable",
      "Environment",
      "Robotics",
      "Smart Technology",
      "Programming",
      "Electronics",
      "Kid-Friendly",
      "Mechanics",
    ],
    exhibits: [
      {
        name: "Filtering Water with Reusable Materials",
        rso: "Engineers without borders",
        video: "https://youtu.be/x2S5d2IrDtQ",
        description:
          "Watch our water filtration demonstration and learn how to easily make your own DIY water filter at home! Email the team lead Taylor Shimkus, shimkus3@illinois.edu if you have any questions!",
        tags: ["Water", "Sustainable", "Environment"],
        links: [
          {
            name: "Handout",
            addres:
              "https://drive.google.com/open?id=1i27JGww6TBIY4j1mY2SxxroqwA6TGj8R",
          },
        ],
      },
      {
        name: "Sustainable Energy is The Future!",
        rso: "Alpha Omega Epsilon",
        video: "https://youtu.be/K2RaZOtKjZk",
        description:
          "Sustainable energy is one of the most important things we can focus on to create a longer-lasting future on this planet! Watch this video about our hydrogen fuel cell toy car to see a fun example of reliable energy. Email the team lead Sarah Jacob, sjacob46@illinois.edu if you have any questions!",
        tags: ["Sustainable", "Chemistry", "Future-Oriented"],
        links: [],
      },
      {
        name: "IUAV: Fun with Drones",
        rso: "Illini Unmanned Aerial Vehicles",
        video: "https://youtu.be/oV9UGiSNY9I",
        description:
          "Come learn about what Illini Unmanned Aerial Vehicles does and watch a drone in action! Email the team lead Siyan Shaikh, siyans2@illinois.edu if you have any questions!",
        tags: ["Robotics", "Smart Technology", "Programming"],
        links: [
          {
            name: "Website",
            address: "https://illiniuav.github.io/",
          },
        ],
      },
      {
        name: "Theta Drau",
        rso: "Theta Tau",
        video: "https://youtu.be/3MQe3tr9qaM",
        description:
          "A robot that uses stepper motors and a custom program to draw, write text, and create pictures on an Etch a Sketch. Email the team lead Josh Wrobel, jiw2@illinois.edu if you have any questions!",
        tags: ["Robotics", "Programming", "Electronics"],
        links: [
          {
            name: "Website",
            address: "https://www.kappathetatau.org",
          },
          {
            name: "Instagram",
            address: "https://www.instagram.com/kappathetatau/",
          },
        ],
      },
      {
        name: "Marshmallow Catapukt",
        rso: "Engineering Freshman Council",
        video: "https://youtu.be/SwdDF0LHDis",
        description:
          "Learn how to build a fun, simple marshmallow catapult with popsicle sticks and rubber bands! Email Saagar Kolachina at saagark2@illinois.edu for any questions you may have!",
        tags: ["Kid-Friendly", "Mechanics"],
        links: [],
      },
      {
        name: "Art with Processing!",
        rso: "Engineering Freshman Council",
        description:
          "The Engineering Freshman Council is presents “Learn to Make Computer-Generated Art!” tomorrow. It’s a fun, self-guided tour of a programming language called “Processing”, and no experience in coding is required!",
        tags: ["Kid-Friendly", "Programming"],
        links: [
          {
            name: "Website",
            address: "/exhibits/generative-art"
          }
        ],
      },
      {
        name: "The Sun",
        rso: "University of Illinois Astronomical Society",
        video: "https://youtu.be/os6DwwWIHNo",
        description:
          "Tour the Campus Observatory and learn about the Sun's lifecycle. Email Team Lead Raghava Ravi at raghava4@illinois.edu for any questions you may have!",
        tags: ["Environment", "Programming", "Sustainable"],
        links: [],
      },
      {
        name: "EIA Bridge Program",
        rso: "Engineers in Action Bridge Program",
        video: "https://youtu.be/_aDJMLKvVI0",
        description:
          "At EIA Bridge Program, we design and build bridges with rural communities worldwide to strive for a world with equal opportunity. The most physically challenging part of bridge construction is mixing concrete with just cement, sand, gravel, water, shovels, and buckets. In this exhibit, we’ll show you what material ratios make the strongest concrete, how to manually mix concrete as a team with limited resources, and how to stay safe throughout the process to give you a taste of what it’s like building bridges with us. Email Helen Sun at helens2@illinois.edu for any more questions you may have!",
        tags: [],
        links: [
          {
            name: "Website",
            address: "uiucbridges.wordpress.com",
          },
          {
            name: "Instagram",
            address: "www.instagram.com/uiucbridges/",
          },
          {
            name: "Crowdfunding Campaign",
            address:
              "https://engineersinaction.networkforgood.com/projects/117548-uiuc-eia-year-end-campaign-2020",
          },
        ],
      },
      {
        name: "Alma's talking dogs",
        rso: "",
        video: "https://youtu.be/xuzWcA3k8Ds",
        description:
          "Alma’s Talking Dogs is an organization that aims to bridge communication between dogs and humans through the power of STEM! Email Team Lead Lauren Gil at lgil2@illinois.edu for any querstions you may have!",
        tags: [],
        links: [],
      },
    ],
  },
  {
    name: "National Center for Supercomputing Applications",
    link: "/exhibits/ncsa",
    latitude: 40.1141028,
    longitude: -88.2251166,
    description:
      "In Spring 2019, construction began on a three-story addition to the south face of Talbot Laboratory. The expansion enhances the educational experience of NPRE students by giving them access to state-of-the-art laboratories for radiation measurements and nuclear materials.",
    tags: [
      "Research",
      "Smart Technology",
      "Good for older students",
      "Physics",
      "Programming",
      "Kid-Friendly",
      "Outer Space",
      "Water",
    ],
    exhibits: [
      {
        name: "NCSA: Can you Imagine? We Can",
        rso: "NCSA",
        video: "https://youtu.be/S8wbYP-LOTg",
        description:
          "Here at NCSA, we work with people worldwide to address problems that affect and impact our communities. For over 35 years, we’ve used cutting-edge technology and research to improve challenges that affect the way we live and what we know. From farming, GPS, and healthcare to how planets are formed, we work together to promote diversity and fairness to provide solutions that benefit science, society, and the future. Email the team lead Laura Herriott, herrio@illinois.edu if you have any questions!",
        tags: ["Research", "Smart Technology", "Good for older students"],
        links: [
          {
            name: "Website",
            address: "http://www.ncsa.illinois.edu/",
          },
          {
            name: "New Projects",
            address:
              "https://docs.google.com/presentation/d/e/2PACX-1vQo7bmQSlO_GSqDG_jPuxXSdZt4qXrd0bgTYXugwt5IwSHIxetY6Z1e8V5gAMtOVA/pub?start=false&loop=false&delayms=60000",
          },
          {
            name: "Domain and Expertise",
            address:
              "https://docs.google.com/presentation/d/e/2PACX-1vS7CfHPxh2XUY5AFRF5YmshVfr2tESYazuAY-D7eu9HJimwFRoKmUM1aqtetUaajQ/pub?start=false&loop=false&delayms=60000",
          },
        ],
      },
      {
        name:
          "NCSA – Center for Artificial Intelligence Innovation: Mentoring Tomorrow’s Leaders",
        rso: "NCSA",
        video: "https://youtu.be/JcZrO9CKZjQ",
        description:
          "We showcase innovative AI solutions that range from healthcare to advanced computing tools to study the Universe. Email the team leads Eliu Huerta & Vlad Kindratenko, gcolella@illinois.edu if you have any questions!",
        tags: ["Good for older students", "Research", "Physics"],
        links: [],
      },
      {
        name: "NCSA SPIN - Students Pushing INnovation Internship Program",
        rso: "NCSA",
        video: "https://youtu.be/sQRfBRhWhZ8",
        description:
          "The National Center for Supercomputing Applications (NCSA) has a rich history of nurturing innovative concepts, and some of the best ideas have come from highly motivated, creative undergraduates. NSCA's Students Pushing Innovation (SPIN) interns have the opportunity to participate in the Center’s interdisciplinary research efforts in many areas, including digital agriculture, bio and health sciences, earth and environment, astronomy, and many more. Email Olena Kindratenko at kindrat2@illinois.edu if you have any questions!",
        tags: ["Research", "Good for older students", "Programming"],
        links: [
          {
            name: "Website",
            address: "http://spin.ncsa.illinois.edu",
          },
        ],
      },
      {
        name: "NCSA Portfolio",
        rso: "NCSA",
        video: "https://youtu.be/qeRbsxJMOlw",
        description:
          "A selected portfolio of cutting-edge software and applications with rich visualization offered by the NCSA Software Directorate, ranging from data management, agriculture, natural hazards, community resilience, and social media data analytics. Email Chen Wang at cwang138@illinois.edu for any questions you may have!",
        tags: ["Programming", "Research", "Good for older students"],
        links: [
          {
            name: "InCore",
            address: "https://incore.ncsa.Illinois.edu",
          },
          {
            name: "Social Media Macroscope",
            address: "https://socialmediamacroscope.org",
          },
          {
            name: "Farmdoc",
            address: "https://farmdoc.illinois.edu",
          },
          {
            name: "Clowder Framework",
            address: "https://clowderframework.org",
          },
          {
            name: "ISDA",
            address: "http://ssa.ncsa.illinois.edu/isda/",
          },
        ],
      },
      {
        name: "Student Cluster Competition Team",
        rso: "NCSA",
        video: "https://youtu.be/oazOpIi6MLY",
        description:
          "The Student Cluster Competition (SCC) provides an immersive high performance computing experience to undergraduate and high school students, who design and build an HPC cluster, learn scientific applications, apply optimization techniques, and compete in a 48-hour competition to complete a set of benchmarks and real-world scientific workloads.  Come learn more about our team what we worked on for the competition this year! Email Jonathan Nativ at jnativ@illinois.edu for any questions.",
        tags: ["Kid-Friendly", "Research"],
        links: [],
      },
      {
        name: "NCSA 3D Scientific Visualizations Excerpts",
        rso: "NCSA",
        video: "https://youtu.be/-UbqXNobRK0",
        description:
          "NCSA will show a narrated sampler of 3D scientific visualizations developed for outreach, education and research. Samples will include selections narrated by celebrities and focus on science from astrophysics to atmospheric science. Email Olena Kindratenko at kindrat2@illinois.edu for any further questions.",
        tags: ["Outer Space", "Water", "Kid-Friendly"],
        links: [],
      },
      {
        name: "The New Frontiers Initiative at the University of Illinois",
        rso: "NCSA",
        video: "https://youtu.be/3qwCbFmN2xU",
        description:
          "The New Frontiers Initiative is an outgrowth of the Blue Waters project responding to the interests of National Geo-spatial Intelligence Agency or NGA to scale-up their computational efforts. In this video, we hear about the project, its early successes, opportunities for collaboration with government agencies, universities and industry and goals for future research at the U of I. Email William Kramer at wtkramer@illinois.edu for any questions you have!",
        tags: ["Future-Oriented", "Research", "Good for older students"],
        links: [],
      },
    ],
  },
  {
    name: "Materials Science and Engineering Building",
    link: "/exhibits/matse",
    latitude: 40.110923,
    longitude: -88.226111,
    description:
      "Materials engineering focuses on the synthesis of materials in useful quantities, and on the processing of component materials into engineering products.",
    tags: [
      "Electronics",
      "Kid-Friendly",
      "Chemistry",
      "Music",
      "Research",
      "Mechanics",
      "Trains",
      "Physics",
      "Future-Oriented",
      "Food",
    ],
    exhibits: [
      {
        name: "Penny Battery",
        rso: "",
        video: "https://youtu.be/vyPB44tVsqA",
        description:
          "Learn how to make your own battery out of household supplies. Understand why materials are important in designing the batteries of the future! Email the team lead Ian Flueck, iflueck2@illinois.edu if you have any questions!",
        tags: ["Electronics", "Kid-Friendly", "Chemistry"],
        links: [],
      },
      {
        name: "Fun with Bubbles",
        rso: "Material Advantage",
        video: "https://youtu.be/e-ZkfYuWDJ8",
        description:
          "Have you ever seen bubbles that 'float in the air' or do you want to hold bubbles in your hand? Watch this video and have fun with us! Email the team lead Xiangrui Deng, xd2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly"],
        links: [],
      },
      {
        name: "Musical Materials Science",
        rso: "Illinois Materials Research Science and Engineering Center",
        video: "https://youtu.be/qxg9eBK34Uw",
        description:
          "We created a music video that explains some of the science that researchers in our center work on. You'll also get a chance to meet some of the scientists who were being the creation of this music video. Email the team lead Pamela Pena Martin at pmartin9@illinois.edu if you have any further questions",
        tags: ["Kid-Friendly", "Music", "Research"],
        links: [],
      },
      {
        name: "Frozen gummy worms and Broken Ships",
        rso: "Material Advantage",
        video: "https://youtu.be/G2E_DDOD_gQ",
        description:
          "This exhibits demonstrates the change in mechanical properties that may occur to a material due to temperature changes. Email Doha Amer at damer@illinois.edu for any questions you may have!",
        tags: ["Mechanics"],
        links: [],
      },
      {
        name: "Maglev Mania",
        rso: "",
        video: "https://youtu.be/YNcgHY1-VsU",
        description:
          "Email Advay Sudarshan at advays2@illinois.edu if you have any questions!",
        tags: ["Trains", "Physics", "Future-Oriented"],
        links: [],
      },
      {
        name: "Properties of Candy",
        rso: "",
        video: "https://youtu.be/3kcA8_x7XI0",
        description:
          "This exhibit takes an edible twist on looking at the materials properties of glass by comparing it to that of Jolly Ranchers. By adding heat to the Jolly Ranchers and raising the temperature, we can look at the different traits of Jolly Ranchers with its increased ductility and altered properties. Email Robbie Nollett at nollett2@illinois.edu if you have any questions!",
        tags: ["Food", "Kid-Friendly"],
        links: [],
      },
    ],
  },
  {
    name: "Talbot Laboratory",
    link: "/exhibits/talbot",
    latitude: 40.111867,
    longitude: -88.228244,
    description:
      "Aerospace engineers design, analyze, model, simulate, and test aircraft, spacecraft, satellites, missiles, rockets, and the larger systems in which these vehicles operate.",
    tags: [
      "Kid-Friendly",
      "Outer Space",
      "Art and Design",
      "Weather",
      "Good for older students",
    ],
    exhibits: [
      {
        name: "Galaxy In A Bottle",
        rso: "Women In Aerospace",
        video: "https://youtu.be/k9M9fVxef9E",
        description:
          "Galaxy In A Bottle is a quick and fun activity that you can do with supplies from your own home! Women In Aerospace (WIA) will show you, step-by-step, how to create your very own Galaxy! Email the team lead Seetha Chalichama, schali4@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Outer Space", "Art and Design"],
        links: [],
      },
      {
        name: "Weather Balloon Launch",
        rso: "American Meteoroligical Society",
        video: "https://youtu.be/Jq4cJadanss",
        description:
          "In this exhibit, you will get to experience a weather balloon launch and learn about kind of data is collected. Email the team lead Rebekka Delaney, rebekka2@illinois.edu if you have any questions!",
        tags: ["Weather", "Kid-Friendly", "Good for older students"],
        links: [],
      },
      {
        name: "Lunar Exploration: Rovers",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=tYyqxlhpf8s",
        description:
          "How do scientists learn what life is like on other planets? How can we use rovers to help us understand the future of humans in space, and how do we get them there? Find out  more at our 'Lunar Exploration; Rovers' exhibit, featuring our very own bug-like rover buddy, MORRTE! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Orbital Simulator",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=5v6DA8GBnIk",
        description:
          "Ever wondered why our planets move in circles or how are space satellites able to travel to the extents of our universe? Come learn by watching our Orbital Simulator! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Liquid Nitrogen and Space Shuttle Tile",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=l5q6HvocEGY",
        description:
          "Come learn about the extreme temperatures of space! See a shuttle tile flown in space, learn about how temperature affects the volume of a balloon, and watch pennies and flowers get so cold they easily break! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Hybrid Rocket Engine Demo",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=b3BunJMD1UQ",
        description:
          "Come see a hybrid engine hot fire in person! Using solid acrylic and gaseous oxygen we will demonstrate how Newton’s laws come into play! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Astronaut 101: Tool Design",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=f38TmoizHRM",
        description:
          "Ever wondered how astronauts live and work in space as well as wanting to know how you can be a part of it? Come watch our Human Spaceflight exhibit to learn about the tools astronauts use in space and how our very own tools have made it into astronauts' hands! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Astronaut 101: Mission Patches",
        rso: "Illinois Space Society",
        video: "https://youtu.be/OTfJy63leDA",
        description:
          "What is Human Spaceflight and why are Mission Patches important? Find out in Astronaut 101: Mission Patches! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
      {
        name: "Moon Crater Creator",
        rso: "Illinois Space Society",
        video: "https://www.youtube.com/watch?v=4CLqiRZIjKA",
        description:
          "Why are there so many craters on the moon and why aren't there more on Earth? Learn the answers to these questions and create your own moon model with craters at our 'Moon Crater Creator' exhibit! Email Courtney Leverenz at cml4@illinois.edu for any questions you may have.",
        tags: [],
        links: [],
      },
    ],
  },
  {
    name: "Electrical and Computer Engineering Building",
    link: "/exhibits/eceb",
    latitude: 40.114961,
    longitude: -88.228013,
    description:
      "Illinois ECE has a rich history that has shaped the department to what it is today. The department is ranked as one of the best in the world, boasting innovative faculty, hands-on classroom experiences, and ground-breaking research",
    tags: [
      "Programming",
      "High School",
      "Smart Technology",
      "Future-Oriented",
      "Electronics",
      "Sustainable",
      "Cars",
      "Design Team",
      "Robotics",
      "Kid-Friendly",
    ],
    exhibits: [
      {
        name: "Cybersecurity Breakfast Adventure",
        rso: "Women in Cybersecurity at Illinois",
        video: "https://youtu.be/WJl05rp-UF4",
        description:
          "Our video is a showcase of the game we’ve developed for EOH visitors to play at the WiCyS Illinois website, wicys.github.io! Solve beginner-friendly cybersecurity puzzles so that you can successfully make breakfast in your ECEB apartment. Email the team lead Megan Lov, mlov2@illinois.edu if you have any questions!",
        tags: ["Programming", "Smart Technology", "Future-Oriented"],
        links: [
          {
            name: "Handout",
            address:
              "https://drive.google.com/file/d/1RPcA9p0KZ5onJsP5zjDwCo79o-LfOijg/view?ts=605bf721",
          },
          {
            name: "Website",
            address: "http://wicys.github.io",
          },
        ],
      },
      {
        name: "Discover ECE@Illinois",
        rso: "ECESAC",
        video: "https://youtu.be/Pttw_Q9Ejpw",
        description:
          "Discover the wonders of the ECE Department through a snapshot of different classes and projects you can do as a part of ECE@Illinois. Email the team lead Savera Zulfiqar, saveraz2@illinois.edu if you have any questions!",
        tags: ["Electronics", "Programming", "Smart Technology"],
        links: [],
      },
      {
        name: "Smart String Lights",
        rso: "Women in Electrical and Computer Engineering",
        video: "https://youtu.be/C_fYm0a_sKQ",
        description:
          "This year, WECE's technical committee created a visual virtual assistant that answers a variety of weather questions, has different lighting themes, and reacts to music. With the speech recognition, all this is available simply by asking in plain English. Email the team lead Keerat Singh, keerats2@illinois.edu if you have any questions!",
        tags: ["Electronics", "Programming"],
        links: [
          {
            name: "Website",
            address: "https://wece.ece.illinois.edu/",
          },
          {
            name: "Youtube",
            address: "https://www.youtube.com/channel/UC0xReaxVbd8Ub7yXOppHttw",
          },
        ],
      },
      {
        name: "Office Access Control System",
        rso: "Sigma Phi Delta",
        video: "https://youtu.be/RuTOtw074og",
        description:
          "We are developing a cyber physical security system to enhance the protection of BP offices. Email the team lead Thomas Ng, thomasn3@illinois.edu if you have any questions!",
        tags: ["Smart Technology", "Electronics", "Programming"],
        links: [],
      },
      {
        name: "Illini Solar Car: Brizo",
        rso: "Illini Solar Car",
        video: "https://youtu.be/AO4EvsOQlMc",
        description:
          "Join Illini Solar Car as we provide a brief technical exploration of our second generation vehicle Brizo! Brizo was unveiled on March 6th. Read more on our website! Email the team lead Rishi Mohan, rishinm2@illinois.edu if you have any questions.",
        tags: ["Sustainable", "Cars", "Design Team"],
        links: [
          {
            name: "Website",
            address: "www.illinisolarcar.com/brizo",
          },
        ],
      },
      {
        name: "Go Automated Robot Arm",
        rso: "",
        video: "https://youtu.be/Z3i9AJpxkzc",
        description:
          "An Automatic Robotic Arm which plays board games with you using computer vision. Email the team lead Roy Zhou, royzhou2@illinois.edu if you have any questions.",
        tags: ["Robotics", "Programming"],
        links: [],
      },
      {
        name: "Simulated Arithmetic Logic Unit",
        rso: "Code Redstone",
        video: "https://youtu.be/N2QxujWkl3o",
        description:
          "A 4-bit logic unit designed using Minecraft's Redstone. Showcases the basic understanding of computer architecture through everyone's favorite sandbox game. Email the team lead Rohit Narayanan at rohit2@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Programming", "Electronics"],
        links: [],
      },
      {
        name:
          "The Mini-GRAIC Race - A competition for self driving cars you can compete in!",
        rso: "",
        video: "https://youtu.be/dtIuADO5FGI",
        description:
          "The GRAIC Race is a competition for self-driving cars that you can compete in! Check out our presentation and our website to learn how you can compete! Email team lead Kristina Miller, kmmille2@illinois.edu if you have any questions.",
        tags: ["Robotics", "Programming"],
        links: [
          {
            name: "Website",
            address: "https://popgri.github.io/Race/",
          },
        ],
      },
      {
        name: "ECEB Energy Kisoks",
        rso: "SIGCHI",
        video: "https://youtu.be/faqjvWFiSQs",
        description:
          "Learn about how Human-Computer Interaction can be used to promote environmental awareness!  SIGCHI presents two kiosks at the ECEB focused on the university's environmental efforts and how you can make a difference. Email Mitchell Bifeld at mbifeld2@illinois.edu for any questions!",
        tags: ["Sustainable", "Design Team", "Future-Oriented"],
        links: [],
      },
      {
        name: "ASL Robotic Hand Translator",
        rso: "Society of Hispanic Professional Engineers",
        video: "https://youtu.be/IX-_zz8-Zfc",
        description:
          "We made a robotic hand which is meant to translate text to ASL. Interprets user input and the hand relays visual output. Email Team Leads Salvador Sepulveda & Fernando Sandoval at fs10@illinois.edu if you have any questions!",
        tags: ["High School", "Robotics", "Electronics"],
        links: [],
      },
    ],
  },
  {
    name: "Department of Chemical and Biomolecular Engineering",
    link: "/exhibits/chbe",
    latitude: 40.112079,
    longitude: -88.227145,
    description:
      "From fuel cells to disease-fighting drugs, Illinois Chemical Engineers are solving the world's most daunting challenges in health, energy and the environment.",
    tags: ["Kid-Friendly", "Chemistry", "DNA"],
    exhibits: [
      {
        name: "Elephant's Toothpaste",
        rso: "Omega Chi Epsilon",
        video: "https://youtu.be/Qb-LRKfFHhw",
        description:
          "Elephant's Toothpaste a is a simple and fun science experiment to do at home. It mixes hydrogen peroxide, yeast, soap, and water to make a huge bubbly and colorful mess that resembles toothpaste. Email the team lead Andrew Gondela, agonde3@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Chemistry"],
        links: [],
      },
      {
        name: "Lava Lamp",
        rso: "Omega Chi Epsilon",
        video: "https://youtu.be/gwZ711xpmEY",
        description:
          "Lava Lamp is fun and easy to do science experiment that incorporates many key chemistry principles. All you have to do is mix vegetable oil, water, and alka seltzer to see some cool bubble action. Email the team lead Katie Sanders, kas11@illinois.edu if you have any questions!",
        tags: ["Kid-Friendly", "Chemistry"],
        links: [],
      },
      {
        name: "Big to Little: Understanding the Chemistry of Our World!",
        rso: "",
        video: "https://youtu.be/g8j28ovetaE",
        description:
          "Chemistry is all around us!—in this video we examine the chemistry of our oceans, our clothes, and our cells. Running Waters by Audionautix is licensed under a Creative Commons Attribution 4.0 licence. https://creativecommons.org/licenses/by/4.0, Artist: http://audionautix.com/, Second Nature by Audionautix is licensed under a Creative Commons Attribution 4.0 licence. https://creativecommons.org/licenses/by/4.0/, Artist: http://audionautix.com/. If you have any questions email Ryan Eleveld at eveld2@illinois.edu!",
        tags: ["Kid-Friendly", "Chemistry", "DNA"],
        links: [],
      },
    ],
  },
];

export default exhibitData;
