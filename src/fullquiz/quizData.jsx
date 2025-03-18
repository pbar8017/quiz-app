// quizData.jsx - Stores the question bank

const quizData = [
  {
    question: "What is a class?",
    type: "written",
    answer: "A class is a template that defines the attributes and methods of an object, which can be used to create many objects"
  },

  {
    question: "What are the characteristics of a class?",
    type: "written",
    answer: "(1) Name is a noun, (2) Functions are defined in a class that contains the function data attributes (3) Many objects can be created from the same class (4) A clas can be inherited by many sub-classes (children) (5) A child class (sub-class) can have one or more parent classes (6) Data in a class is encapsulated from other classes interactions"
  },

  {
    question: "Identifying Classes, How to",
    type: "written",
    answer: "(1) Classes are derived from use cases and actors described in the requirement analysis process. Identifying classes in an object-oriented system is the key to success.\n" +
        "(2) Classes should be identified exactly as needed to reduce coupling and enable extensibility. Identifying classes is a skill developers improve by practice and experience.\n" +
        "(3) A class name is always a \"noun\" starting with an uppercase letter (e.g., Bank). If the class name consists of two words, both words should start with uppercase letters (e.g., CreditCard).\n" +
        "(4) Identifying a class always requires identifying its attributes (fields) and functions.\n" +
        "(5) A class can use the functions of another class. We say that one class (the client) uses or depends on another class (the supplier). For example, the Customer makes a deposit, but the Account class contains the deposit function, and the Customer uses it."
  },

  {
    question: "Identifying Classes, How to",
    type: "written",
    answer: "Class: A class is an abstract definition of objects. A class is a template of a blueprint that defines what data and which methods are included in objects.  An object is an instance of a class (created/instantiated from a class)."
  },

  {
    question: "What is an object",
    type:  "written",
    answer: "Object: An object is a thing, tangible and intangible. An object has fields that contain the data and methods to access and modify the data. The definition of object data and methods is specified in a Class.\n"
  },

  {
    question: "What is are the object-oriented paradigm principles?",
    type:  "written",
    answer: "Abstraction, Encapsulation, Inheritance, Polymorphism\n"
  },

  {
    question: "What is Abstraction?",
    type:  "written",
    answer: "The process of hiding unnecessary details about an object while exposing its essential properties and behaviours\n"
  },

  {
    question: "What is Encapsulation?",
    type:  "written",
    answer: "Restricts the direct access to components of an object, while using methods such as getters and setters instead. Encapsulation bundles the data attributes (fields) and the functions using those attributes in the ame class. THis process tends to minimise the number of interactions from outside to use the data (attributes are used within the class). Also, the attributes are hidden (private) within the class, which increase data security\n"
  },

  {
    question: "What is Inheritance?",
    type:  "written",
    answer: "The process of creating sub-classes (children) that inherits the properties (functions and data) from the super-classes (parents). A parent class (supe-class) can have many children, A child class (sub-class) can have more than one parent, A child class inherits parent class properties (attributes and functions and can also override them\n"
  },

  {
    question: "What is Polymorphism?",
    type:  "written",
    answer: "Allows for the creation, use and storage of multiple objects that inherit from the same parent class. Object of different types to be treated as objects of common parent. Multiple object types with the same parent can implement the same function in different ways. Multiple object types with the same parent can use the same attributes with different values\n"
  },

  {
    question: "What is Object-Oriented Design?",
    type:  "written",
    answer: "Object-oriented design is the process of designing a software using object-oriented paradigm. Stages: Identify the classes, Identify attributes (fields) and behaviours (functions), how classes interact with each other (i.e. relationships) and create a visual class model" },

  {
    question: "What are the two types of Abstraction?",
    type:  "written",
    answer: "Data Abstraction & Function Abstraction, Data Abstraction hides the variables that store the data and only expose the values, Function abstraction hides the function code and only exposes the function behaviour\n"
  },
]

// Function to refresh the quiz
function refreshQuiz() {
  window.location.reload();
}

export default quizData;

// Adding refresh button functionality to UI
const refreshButton = document.createElement("button");
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

