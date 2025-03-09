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
    question: "Which software development model follows sprints and iterations?",
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
    question: "Identify the correct order of the Waterfall Model phases.",
    type: "multiple-choice",
    options: [
      "Requirements -> Development -> Design -> Testing -> Maintenance",
      "Design -> Requirements -> Testing -> Development -> Deployment",
      "Requirements -> Design -> Development -> Testing -> Deployment -> Maintenance",
      "Testing -> Development -> Design -> Requirements -> Deployment"
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
    question: "Which software development model follows sprints and iterations?",
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
    question: "Identify the correct order of the Waterfall Model phases.",
    type: "multiple-choice",
    options: [
      "Requirements -> Development -> Design -> Testing -> Maintenance",
      "Design -> Requirements -> Testing -> Development -> Deployment",
      "Requirements -> Design -> Development -> Testing -> Deployment -> Maintenance",
      "Testing -> Development -> Design -> Requirements -> Deployment"
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

