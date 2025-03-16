const classesAndObjectsQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is a class?",
        type: "multiple-choice",
        options: [
            "A specific instance of an object",
            "A template that defines the attributes and methods of an object",
            "A function that performs a specific task",
            "A collection of unrelated objects"
        ],
        answer: 1
    },
    {
        question: "Which of the following is NOT a characteristic of a class?",
        type: "multiple-choice",
        options: [
            "The name of a class is usually a noun",
            "A class cannot be inherited by sub-classes",
            "A class defines behaviors (functions)",
            "Many objects can be created from the same class"
        ],
        answer: 1
    },
    {
        question: "Which of the following best describes encapsulation in a class?",
        type: "multiple-choice",
        options: [
            "A class cannot be inherited by other classes",
            "Data in a class is hidden from other classes and accessed through public interfaces",
            "A class exposes all internal functions to other classes",
            "A class cannot define any private attributes"
        ],
        answer: 1
    },
    {
        question: "What is true about child classes (sub-classes)?",
        type: "multiple-choice",
        options: [
            "A child class can have only one parent class",
            "A child class cannot inherit attributes from a parent class",
            "A child class can have one or more parent classes",
            "A child class is independent and does not need a parent class"
        ],
        answer: 2
    },
    {
        question: "Which of the following is an example of a class name?",
        type: "multiple-choice",
        options: [
            "run()",
            "int",
            "Car",
            "print()"
        ],
        answer: 2
    },
    {
        question: "Which of the following is an example of objects created from the same class?",
        type: "multiple-choice",
        options: [
            "Car, Dog, Door",
            "BMW, Audi, Fiat",
            "String, Integer, Boolean",
            "getData(), setData(), printData()"
        ],
        answer: 1
    },
    {
        question: "What does it mean when behaviors of a class are 'exposed'?",
        type: "multiple-choice",
        options: [
            "All attributes of the class are hidden",
            "Only the implementation details of functions are visible",
            "The behavior (functionality) of a class is accessible, but implementation details are hidden",
            "Objects cannot access class functions"
        ],
        answer: 2
    },

    // Written Questions
    {
        question: "Define a class and explain its purpose in object-oriented programming.",
        type: "written",
        answer: "A class is a template that defines the attributes and methods of an object. It serves as a blueprint for creating multiple objects with shared properties and behaviors."
    },
    {
        question: "Provide an example of a class and explain its key characteristics.",
        type: "written",
        answer: "An example of a class is 'Car'. It has attributes such as 'brand', 'model', and 'color', and behaviors such as 'accelerate()', 'brake()', and 'honk()'. Many objects like BMW, Audi, and Fiat can be created from this class."
    },
    {
        question: "What is the difference between a class and an object?",
        type: "written",
        answer: "A class is a blueprint or template for creating objects, while an object is an instance of a class. For example, 'Car' is a class, and 'myCar = Car('Toyota', 'Red')' is an object."
    },
    {
        question: "Explain the relationship between parent and child classes.",
        type: "written",
        answer: "A parent class provides attributes and behaviors that can be inherited by child (sub-) classes. A child class can extend or override the functionality of the parent class."
    },
    {
        question: "Describe the importance of encapsulation in object-oriented programming.",
        type: "written",
        answer: "Encapsulation restricts direct access to a class’s data and provides controlled access through public methods. This ensures data integrity and prevents unintended modifications."
    },
    {
        question: "How does object-oriented programming allow for code reusability?",
        type: "written",
        answer: "Through inheritance, child classes can reuse attributes and behaviors from a parent class instead of rewriting them, reducing code duplication and improving maintainability."
    },
    {
        question: "What is the difference between a behavior and an attribute in a class?",
        type: "written",
        answer: "An attribute is a variable that holds data (e.g., 'color', 'speed'), while a behavior is a method that performs actions (e.g., 'startEngine()', 'brake()')."
    }
];
const oopPrinciplesQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is the Object-Oriented Paradigm?",
        type: "multiple-choice",
        options: [
            "A method for transforming software requirements into classes",
            "A way to create software without using objects",
            "A programming language used for object-based development",
            "A database management approach"
        ],
        answer: 0
    },
    {
        question: "Which of the following is NOT a principle of the object-oriented paradigm?",
        type: "multiple-choice",
        options: [
            "Abstraction",
            "Encapsulation",
            "Inheritance",
            "Compilation"
        ],
        answer: 3
    },
    {
        question: "What does abstraction in OOP allow programmers to do?",
        type: "multiple-choice",
        options: [
            "Hide unnecessary details and show only relevant features",
            "Restrict access to all attributes of a class",
            "Prevent object inheritance from parent classes",
            "Make all attributes of a class public"
        ],
        answer: 0
    },
    {
        question: "What is encapsulation?",
        type: "multiple-choice",
        options: [
            "The process of combining multiple classes into one",
            "The restriction of direct access to some of an object's components",
            "The ability of an object to take many forms",
            "The process of breaking a class into multiple smaller classes"
        ],
        answer: 1
    },
    {
        question: "Which principle allows a child class to inherit properties from a parent class?",
        type: "multiple-choice",
        options: [
            "Abstraction",
            "Encapsulation",
            "Inheritance",
            "Polymorphism"
        ],
        answer: 2
    },
    {
        question: "What does polymorphism allow objects to do?",
        type: "multiple-choice",
        options: [
            "Change their behavior depending on their context",
            "Prevent inheritance from parent classes",
            "Restrict access to object methods",
            "Store multiple data types in a single variable"
        ],
        answer: 0
    },

    // Written Questions
    {
        question: "Define the Object-Oriented Paradigm and explain its purpose.",
        type: "written",
        answer: "The Object-Oriented Paradigm is a method used to transform software requirements into classes. It helps in organizing software development by structuring programs using objects."
    },
    {
        question: "List and briefly describe the four main principles of Object-Oriented Programming.",
        type: "written",
        answer: "1. **Abstraction**: Hides unnecessary details and exposes only essential features. 2. **Encapsulation**: Protects data by restricting direct access and allowing controlled modifications. 3. **Inheritance**: Allows child classes to inherit properties and methods from parent classes. 4. **Polymorphism**: Enables objects to be used interchangeably based on their behaviors."
    },
    {
        question: "Explain how abstraction improves software development.",
        type: "written",
        answer: "Abstraction simplifies complex systems by allowing developers to work with high-level concepts instead of low-level details. It improves code readability and maintainability."
    },
    {
        question: "Describe encapsulation and its benefits in object-oriented programming.",
        type: "written",
        answer: "Encapsulation restricts direct access to an object's data and allows controlled access through methods. This helps protect data integrity, improve security, and reduce code dependencies."
    },
    {
        question: "Provide an example of how inheritance is used in programming.",
        type: "written",
        answer: "An example of inheritance is a 'Vehicle' class with attributes like speed and color. A 'Car' class can inherit these attributes while adding unique properties like fuel type."
    },
    {
        question: "How does polymorphism enhance flexibility in programming?",
        type: "written",
        answer: "Polymorphism allows a single interface to represent different types, enabling functions to operate on different objects. This improves code reuse and maintainability."
    }
];

const abstractionQuiz = [
    // Multiple-Choice Questions
    {
        question: "What does abstraction do in object-oriented programming?",
        type: "multiple-choice",
        options: [
            "Hides the internal implementation and exposes only the behavior",
            "Allows direct access to all class attributes",
            "Prevents classes from inheriting properties",
            "Makes all variables public for easy debugging"
        ],
        answer: 0
    },
    {
        question: "Which of the following is an example of abstraction?",
        type: "multiple-choice",
        options: [
            "A car engine is visible to the driver when they accelerate",
            "Users can operate a coffee machine without knowing its internal workings",
            "A developer can directly modify all attributes of a class",
            "A program must display all class functions and their internal code"
        ],
        answer: 1
    },
    {
        question: "Which of the following statements is true about abstraction?",
        type: "multiple-choice",
        options: [
            "Abstraction exposes both the implementation and behavior of a function",
            "Abstraction ensures that implementation details remain hidden while only exposing relevant functionality",
            "Abstraction makes it harder to use objects in programming",
            "Abstraction removes the need for encapsulation"
        ],
        answer: 1
    },
    {
        question: "What are the two types of abstraction?",
        type: "multiple-choice",
        options: [
            "Data Abstraction and Function Abstraction",
            "Method Abstraction and Variable Abstraction",
            "Class Abstraction and Object Abstraction",
            "Logical Abstraction and Physical Abstraction"
        ],
        answer: 0
    },
    {
        question: "What does data abstraction focus on?",
        type: "multiple-choice",
        options: [
            "Hiding function code and exposing only function behavior",
            "Hiding variables that store data and exposing only the values",
            "Making all variables visible to all classes",
            "Providing access to private attributes of a class"
        ],
        answer: 1
    },
    {
        question: "What does function abstraction focus on?",
        type: "multiple-choice",
        options: [
            "Hiding variables that store data",
            "Hiding the function code and exposing only function behavior",
            "Ensuring all functions have public access",
            "Removing all functions from a class"
        ],
        answer: 1
    },

    // Written Questions
    {
        question: "Define abstraction in object-oriented programming.",
        type: "written",
        answer: "Abstraction hides the internal implementation details of functions while exposing only the behavior of those functions to other classes."
    },
    {
        question: "Explain the coffee analogy used to describe abstraction.",
        type: "written",
        answer: "The analogy states that when you drink coffee, you don’t ask the barista how it was made; you just drink it. This represents how abstraction hides the implementation details while allowing users to interact with the final result."
    },
    {
        question: "Describe the difference between data abstraction and function abstraction.",
        type: "written",
        answer: "Data abstraction hides the variables that store data and only exposes the values. Function abstraction hides the function code and exposes only the function behavior."
    },
    {
        question: "Why is abstraction useful in software development?",
        type: "written",
        answer: "Abstraction simplifies code by allowing developers to focus on essential features rather than implementation details, improving modularity, readability, and maintainability."
    },
    {
        question: "Provide a real-world example of abstraction in technology.",
        type: "written",
        answer: "A TV remote control provides abstraction by allowing users to change channels without understanding the internal circuitry that makes it work."
    }
];

const encapsulationQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is encapsulation in object-oriented programming?",
        type: "multiple-choice",
        options: [
            "A method to separate classes from each other",
            "A principle that enhances security and performance by reducing object interactions",
            "A technique used only in procedural programming",
            "A way to make all class attributes accessible to external functions"
        ],
        answer: 1,
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "Which of the following best describes how encapsulation improves performance?",
        type: "multiple-choice",
        options: [
            "It allows unrestricted access to object attributes",
            "It minimizes object interactions, reducing runtime overhead",
            "It removes functions from the class to improve efficiency",
            "It ensures all data attributes are accessible globally"
        ],
        answer: 1,
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "What does encapsulation bundle together in a class?",
        type: "multiple-choice",
        options: [
            "Only data attributes (fields)",
            "Only functions (methods)",
            "Data attributes (fields) and the functions that use them",
            "Unrelated pieces of data without any logic"
        ],
        answer: 2,
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "What is the purpose of keeping attributes private in encapsulation?",
        type: "multiple-choice",
        options: [
            "To prevent any access to the attributes",
            "To increase security and control access through methods",
            "To make attributes invisible to the compiler",
            "To reduce the number of functions in the class"
        ],
        answer: 1,
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "Which of the following is an advantage of encapsulation?",
        type: "multiple-choice",
        options: [
            "It allows global access to all class attributes",
            "It increases security by restricting direct access to data",
            "It removes the need for classes in object-oriented programming",
            "It makes objects less reusable"
        ],
        answer: 1,
        image: "/images/encapsulation_diagram.png"
    },

    // Written Questions
    {
        question: "Define encapsulation in object-oriented programming.",
        type: "written",
        answer: "Encapsulation is the principle of bundling data attributes (fields) and the functions that operate on them within the same class while restricting direct access to the data for security and efficiency.",
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "Explain how encapsulation enhances data security.",
        type: "written",
        answer: "Encapsulation hides class attributes from direct access, ensuring that data can only be modified through controlled methods, reducing the risk of unintended changes.",
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "Why does encapsulation improve system performance?",
        type: "written",
        answer: "Encapsulation minimizes unnecessary object interactions at runtime, reducing processing overhead and improving efficiency.",
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "How does encapsulation relate to the quote on the slide: 'Too many object interactions affect the system performance negatively'?",
        type: "written",
        answer: "Encapsulation reduces excessive object interactions by keeping data usage restricted to controlled methods within the class, preventing unnecessary system load.",
        image: "/images/encapsulation_diagram.png"
    },
    {
        question: "Provide a real-world example of encapsulation in technology.",
        type: "written",
        answer: "An ATM machine uses encapsulation by restricting direct access to the internal banking system. Users interact with controlled interfaces (e.g., balance inquiry, withdrawal) without accessing sensitive internal functions.",
        image: "/images/encapsulation_diagram.png"
    }
];

const inheritanceQuiz = [
    // Multiple-Choice Questions
    {
        question: "What does inheritance allow in object-oriented programming?",
        type: "multiple-choice",
        options: [
            "Classes to have private attributes only",
            "Classes to have sub-classes (or children)",
            "Functions to operate independently of objects",
            "Objects to store data without logic"
        ],
        answer: 1,
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "Which of the following is TRUE about inheritance?",
        type: "multiple-choice",
        options: [
            "A parent class can only have one child",
            "A child class cannot inherit attributes from a parent class",
            "A child class can have more than one parent",
            "Inheritance does not allow method overriding"
        ],
        answer: 2,
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "What is an example of inheritance?",
        type: "multiple-choice",
        options: [
            "A Cashier, Manager, and Waiter are all considered a type of Person",
            "A function calling another function",
            "An object storing different types of variables",
            "A program executing multiple scripts independently"
        ],
        answer: 0,
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "What happens when a child class inherits from a parent class?",
        type: "multiple-choice",
        options: [
            "The child class does not gain any properties from the parent",
            "The child class inherits only functions but not attributes",
            "The child class inherits properties (attributes and functions) from the parent class",
            "The parent class loses its properties"
        ],
        answer: 2,
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "What is the purpose of method overriding in inheritance?",
        type: "multiple-choice",
        options: [
            "To prevent child classes from accessing parent methods",
            "To redefine a method in the child class that already exists in the parent class",
            "To make all functions global",
            "To remove functions from the class"
        ],
        answer: 1,
        image: "/images/inheritance_diagram.png"
    },

    // Written Questions
    {
        question: "Define inheritance in object-oriented programming.",
        type: "written",
        answer: "Inheritance is a fundamental principle of object-oriented programming where a child class (sub-class) acquires the properties and behaviors of a parent class (super-class).",
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "Explain the concept of multiple inheritance.",
        type: "written",
        answer: "Multiple inheritance is when a child class inherits attributes and methods from more than one parent class, allowing for more complex relationships between classes.",
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "Describe how method overriding works in inheritance.",
        type: "written",
        answer: "Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class, enabling customization of inherited behavior.",
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "Why is inheritance useful in software development?",
        type: "written",
        answer: "Inheritance promotes code reusability by allowing new classes to derive functionality from existing classes, reducing redundancy and improving maintainability.",
        image: "/images/inheritance_diagram.png"
    },
    {
        question: "Provide a real-world example of inheritance in technology.",
        type: "written",
        answer: "In a banking application, a 'BankAccount' class may serve as a parent class, while 'SavingsAccount' and 'CheckingAccount' classes inherit attributes and methods from it.",
        image: "/images/inheritance_diagram.png"
    }
];
const polymorphismQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is the main idea of polymorphism in object-oriented programming?",
        type: "multiple-choice",
        options: [
            "Allowing objects of different types to be treated as objects of a common parent",
            "Restricting objects to only one type",
            "Forcing objects to have the same attributes",
            "Preventing method overriding in child classes"
        ],
        answer: 0,
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "Which of the following statements about polymorphism is TRUE?",
        type: "multiple-choice",
        options: [
            "Polymorphism prevents objects from inheriting properties",
            "Polymorphism allows multiple object types with the same parent to implement the same function in different ways",
            "Polymorphism means all objects must have unique attributes",
            "Polymorphism is only applicable to primitive data types"
        ],
        answer: 1,
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "What is an example of polymorphism in object-oriented programming?",
        type: "multiple-choice",
        options: [
            "A function that only works with a single object type",
            "A method named `calculateInterest()` that is implemented differently for different account types in a banking application",
            "A class that does not allow method overriding",
            "A variable that stores only integer values"
        ],
        answer: 1,
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "Which of the following best describes method overloading?",
        type: "multiple-choice",
        options: [
            "Using the same function name but with different parameters",
            "Preventing a function from being used more than once",
            "Forcing all functions to have the same parameters",
            "Allowing multiple objects to inherit a function"
        ],
        answer: 0,
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "How does polymorphism improve code flexibility?",
        type: "multiple-choice",
        options: [
            "By allowing the same function name to be used in different ways depending on the object type",
            "By restricting functions to a single behavior",
            "By ensuring that all classes have the same attributes",
            "By removing the need for class inheritance"
        ],
        answer: 0,
        image: "/images/polymorphism_diagram.png"
    },

    // Written Questions
    {
        question: "Define polymorphism in object-oriented programming.",
        type: "written",
        answer: "Polymorphism allows objects of different types to be treated as objects of a common parent, enabling methods to be implemented differently based on the object type.",
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "Explain the difference between method overloading and method overriding in polymorphism.",
        type: "written",
        answer: "Method overloading allows multiple functions with the same name but different parameters, while method overriding allows a child class to modify a method inherited from a parent class.",
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "Describe a real-world example of polymorphism.",
        type: "written",
        answer: "A banking system where `calculateInterest()` is implemented differently for savings accounts, checking accounts, and fixed deposits.",
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "Why is polymorphism considered one of the key strengths of the object-oriented paradigm?",
        type: "written",
        answer: "Polymorphism increases code reusability and flexibility by allowing the same interface to be used for different data types and class structures.",
        image: "/images/polymorphism_diagram.png"
    },
    {
        question: "How does polymorphism relate to inheritance?",
        type: "written",
        answer: "Polymorphism works with inheritance by allowing child classes to override or modify methods from parent classes while maintaining the same interface.",
        image: "/images/polymorphism_diagram.png"
    }
];

const objectOrientedDesignQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is Object-Oriented Design (OOD)?",
        type: "multiple-choice",
        options: [
            "The process of designing software using object-oriented principles",
            "A methodology used only for database design",
            "A programming language used for system modeling",
            "A type of machine learning algorithm"
        ],
        answer: 0,
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "Which of the following is NOT a stage in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "Identifying the classes",
            "Creating UML Use Case diagrams",
            "Identifying attributes and behaviors of classes",
            "Defining relationships between classes"
        ],
        answer: 1,
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "What does Object-Oriented Design (OOD) primarily focus on?",
        type: "multiple-choice",
        options: [
            "Developing software using a structured procedural approach",
            "Designing systems based on objects, their attributes, behaviors, and interactions",
            "Focusing on system deployment and database optimization",
            "Ensuring that software functions without errors"
        ],
        answer: 1,
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "What is an important aspect of Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "Identifying system classes and their relationships",
            "Only writing code without modeling the system",
            "Using global variables to store all attributes",
            "Avoiding encapsulation and inheritance"
        ],
        answer: 0,
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "Which of the following best represents the role of a class diagram in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "A blueprint that models the classes, their attributes, and relationships",
            "A sequence of steps for executing a program",
            "A flowchart used for system testing",
            "A document describing software requirements"
        ],
        answer: 0,
        image: "/images/object_oriented_design_diagram.png"
    },

    // Written Questions
    {
        question: "Define Object-Oriented Design (OOD) and explain its purpose in software development.",
        type: "written",
        answer: "Object-Oriented Design (OOD) is the process of designing a software system using object-oriented principles by identifying classes, attributes, behaviors, and relationships between objects.",
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "Explain the key stages involved in Object-Oriented Design (OOD).",
        type: "written",
        answer: "The key stages of OOD include identifying system classes, defining their attributes and behaviors (fields and functions), and modeling how they interact through relationships.",
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "How does Object-Oriented Design (OOD) help in software development?",
        type: "written",
        answer: "OOD improves modularity, code reusability, and maintainability by structuring software systems into well-defined objects that interact with each other.",
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "Describe the importance of class diagrams in Object-Oriented Design (OOD).",
        type: "written",
        answer: "Class diagrams visually represent the relationships between objects, their attributes, and behaviors, making system design clearer and more structured.",
        image: "/images/object_oriented_design_diagram.png"
    },
    {
        question: "How does Object-Oriented Design (OOD) relate to Object-Oriented Programming (OOP)?",
        type: "written",
        answer: "OOD is the planning and design phase of Object-Oriented Programming, focusing on structuring the system before coding begins.",
        image: "/images/object_oriented_design_diagram.png"
    }
];
const identifyClassesQuiz = [
    // Multiple-Choice Questions
    {
        question: "How are classes derived in an object-oriented system?",
        type: "multiple-choice",
        options: [
            "From random system components",
            "From use cases and actors described in the requirement analysis process",
            "By copying existing functions",
            "By choosing random names for system objects"
        ],
        answer: 1,
        image: "/images/identify_classes.png"
    },
    {
        question: "Why is it important to identify classes correctly in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "To reduce coupling and enable extensibility",
            "To make the program run faster",
            "To avoid using functions",
            "To remove the need for object interactions"
        ],
        answer: 0,
        image: "/images/identify_classes.png"
    },
    {
        question: "Which of the following is a correct naming convention for classes in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "Using all lowercase letters",
            "Starting with an uppercase letter (e.g., Bank)",
            "Using numbers in place of words",
            "Starting with a special character"
        ],
        answer: 1,
        image: "/images/identify_classes.png"
    },
    {
        question: "Which of the following statements is NOT true about identifying classes?",
        type: "multiple-choice",
        options: [
            "A class name should always be a noun",
            "A class should be identified based on system needs",
            "A class can only have one function",
            "Classes allow extensibility and better software design"
        ],
        answer: 2,
        image: "/images/identify_classes.png"
    },
    {
        question: "What is the relationship between client and supplier classes?",
        type: "multiple-choice",
        options: [
            "The client class depends on the supplier class",
            "The supplier class removes functions from the client",
            "Both classes operate independently",
            "Client and supplier classes cannot interact"
        ],
        answer: 0,
        image: "/images/identify_classes.png"
    },

    // Written Questions
    {
        question: "Explain how classes are derived in Object-Oriented Design and why they are important.",
        type: "written",
        answer: "Classes are derived from use cases and actors in requirement analysis. They are crucial for structuring an object-oriented system and improving modularity and maintainability.",
        image: "/images/identify_classes.png"
    },
    {
        question: "Describe the best practices for naming a class in Object-Oriented Design.",
        type: "written",
        answer: "A class name should be a noun and start with an uppercase letter (e.g., Bank). If it consists of multiple words, each word should also begin with an uppercase letter (e.g., CreditCard).",
        image: "/images/identify_classes.png"
    },
    {
        question: "Why is identifying class attributes (fields) and functions necessary when defining a class?",
        type: "written",
        answer: "Identifying attributes and functions ensures that a class has a clear purpose and properly interacts with other classes in an object-oriented system.",
        image: "/images/identify_classes.png"
    },
    {
        question: "Explain the relationship between client and supplier classes with an example.",
        type: "written",
        answer: "A client class depends on a supplier class for functionality. For example, a Customer class can initiate a deposit, but the Account class contains the deposit function.",
        image: "/images/identify_classes.png"
    },
    {
        question: "How does identifying classes correctly impact software maintainability and scalability?",
        type: "written",
        answer: "Correctly identifying classes reduces system complexity, enhances modularity, and allows for easy modifications and extensions.",
        image: "/images/identify_classes.png"
    }
];

const classDiagramQuiz = [
    // Multiple-Choice Questions
    {
        question: "What is the purpose of a class diagram in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "To visually represent the object-oriented software system",
            "To generate random system components",
            "To define the color scheme of an application",
            "To store and execute SQL queries"
        ],
        answer: 0,
        image: "/images/class_diagram.png"
    },
    {
        question: "Which elements are included in a class diagram?",
        type: "multiple-choice",
        options: [
            "Classes with attributes and operations",
            "Only functions without attributes",
            "Only attributes without functions",
            "Standalone methods without any relationships"
        ],
        answer: 0,
        image: "/images/class_diagram.png"
    },
    {
        question: "How does a class diagram help in software development?",
        type: "multiple-choice",
        options: [
            "It provides a plan to construct executable code and define object interactions",
            "It eliminates the need for object relationships",
            "It makes programming languages obsolete",
            "It only represents data flow without considering relationships"
        ],
        answer: 0,
        image: "/images/class_diagram.png"
    },
    {
        question: "Which UML diagram is used to describe object attributes and relationships?",
        type: "multiple-choice",
        options: [
            "Sequence Diagram",
            "Use Case Diagram",
            "Class Diagram",
            "Flowchart"
        ],
        answer: 2,
        image: "/images/class_diagram.png"
    },
    {
        question: "Which of the following statements is NOT true about a class diagram?",
        type: "multiple-choice",
        options: [
            "It helps define how objects interact with each other",
            "It describes attributes and operations of a class",
            "It is used only for databases and not for coding",
            "It represents dependencies and relationships between objects"
        ],
        answer: 2,
        image: "/images/class_diagram.png"
    },

    // Written Questions
    {
        question: "Explain the purpose of a class diagram in Object-Oriented Design.",
        type: "written",
        answer: "A class diagram is a UML representation of an object-oriented software system. It visually describes attributes, operations, and object relationships to aid software development.",
        image: "/images/class_diagram.png"
    },
    {
        question: "What are the key components of a class diagram?",
        type: "written",
        answer: "A class diagram consists of classes, attributes, operations, and relationships between objects.",
        image: "/images/class_diagram.png"
    },
    {
        question: "How does a class diagram describe constraints in a system?",
        type: "written",
        answer: "Class diagrams define system constraints through object dependencies and relationships, ensuring proper interactions between components.",
        image: "/images/class_diagram.png"
    },
    {
        question: "Describe how a class diagram can be used as a plan for constructing executable code.",
        type: "written",
        answer: "By defining class structures, attributes, and methods, a class diagram provides a blueprint for writing structured, maintainable code.",
        image: "/images/class_diagram.png"
    },
    {
        question: "Why is a class diagram important in object-oriented programming?",
        type: "written",
        answer: "It helps developers understand object interactions, design reusable components, and define relationships between system entities.",
        image: "/images/class_diagram.png"
    }
];

const associationsQuiz = [
    // Multiple-Choice Questions
    {
        question: "What does an association represent in Object-Oriented Design?",
        type: "multiple-choice",
        options: [
            "A standalone class with no relationships",
            "A relationship between classes of objects indicating a meaningful connection",
            "A function inside a class",
            "An unrelated database entity"
        ],
        answer: 1,
        image: "/images/associations.png"
    },
    {
        question: "Which of the following is NOT a label of an association?",
        type: "multiple-choice",
        options: [
            "Association name",
            "Role name",
            "Data type",
            "Multiplicity"
        ],
        answer: 2,
        image: "/images/associations.png"
    },
    {
        question: "What does the term 'Multiplicity' refer to in an association?",
        type: "multiple-choice",
        options: [
            "The number of instances of one class related to another class",
            "The speed of execution in an object-oriented system",
            "The type of data stored in a class",
            "The visual representation of an object"
        ],
        answer: 0,
        image: "/images/associations.png"
    },
    {
        question: "In an association diagram, what does 'Navigability' indicate?",
        type: "multiple-choice",
        options: [
            "The direction in which one class can access another",
            "The color scheme of the diagram",
            "The size of the classes",
            "The number of functions inside a class"
        ],
        answer: 0,
        image: "/images/associations.png"
    },
    {
        question: "What is the role of an 'Association Name' in a UML diagram?",
        type: "multiple-choice",
        options: [
            "To describe the relationship between two objects",
            "To specify the size of a class",
            "To define the object properties",
            "To determine the color of the UML diagram"
        ],
        answer: 0,
        image: "/images/associations.png"
    },

    // Written Questions
    {
        question: "Explain what an association is in Object-Oriented Design.",
        type: "written",
        answer: "An association represents a relationship between classes that indicates how objects interact with each other.",
        image: "/images/associations.png"
    },
    {
        question: "List and describe the four labels of an association.",
        type: "written",
        answer: "1. Association Name: Describes the relationship. 2. Role Name: Defines the role of the associated classes. 3. Multiplicity: Defines how many instances of a class relate to another class. 4. Navigability: Shows the direction in which one class can access another.",
        image: "/images/associations.png"
    },
    {
        question: "What does the term 'Role Name' mean in an association diagram?",
        type: "written",
        answer: "The role name specifies the function of each class in the relationship, clarifying the interaction between objects.",
        image: "/images/associations.png"
    },
    {
        question: "How does 'Navigability' affect object interactions in a class diagram?",
        type: "written",
        answer: "Navigability defines which class can access the other in an association, affecting data flow and system design.",
        image: "/images/associations.png"
    },
    {
        question: "Provide an example of an association in a real-world system.",
        type: "written",
        answer: "Example: In an e-commerce system, a 'Customer' class is associated with an 'Order' class, where a customer can place multiple orders.",
        image: "/images/associations.png"
    }
];

export default classesAndObjectsQuiz;
