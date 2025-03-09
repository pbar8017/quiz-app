// quizData.jsx - Stores the question bank

const quizData = [
  {
    question: "What is Object-Oriented Programming (OOP)?",
    type: "multiple-choice",
    options: [
      "A programming paradigm based on functions",
      "A programming paradigm based on objects and classes",
      "A scripting language",
      "A database management system"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT an OOP principle?",
    type: "multiple-choice",
    options: [
      "Encapsulation",
      "Polymorphism",
      "Abstraction",
      "Compilation"
    ],
    answer: 3
  },
  {
    question: "What is Software Engineering?",
    type: "written",
    answer: "The process by which software systems are investigated, planned, modeled, developed, implemented and managed. It also includes the re-engineering of existing systems with a view to improve their role, function and performance."
  },
  {
    question: "What is a system?",
    type: "written",
    answer: "A set of interacted, interrelated, interdependent components that work together to achieve specific objectives."
  },
  {
    question: "What is software?",
    type: "written",
    answer: "The combination of programs, databases, and documentation in a systematic suite, with the sole purpose of solving specific system problems and meeting predetermined objectives."
  },
  {
    question: "What is Software Engineering?",
    type: "multiple-choice",
    options: [
      "A method of designing mechanical systems",
      "The process of investigating, planning, modeling, developing, and managing software systems",
      "A programming language",
      "A subset of computer engineering"
    ],
    answer: 1
  },
  {
    question: "What is a system?",
    type: "multiple-choice",
    options: [
      "A standalone application",
      "A set of interacted, interrelated, interdependent components that work together to achieve specific objectives",
      "A physical machine",
      "A single software program"
    ],
    answer: 1
  },
  {
    question: "What is software?",
    type: "multiple-choice",
    options: [
      "A collection of mechanical components",
      "Only the program code written by developers",
      "The combination of programs, databases, and documentation to solve system problems and meet objectives",
      "A network hardware component"
    ],
    answer: 2
  },
  {
    question: "Describe the purpose of a UML Use Case Diagram.",
    type: "written",
    answer: "A UML Use Case Diagram models user interactions with the system."
  },

  {
    question: "What is the software development process?",
    type: "written",
    answer: "A logical path or method utilised by teams to effectively create software. The goal is to efficiently deliver a software product that meets the needs of a business or satisfy the requirements of a client."
  },
  {
    question: "What does the Software development process contain?",
    type: "written",
    answer: "Planning, Implementation, Testing, and Maintenance."
  },
  {
    question: "Which of the following is NOT a phase of the software development process?",
    type: "multiple-choice",
    options: [
      "Planning",
      "Design",
      "Execution",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "What is the primary goal of software development?",
    type: "multiple-choice",
    options: [
      "To create a perfect software with no bugs",
      "To develop software that meets business and client needs efficiently",
      "To focus only on coding without planning",
      "To ensure every software project is completed within a week"
    ],
    answer: 1
  },
  {
    question: "What is the Software Development Lifecycle?",
    type: "written",
    answer: "SDLC is a set of activities and associated results that produce software. It is the methodology used by developers to implement the software development steps."
  },
  {
    question: "Which of the following is NOT a phase of SDLC?",
    type: "multiple-choice",
    options: [
      "Ideation",
      "Requirements",
      "Gaming",
      "Deployment"
    ],
    answer: 2
  },
  {
    question: "What is the Waterfall Model?",
    type: "written",
    answer: "A sequential development process where each phase begins at the end of the previous one. It is called a linear model."
  },
  {
    question: "What is the Agile Model?",
    type: "written",
    answer: "A repetitive iterative approach where tasks are completed in cyclical progressions known as sprints lasting 2 to 4 weeks each."
  },
  {
    question: "Which model follows a linear progression in SDLC?",
    type: "multiple-choice",
    options: [
      "Agile Model",
      "Waterfall Model",
      "Iterative Model",
      "RAD Model"
    ],
    answer: 1
  },


  {
    question: "What is the first phase of SDLC?",
    type: "multiple-choice",
    options: [
      "Development",
      "Design",
      "Requirements",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "What is a programming paradigm?",
    type: "written",
    answer: "A paradigm conceptualizes and structures the implementation of a computer program."
  },
  {
    question: "Which of the following is an imperative programming paradigm?",
    type: "multiple-choice",
    options: [
      "Functional Programming",
      "Object-Oriented Programming",
      "Declarative Programming",
      "Event-Driven Programming"
    ],
    answer: 1
  },
  {
    question: "What is procedural programming?",
    type: "written",
    answer: "Procedural programming divides a program into procedures or tasks, focusing on a step-by-step approach to solve a problem."
  },

  {
    question: "What is Requirement Analysis?",
    type: "multiple-choice",
    options: [
      "The process of identifying and defining system requirements",
      "Writing code for a software system",
      "Designing the user interface of a system",
      "Debugging errors in software"
    ],
    answer: 0
  },
  {
    question: "Which of the following describes system properties or attributes and how a system should behave?",
    type: "multiple-choice",
    options: [
      "Programming syntax",
      "System Requirements",
      "Algorithm complexity",
      "Hardware specifications"
    ],
    answer: 1
  },
  {
    question: "What are the two main types of requirements that development teams analyze?",
    type: "multiple-choice",
    options: [
      "Hardware and software requirements",
      "Functional and non-functional requirements",
      "User experience and customer satisfaction",
      "Back-end and front-end requirements"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a step in Requirement Analysis?",
    type: "multiple-choice",
    options: [
      "Gathering requirements",
      "Writing source code",
      "Analyzing documents",
      "Identifying use cases or user stories"
    ],
    answer: 1
  },
  {
    question: "Which technique is commonly used to gather requirements from stakeholders?",
    type: "multiple-choice",
    options: [
      "Debugging",
      "Conducting interviews and surveys",
      "Writing test cases",
      "Implementing user interfaces"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of analyzing documents during Requirement Analysis?",
    type: "multiple-choice",
    options: [
      "To determine if the requirements are clear, complete, and consistent",
      "To design a database schema",
      "To develop test cases",
      "To deploy the software to production"
    ],
    answer: 0
  },
  {
    question: "What is a use case?",
    type: "multiple-choice",
    options: [
      "A programming function",
      "A set of detailed instructions for coding",
      "A sequence of actions performed by an actor to complete a task",
      "A database table storing system attributes"
    ],
    answer: 2
  },
  {
    question: "In Agile development, how are use cases often represented?",
    type: "multiple-choice",
    options: [
      "As UML diagrams",
      "As wireframes",
      "As user stories",
      "As flowcharts"
    ],
    answer: 2
  },
  {
    question: "Which of the following best describes Use Case Modelling?",
    type: "multiple-choice",
    options: [
      "Organizing high-level system functions into a UML Use Case Diagram",
      "Writing the software code for system features",
      "Debugging system errors before deployment",
      "Designing a database schema"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a method used in Gathering Requirements?",
    type: "multiple-choice",
    options: [
      "Interviews with stakeholders",
      "Surveys and feedback collection",
      "Writing SQL queries",
      "Observations of user behavior"
    ],
    answer: 2
  },
  {
    question: "Explain what Requirement Analysis is and why it is important in software development.",
    type: "written",
    answer: "Requirement Analysis is the process of identifying, documenting, and analyzing the needs and constraints of a software system to ensure that it meets business and user needs."
  },
  {
    question: "What are functional and non-functional requirements? Provide examples of each.",
    type: "written",
    answer: "Functional requirements define what the system should do, such as login functionality, while non-functional requirements describe system attributes like performance, security, and scalability."
  },
  {
    question: "Describe the steps involved in Requirement Analysis and explain their purpose.",
    type: "written",
    answer: "Steps include Gathering Requirements, Analyzing Documents, Identifying Use Cases, and Use Case Modelling to ensure clarity and completeness."
  },
  {
    question: "What are the key methods used in gathering requirements, and why are they essential?",
    type: "written",
    answer: "Methods include interviews, surveys, and stakeholder meetings to ensure all system needs are captured accurately."
  },
  {
    question: "Explain how analyzing documents helps ensure the clarity and accuracy of system requirements.",
    type: "written",
    answer: "Document analysis verifies that requirements are clear, complete, and consistent, reducing errors and ambiguities."
  },
  {
    question: "What is a use case? Provide an example of a real-world use case for a software application.",
    type: "written",
    answer: "A use case represents a sequence of user interactions with a system, such as an e-commerce checkout process."
  },
  {
    question: "How does Use Case Modelling help visualize system requirements?",
    type: "written",
    answer: "It organizes system functions into a UML Use Case Diagram to provide a clear view of functional requirements."
  },
  {
    question: "Why are user stories important in Agile development? Provide an example of a user story.",
    type: "written",
    answer: "User stories describe software features from a user's perspective, such as 'As a user, I want to reset my password so that I can access my account.'"
  },
  {
    question: "What challenges can arise during Requirement Analysis, and how can they be addressed?",
    type: "written",
    answer: "Challenges include unclear requirements, stakeholder misalignment, and scope creep, which can be managed through iterative discussions and documentation."
  },
  {
    question: "Describe the difference between high-level functional requirements and detailed system specifications.",
    type: "written",
    answer: "High-level functional requirements describe the overall system behavior, while detailed specifications define implementation details."
  },

  {
    question: "What is Requirement Analysis?",
    type: "multiple-choice",
    options: [
      "The process of debugging software",
      "The process of determining user needs and system requirements",
      "The final step of software deployment",
      "A marketing strategy for software"
    ],
    answer: 1
  },
  {
    question: "Describe how requirements are analyzed in software development.",
    type: "written",
    answer: "Requirements are analyzed by development teams and decomposed into functional and non-functional requirements."
  },
  {
    question: "Which of the following is NOT a step in Requirement Analysis?",
    type: "multiple-choice",
    options: [
      "Gathering requirements",
      "Analyzing documents",
      "Developing the final product",
      "Use case modeling"
    ],
    answer: 2
  },

  // Requirement Testing Questions
  {
    question: "What is the purpose of Requirements Testing?",
    type: "multiple-choice",
    options: [
      "To evaluate if the system meets stakeholders' requirements",
      "To debug software code",
      "To design the user interface",
      "To deploy the software"
    ],
    answer: 0
  },
  {
    question: "Which type of testing is Requirements Testing classified as?",
    type: "multiple-choice",
    options: [
      "Unit Testing",
      "Black-Box Testing",
      "White-Box Testing",
      "Integration Testing"
    ],
    answer: 1
  },
  {
    question: "What does Requirements Testing check for?",
    type: "multiple-choice",
    options: [
      "Compliance and correctness",
      "System speed",
      "Number of code lines",
      "The software's color scheme"
    ],
    answer: 0
  },
  {
    question: "Explain the purpose of Requirements Testing.",
    type: "written",
    answer: "Requirements Testing is a documentation-based testing method used to evaluate whether the system meets stakeholder requirements by checking for compliance, correctness, completeness, consistency, and usability."
  },
  {
    question: "List the steps involved in Requirements Testing.",
    type: "written",
    answer: "Define the testing criteria, perform the testing, record the results, discuss the results with stakeholders, implement necessary changes."
  },

  // UML Use Case Diagram
  {
    question: "What is a UML Use Case Diagram?",
    type: "multiple-choice",
    options: [
      "A database schema",
      "A visual representation of system functions and actors",
      "A coding standard",
      "A testing strategy"
    ],
    answer: 1
  },
  {
    question: "How do use cases help in software development?",
    type: "written",
    answer: "A use case is a sequence of actions that an actor performs to complete a given task. In agile, use cases are expressed as user stories that describe software features from a user's perspective."
  },

  // Object-Oriented Programming Principles
  {
    question: "Which of the following is NOT a principle of Object-Oriented Programming?",
    type: "multiple-choice",
    options: [
      "Encapsulation",
      "Abstraction",
      "Polymorphism",
      "Compilation"
    ],
    answer: 3
  },
  {
    question: "Define Encapsulation in Object-Oriented Programming.",
    type: "written",
    answer: "Encapsulation restricts direct access to components of an object while using methods such as getters and setters."
  },
  {
    question: "What does Abstraction help with in OOP?",
    type: "multiple-choice",
    options: [
      "Hiding unnecessary details",
      "Writing detailed code for every component",
      "Increasing system complexity",
      "Managing databases"
    ],
    answer: 0
  },
  {
    question: "Describe Polymorphism in Object-Oriented Programming.",
    type: "written",
    answer: "Polymorphism allows an object to take many forms, enabling methods to be used interchangeably in different classes."
  },
  {
    question: "What is Inheritance in Object-Oriented Programming?",
    type: "multiple-choice",
    options: [
      "A process where a class derives properties from another class",
      "A method to store data permanently",
      "A function to debug a program",
      "A feature used for encrypting software"
    ],
    answer: 0
  },

  // Additional Agile & SDLC Questions
  {
    question: "Which software development model follows an iterative approach with sprints?",
    type: "multiple-choice",
    options: [
      "Waterfall Model",
      "V-Model",
      "Agile Model",
      "Big Bang Model"
    ],
    answer: 2
  },
  {
    question: "What is the first phase of SDLC?",
    type: "multiple-choice",
    options: [
      "Development",
      "Design",
      "Requirements",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "Explain the concept of Use Case Modeling.",
    type: "written",
    answer: "Use case modeling organizes high-level system functions into a UML Use Case Diagram to visualize the functional requirements of the project."
  },

  // Compliance
  {
    question: "What does 'Compliance' mean in the context of requirement evaluation?",
    type: "written",
    answer: "Compliance refers to the degree to which the requirement follows industry standards."
  },
  {
    question: "Which of the following best defines 'Compliance' in requirement evaluation?",
    type: "multiple-choice",
    options: [
      "The requirement follows industry standards",
      "The requirement is free from spelling mistakes",
      "The requirement is detailed and includes all possible functionalities",
      "The requirement is flexible for future modifications"
    ],
    answer: 0
  },

  // Correctness
  {
    question: "Define 'Correctness' in the context of requirement evaluation.",
    type: "written",
    answer: "Correctness refers to how accurate a requirement is in terms of spelling, grammar, and logical accuracy."
  },
  {
    question: "Which aspect does 'Correctness' evaluate in a requirement?",
    type: "multiple-choice",
    options: [
      "If the requirement follows security protocols",
      "If the requirement is correctly spelled, grammatically sound, and accurate",
      "If the requirement is mapped to user stories",
      "If the requirement is complete and includes all functionalities"
    ],
    answer: 1
  },

  // Consistency
  {
    question: "What is the significance of 'Consistency' in requirements evaluation?",
    type: "written",
    answer: "Consistency refers to how well a requirement aligns with user stories and does not contradict other requirements."
  },
  {
    question: "Which statement about 'Consistency' is true?",
    type: "multiple-choice",
    options: [
      "Consistency ensures requirements do not contradict each other and align with user stories",
      "Consistency ensures that the requirement is well-documented",
      "Consistency means the requirement meets all legal and compliance standards",
      "Consistency refers to the number of iterations required to refine a requirement"
    ],
    answer: 0
  },

  // Completeness
  {
    question: "What does 'Completeness' mean in requirement evaluation?",
    type: "written",
    answer: "Completeness means that the functional requirements fully align with the intended software functionality."
  },
  {
    question: "Which of the following best defines 'Completeness'?",
    type: "multiple-choice",
    options: [
      "The requirement includes all necessary functional aspects",
      "The requirement follows formatting rules",
      "The requirement is easy to modify",
      "The requirement avoids redundancy"
    ],
    answer: 0
  },

  // Expandability
  {
    question: "What is 'Expandability' in the context of requirements evaluation?",
    type: "written",
    answer: "Expandability refers to how easily a requirement can be modified and improved to meet project objectives."
  },
  {
    question: "Expandability in requirements evaluation focuses on:",
    type: "multiple-choice",
    options: [
      "How well a requirement meets security guidelines",
      "How adaptable a requirement is for future modifications",
      "How a requirement is mapped to user needs",
      "How thoroughly a requirement is documented"
    ],
    answer: 1
  },

  {
    question: "What is a use case?",
    type: "multiple-choice",
    options: [
      "A sequence of steps describing how a system works internally",
      "Something an actor wants the system to do, capturing functional requirements",
      "A visual representation of the system’s architecture",
      "A set of programming rules for writing efficient code"
    ],
    answer: 1
  },
  {
    question: "Who initiates a use case?",
    type: "multiple-choice",
    options: [
      "The system itself",
      "A developer",
      "An actor",
      "A database administrator"
    ],
    answer: 2
  },
  {
    question: "Which of the following statements about use cases is NOT true?",
    type: "multiple-choice",
    options: [
      "A use case describes system behavior from an actor’s perspective",
      "Use cases are written from the perspective of the system, not the user",
      "A use case consists of actions a user performs to achieve a goal",
      "Use cases reflect all possible events in a system related to an actor’s goal"
    ],
    answer: 1
  },
  {
    question: "What does a complete set of use cases define?",
    type: "multiple-choice",
    options: [
      "The system’s internal implementation details",
      "All possible ways the system will behave and its functional requirements",
      "A single step in a complex business process",
      "The final testing process of the software"
    ],
    answer: 1
  },
  {
    question: "Explain what a use case is and why it is important in software development.",
    type: "written",
    answer: "A use case is a description of how an actor interacts with a system to achieve a goal. It helps define functional requirements and provides a user-centered perspective on system behavior."
  },
  {
    question: "Describe the relationship between actors and use cases. Why must use cases be written from the actor’s perspective?",
    type: "written",
    answer: "Actors initiate use cases by interacting with the system. Writing use cases from the actor’s perspective ensures that the system meets user needs and expectations."
  },
  {
    question: "How do use cases help in defining the functional requirements of a system?",
    type: "written",
    answer: "Use cases define functional requirements by specifying the expected behavior of the system in different scenarios, ensuring that user needs are met."
  },
  {
    question: "Give an example of a use case for an online shopping website.",
    type: "written",
    answer: "An example use case: 'As a customer, I want to add items to my shopping cart so that I can purchase multiple products at once.'"
  },
  {
    question: "What are the key characteristics of a well-defined use case?",
    type: "written",
    answer: "A well-defined use case is clear, concise, actor-focused, goal-oriented, and includes all possible scenarios, including success and failure conditions."
  },

  {
    question: "What is a key question to ask when identifying a use case?",
    type: "multiple-choice",
    options: [
      "What programming language is used?",
      "What functions will a specific actor want from the system?",
      "How fast is the system’s processor?",
      "What software version is currently running?"
    ],
    answer: 1
  },
  {
    question: "Why is it important to determine whether the system stores or retrieves information when identifying a use case?",
    type: "multiple-choice",
    options: [
      "To decide which programming language to use",
      "To improve system security",
      "To define functional requirements of the system",
      "To estimate the cost of development"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a consideration when identifying a use case?",
    type: "multiple-choice",
    options: [
      "What happens when the system changes state?",
      "Does the system generate any reports?",
      "Who designed the user interface?",
      "Does the system interact with any external system?"
    ],
    answer: 2
  },
  {
    question: "What happens when a system changes state in the context of a use case?",
    type: "multiple-choice",
    options: [
      "The system automatically shuts down",
      "The system's behavior or data flow may change",
      "The system's programming language changes",
      "The system loses all stored data"
    ],
    answer: 1
  },
  {
    question: "Why is it important to ask whether a system interacts with external systems?",
    type: "multiple-choice",
    options: [
      "To determine system dependencies and integration points",
      "To change the system’s programming language",
      "To decide if the system should be deleted",
      "To determine the cost of hardware components"
    ],
    answer: 0
  },
  {
    question: "Explain the importance of identifying a use case before designing a system.",
    type: "written",
    answer: "Identifying use cases helps define the system's functional requirements, ensuring it meets user needs and business goals."
  },
  {
    question: "How does identifying whether a system generates reports help in defining its use cases?",
    type: "written",
    answer: "Understanding report generation helps determine what data the system needs to collect, store, and process, defining key functionalities."
  },
  {
    question: "Describe the relationship between system state changes and use case identification.",
    type: "written",
    answer: "System state changes impact workflows, requiring use cases to define expected behaviors and transitions between states."
  },
  {
    question: "Why is it crucial to determine how a system interacts with external systems when identifying use cases?",
    type: "written",
    answer: "External system interactions affect integration, security, and dependencies, ensuring smooth data exchange and functionality."
  },
  {
    question: "Provide an example of a user function that could be considered a use case.",
    type: "written",
    answer: "Example: 'As a user, I want to reset my password so that I can regain access to my account.'"
  },

  {
    question: "What is a user story?",
    type: "multiple-choice",
    options: [
      "A technical document detailing system architecture",
      "A requirement linked to a process, product, service, or system",
      "A contract between the developer and client",
      "A step-by-step guide to coding software"
    ],
    answer: 1
  },
  {
    question: "How are user stories typically planned in Agile development?",
    type: "multiple-choice",
    options: [
      "Over multiple years",
      "Only after full system development is complete",
      "In a single iteration or sprint",
      "After the product is launched"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a correct user story template?",
    type: "multiple-choice",
    options: [
      "I want to complete a task so that it functions properly",
      "As a [user], I want to [do something] so that [reason/benefit]",
      "If I complete this task, then the system will work",
      "The system must execute functions as expected"
    ],
    answer: 1
  },
  {
    question: "Why might some user stories span multiple sprints?",
    type: "multiple-choice",
    options: [
      "They require decomposition into smaller tasks",
      "They are too simple for one sprint",
      "They do not require developer input",
      "They only apply to long-term projects"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'So that' part in a user story?",
    type: "multiple-choice",
    options: [
      "To define the coding logic",
      "To describe the benefit or value for the user",
      "To specify the system's hardware requirements",
      "To list programming languages used"
    ],
    answer: 1
  },
  {
    question: "Why is a user story written from a developer's perspective?",
    type: "multiple-choice",
    options: [
      "To describe how to write the program",
      "To express the functional or non-functional goal in the system",
      "To estimate the time required for system testing",
      "To document the programming structure"
    ],
    answer: 1
  },
  {
    question: "Describe how a user story differs from a system requirement document.",
    type: "written",
    answer: "A user story is a simple, user-focused description of a requirement written from the user's perspective, while a system requirement document is a detailed technical specification outlining all aspects of system functionality."
  },
  {
    question: "Provide an example of a user story using the template 'As a..., I want to..., so that...'.",
    type: "written",
    answer: "As a teacher, I want to access student records online so that I can update their grades easily."
  },
  {
    question: "Explain why Agile uses user stories instead of traditional requirement documents.",
    type: "written",
    answer: "Agile uses user stories because they are flexible, user-centered, and adaptable to change, allowing teams to prioritize and break down requirements more effectively."
  },
  {
    question: "How does breaking down user stories help in Agile development?",
    type: "written",
    answer: "Breaking down user stories allows teams to manage workload effectively, prioritize features, and ensure each task can be completed within a sprint."
  },

  // Agile vs Waterfall Questions
  {
    question: "According to the image, what percentage of Waterfall projects are considered successful?",
    type: "multiple-choice",
    options: ["39%", "11%", "29%", "52%"],
    answer: 1
  },
  {
    question: "What percentage of Agile projects are successful according to the image?",
    type: "multiple-choice",
    options: ["11%", "52%", "39%", "60%"],
    answer: 2
  },
  {
    question: "Which methodology has a lower failure rate according to the image?",
    type: "multiple-choice",
    options: ["Agile", "Waterfall", "Both have the same failure rate", "The image does not provide this information"],
    answer: 0
  },
  {
    question: "What is the percentage of challenged projects in the Waterfall methodology?",
    type: "multiple-choice",
    options: ["29%", "60%", "52%", "11%"],
    answer: 1
  },
  {
    question: "Why do you think Agile projects tend to be more successful than Waterfall projects based on the image?",
    type: "written",
    answer: "Agile allows for iterative development, adaptability, and continuous feedback, reducing project failure. Waterfall follows a rigid structure, making it difficult to address issues that arise during development."
  },

  // Requirement Analysis
  {
    question: "What is requirement analysis?",
    type: "written",
    answer: "Requirement analysis is the process of gathering, analyzing, and defining the requirements of a system to ensure it meets stakeholder needs."
  },
  {
    question: "Which of the following is NOT a step in requirement analysis?",
    type: "multiple-choice",
    options: ["Gathering requirements", "Analyzing documents", "Identifying use cases", "Programming the system"],
    answer: 3
  },
  {
    question: "What does requirement testing involve?",
    type: "multiple-choice",
    options: ["Checking for compliance, correctness, completeness, and usability", "Writing user manuals", "Programming in Agile methodology", "Creating UML diagrams"],
    answer: 0
  },

  // Use Case & UML Questions
  {
    question: "What is a use case?",
    type: "written",
    answer: "A use case is a sequence of actions that an actor performs to complete a given task within a system, capturing its functional requirements."
  },
  {
    question: "Which of the following is NOT a characteristic of a use case?",
    type: "multiple-choice",
    options: ["Captures functional requirements", "Describes behavior from an actor’s perspective", "Specifies all ways the system will behave", "Defines database structure"],
    answer: 3
  },
  {
    question: "How can we identify a use case?",
    type: "multiple-choice",
    options: [
      "By asking what functions an actor wants from the system",
      "By identifying database tables",
      "By checking system performance metrics",
      "By defining Agile sprints"
    ],
    answer: 0
  },
  {
    question: "What is UML (Unified Modeling Language)?",
    type: "written",
    answer: "UML is a standardized set of diagrams that visually represent a software system's functions, actions, objects, and components."
  },
  {
    question: "Which of the following is NOT a UML diagram type?",
    type: "multiple-choice",
    options: ["Class Diagram", "Use Case Diagram", "Flowchart Diagram", "Sequence Diagram"],
    answer: 2
  },

  // Object-Oriented Programming (OOP) Questions
  {
    question: "Which principle of OOP restricts direct access to object components?",
    type: "multiple-choice",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    answer: 0
  },
  {
    question: "Describe the concept of polymorphism in OOP.",
    type: "written",
    answer: "Polymorphism allows an object to take on multiple forms, enabling methods to be overridden or reused across different classes."
  },
  {
    question: "Which of the following OOP principles helps in code reusability?",
    type: "multiple-choice",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    answer: 2
  },

  // Additional Questions
  {
    question: "What is the primary goal of requirement testing?",
    type: "multiple-choice",
    options: [
      "To validate if the system meets stakeholder requirements",
      "To check code syntax errors",
      "To test system performance under load",
      "To define programming languages used"
    ],
    answer: 0
  },
  {
    question: "Which of the following criteria is NOT included in requirement testing?",
    type: "multiple-choice",
    options: ["Compliance", "Correctness", "Completeness", "Deployment"],
    answer: 3
  },

  {
    question: "Define UML and explain its purpose in software development.",
    type: "written",
    answer: "UML (Unified Modeling Language) is a standardized modeling language used in software engineering to visually represent system components, behaviors, and architecture."
  },
  {
    question: "Describe the two main categories of UML diagrams and provide examples of each.",
    type: "written",
    answer: "The two main categories of UML diagrams are Structure Diagrams (e.g., Class Diagram, Object Diagram, Component Diagram) and Behavior Diagrams (e.g., Use Case Diagram, Sequence Diagram, Activity Diagram)."
  },
  {
    question: "What are the benefits of using UML in system design?",
    type: "written",
    answer: "UML helps developers visualize system architecture, improve communication between stakeholders, validate system functionality, and document system behavior."
  },
  {
    question: "Explain what a Use Case Diagram is and why it is used in system design.",
    type: "written",
    answer: "A Use Case Diagram visually represents how actors interact with a system to accomplish tasks, helping define functional requirements."
  },
  {
    question: "List and describe the steps involved in Use Case Modeling.",
    type: "written",
    answer: "1. Identify Actors, 2. Define Use Cases, 3. Establish Relationships, 4. Draw the Use Case Diagram, 5. Validate with Stakeholders."
  },
  {
    question: "What is the role of an actor in a Use Case Diagram?",
    type: "written",
    answer: "An actor represents an external entity (a user, system, or device) that interacts with the system."
  },
  {
    question: "What is the difference between a primary actor and a secondary actor?",
    type: "written",
    answer: "A primary actor initiates system interactions, while a secondary actor supports or provides services to the system."
  },

  // Multiple Choice Questions
  {
    question: "Which of the following best describes UML?",
    type: "multiple-choice",
    options: [
      "A programming language",
      "A standardized modeling language for system design",
      "A database query system",
      "A type of project management methodology"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a UML diagram?",
    type: "multiple-choice",
    options: [
      "Use Case Diagram",
      "Class Diagram",
      "Gantt Chart",
      "Sequence Diagram"
    ],
    answer: 2
  },
  {
    question: "What does a Use Case Diagram primarily capture?",
    type: "multiple-choice",
    options: [
      "The functional requirements of a system",
      "The physical architecture of a system",
      "The database schema of a system",
      "The internal coding structure"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a step in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "Identifying use cases",
      "Defining system boundaries",
      "Writing programming code",
      "Establishing relationships between use cases and actors"
    ],
    answer: 2
  },
  {
    question: "What is an actor in a Use Case Diagram?",
    type: "multiple-choice",
    options: [
      "A software component inside the system",
      "A database table used for transactions",
      "An entity (user, system, or device) interacting with the system",
      "A programming function"
    ],
    answer: 2
  },
  {
    question: "Which of the following is an example of a primary actor?",
    type: "multiple-choice",
    options: [
      "A user purchasing a product on an e-commerce website",
      "A payment processing system handling a transaction",
      "A backup server storing system logs",
      "An automated monitoring tool checking system status"
    ],
    answer: 0
  },
  {
    question: "Which of the following is an example of a secondary actor?",
    type: "multiple-choice",
    options: [
      "A customer placing an order",
      "A bank’s fraud detection system verifying a transaction",
      "A student logging into an educational portal",
      "A user uploading a document"
    ],
    answer: 1
  },
  {
    question: "What differentiates a Primary Actor from a Secondary Actor?",
    type: "multiple-choice",
    options: [
      "Primary actors initiate the use case, while secondary actors support it",
      "Secondary actors initiate the use case, while primary actors support it",
      "Primary actors are always human users, while secondary actors are always systems",
      "There is no difference between primary and secondary actors"
    ],
    answer: 0
  },
  {
    question: "Which of the following describes a generalization relationship in a Use Case Diagram?",
    type: "multiple-choice",
    options: [
      "One use case extends another",
      "One actor inherits the behavior of another actor",
      "Two use cases merge into one",
      "An actor is deleted from the diagram"
    ],
    answer: 1
  },
  {
    question: "If a Use Case must ALWAYS include another use case to function, what relationship should be used?",
    type: "multiple-choice",
    options: [
      "Extend",
      "Include",
      "Association",
      "Generalization"
    ],
    answer: 1
  },
  {
    question: "Define a Use Case and explain why it is important in system design.",
    type: "written",
    answer: "A use case is a sequence of interactions between an actor and a system that achieves a specific goal. It helps define the functional requirements and expected system behavior."
  },
  {
    question: "Describe the main components of a Use Case Model and provide an example.",
    type: "written",
    answer: "A Use Case Model consists of actors, use cases, system boundaries, and relationships. Example: An ATM System includes actors like 'Customer', use cases like 'Withdraw Cash', and relationships such as 'Includes: Authenticate User'."
  },
  {
    question: "What is a System Boundary in Use Case Modeling? Why is it needed?",
    type: "written",
    answer: "A system boundary defines the scope of a system by separating internal processes from external interactions. It ensures clarity in defining what is inside the system and what interacts with it externally."
  },
  {
    question: "Explain the difference between 'Include' and 'Extend' relationships in Use Case Modeling.",
    type: "written",
    answer: "'Include' represents mandatory functionality (e.g., 'Process Order' includes 'Validate Payment'), while 'Extend' represents optional behavior (e.g., 'Login' extends 'Forgot Password')."
  },
  {
    question: "Give an example of a Generalization relationship in Use Case Modeling.",
    type: "written",
    answer: "A 'User' actor can generalize into 'Admin' and 'Customer', where 'Admin' has additional privileges but still shares core actions with 'Customer'."
  },
  {
    question: "Describe the Incremental Development approach in Use Case Modeling and its benefits.",
    type: "written",
    answer: "Incremental development builds use cases gradually, refining requirements step by step. This allows better adaptability to changes and ensures accurate system modeling."
  },
  {
    question: "List three essential tips for modeling use cases effectively.",
    type: "written",
    answer: "1. Keep use cases short and focused, 2. Define actions without specifying implementation, 3. Avoid excessive functional decomposition."
  },
  {
    question: "What does CRUD stand for, and why are CRUD operations essential in system modeling?",
    type: "written",
    answer: "CRUD stands for Create, Read, Update, and Delete. These operations are essential for managing data entities in a system."
  },
  {
    question: "Explain how CRUD operations are implemented in a user management system.",
    type: "written",
    answer: "A user management system includes use cases like 'Create User' (adding a new user), 'Read User' (retrieving user details), 'Update User' (modifying user information), and 'Delete User' (removing a user from the system)."
  },

  // Multiple Choice Questions
  {
    question: "Which statement best describes a Use Case?",
    type: "multiple-choice",
    options: [
      "A programming framework for software design",
      "A sequence of interactions between an actor and a system",
      "A method to store and retrieve data in a database",
      "A test case used in software testing"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a component of a Use Case Model?",
    type: "multiple-choice",
    options: [
      "Actors",
      "System Boundary",
      "Database Tables",
      "Use Cases"
    ],
    answer: 2
  },
  {
    question: "Which is an example of an Include Relationship in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "'User Login' extends to 'Forgot Password'",
      "'Process Order' includes 'Validate Payment'",
      "'User' generalizes to 'Admin' and 'Customer'",
      "'Withdraw Cash' includes 'Print Receipt'"
    ],
    answer: 1
  },
  {
    question: "What is an Extend Relationship used for?",
    type: "multiple-choice",
    options: [
      "To define an optional functionality in a use case",
      "To merge two unrelated use cases",
      "To enforce mandatory functionality in all scenarios",
      "To indicate that a system function has been deprecated"
    ],
    answer: 0
  },
  {
    question: "Which of the following best represents an example of Generalization in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "'Place Order' includes 'Validate Payment'",
      "'Login' extends to 'Forgot Password'",
      "'User' generalizes to 'Admin' and 'Customer'",
      "'Register User' is included in 'Create Account'"
    ],
    answer: 2
  },
  {
    question: "What is the primary function of a System Boundary in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "To define the separation between the system and external actors",
      "To represent a firewall for network security",
      "To list all required system functionalities",
      "To provide additional storage for system metadata"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a best practice when modeling use cases?",
    type: "multiple-choice",
    options: [
      "Keeping use cases concise and to the point",
      "Using generalization to reduce redundancy",
      "Defining system behavior without implementation details",
      "Decomposing every function into multiple use cases regardless of complexity"
    ],
    answer: 3
  },
  {
    question: "Which statement about CRUD Use Cases is TRUE?",
    type: "multiple-choice",
    options: [
      "CRUD Use Cases are optional in system design",
      "CRUD represents common operations like 'Create', 'Read', 'Update', and 'Delete'",
      "CRUD Use Cases must always be extended by other use cases",
      "CRUD Use Cases apply only to user authentication systems"
    ],
    answer: 1
  },
  {
    question: "In a Use Case Model, what is the role of a Primary Actor?",
    type: "multiple-choice",
    options: [
      "A system that provides data but does not initiate actions",
      "An actor that interacts directly with the system to achieve a goal",
      "An administrator who manages system configurations",
      "A secondary user who only observes system operations"
    ],
    answer: 1
  },
  {
    question: "What is a Secondary Actor in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "An actor that directly initiates a system function",
      "A supporting actor that provides services but does not initiate use cases",
      "An actor that plays the main role in system interaction",
      "An actor that is manually added to the system database"
    ],
    answer: 1
  },

  {
    question: "Define a Use Case and explain its purpose in system design.",
    type: "written",
    answer: "A use case is a sequence of interactions between an actor and a system that achieves a specific goal. It defines the functional requirements of a system."
  },
  {
    question: "Provide an example of a Use Case Model and explain its components.",
    type: "written",
    answer: "An ATM Withdrawal use case includes actors (customer, bank system), system boundary, use cases (Enter PIN, Withdraw Cash), and relationships (Includes: Authenticate User, Extends: Print Receipt)."
  },
  {
    question: "What is a System Boundary in Use Case Modeling?",
    type: "written",
    answer: "A system boundary defines the limits of the system by indicating what is inside and outside of it. It separates the system functions from external actors."
  },
  {
    question: "Describe different types of Use Case relationships with examples.",
    type: "written",
    answer: "Use Case relationships include Include (e.g., 'Process Order' includes 'Validate Payment'), Extend (e.g., 'Login' extends to 'Forgot Password'), and Generalization (e.g., 'User' generalizes to 'Admin' and 'Customer')."
  },
  {
    question: "Explain the Extend Relationship in Use Case Modeling with an example.",
    type: "written",
    answer: "An Extend relationship is used when an additional functionality is optional. For example, a 'Login' use case may extend to 'Two-Factor Authentication' only if security settings require it."
  },
  {
    question: "What is Actor Generalization, and when is it used?",
    type: "written",
    answer: "Actor Generalization represents a hierarchical relationship where a general actor is specialized into multiple actors. Example: A 'User' actor can generalize into 'Admin' and 'Customer'."
  },
  {
    question: "Describe the incremental development approach in Use Case Modeling.",
    type: "written",
    answer: "Incremental development involves building use cases step-by-step, refining and expanding models as more system requirements are understood."
  },
  {
    question: "List key tips for modeling use cases effectively.",
    type: "written",
    answer: "1. Keep them short and simple, 2. Focus on WHAT not HOW, 3. Avoid functional decomposition, 4. Ensure actors and use cases are clearly defined."
  },
  {
    question: "What are CRUD operations, and why are they important in system modeling?",
    type: "written",
    answer: "CRUD stands for Create, Read, Update, and Delete. These operations represent essential actions in data management, ensuring a system can manage records effectively."
  },
  {
    question: "Explain how CRUD Use Cases are modeled in a system.",
    type: "written",
    answer: "CRUD use cases represent basic operations on data entities. Example: In a User Management System, 'Create User,' 'View User,' 'Edit User,' and 'Delete User' are modeled as use cases."
  },

  // Multiple Choice Questions
  {
    question: "Which of the following best defines a Use Case?",
    type: "multiple-choice",
    options: [
      "A database table storing records",
      "A sequence of actions between an actor and a system",
      "A software development methodology",
      "A security framework for system authentication"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a component of a Use Case Model?",
    type: "multiple-choice",
    options: [
      "Actors",
      "System Boundary",
      "Database Schema",
      "Use Cases"
    ],
    answer: 2
  },
  {
    question: "Which best describes a System Boundary in a Use Case Model?",
    type: "multiple-choice",
    options: [
      "A physical network firewall",
      "The separation between the system and external actors",
      "A coding standard",
      "A security rule for user access"
    ],
    answer: 1
  },
  {
    question: "Which of the following is an example of an Include Relationship?",
    type: "multiple-choice",
    options: [
      "'Place Order' includes 'Validate Payment'",
      "'Login' extends to 'Forgot Password'",
      "'User' generalizes to 'Admin' and 'Customer'",
      "'Process Loan' includes 'Approve Loan'"
    ],
    answer: 0
  },
  {
    question: "When is an Extend Relationship used in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "When additional functionality is always required",
      "When an optional functionality is needed",
      "When two use cases are merged",
      "When actors share common attributes"
    ],
    answer: 1
  },
  {
    question: "Which statement about Generalization in Use Case Modeling is TRUE?",
    type: "multiple-choice",
    options: [
      "It represents an optional use case",
      "It is used to merge two systems",
      "It shows hierarchical relationships between actors or use cases",
      "It always requires external actors"
    ],
    answer: 2
  },
  {
    question: "What is a key advantage of Incremental Development in Use Case Modeling?",
    type: "multiple-choice",
    options: [
      "It allows step-by-step refinement of use cases",
      "It eliminates the need for system documentation",
      "It replaces traditional system testing",
      "It ensures all actors are removed from the diagram"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a tip for modeling use cases?",
    type: "multiple-choice",
    options: [
      "Keep use cases short and simple",
      "Focus on what the system does, not how it works",
      "Use functional decomposition to break down use cases",
      "Ensure actors and use cases are clearly defined"
    ],
    answer: 2
  },
  {
    question: "Which of the following best represents CRUD operations?",
    type: "multiple-choice",
    options: [
      "Create, Read, Update, Delete",
      "Compile, Run, Undo, Debug",
      "Connect, Refresh, Upload, Download",
      "Classify, Report, Upload, Distribute"
    ],
    answer: 0
  },
  {
    question: "Which is an example of a CRUD Use Case?",
    type: "multiple-choice",
    options: [
      "'Create User', 'View User', 'Edit User', 'Delete User'",
      "'Compile Code', 'Run Code', 'Test Code', 'Debug Code'",
      "'Start Application', 'Close Application', 'Minimize Window', 'Maximize Window'",
      "'Analyze Data', 'Report Data', 'Validate Data', 'Export Data'"
    ],
    answer: 0
  }
];

// Function to refresh the quiz
function refreshQuiz() {
  window.location.reload();
}

export default quizData;

// Adding refresh button functionality to UI
const refreshButton = document.createElement("button");
refreshButton.innerText = "Restart Quiz";
refreshButton.id = "refresh-btn";
refreshButton.onclick = refreshQuiz;
document.body.appendChild(refreshButton);

const refreshButtonStyle = document.createElement("style");
refreshButtonStyle.type = "text/css";
refreshButtonStyle.innerText = `
    #refresh-btn {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;
        color: white;
        background-color: #dc3545;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    #refresh-btn:hover {
        background-color: #c82333;
    }
`;
document.head.appendChild(refreshButtonStyle);

