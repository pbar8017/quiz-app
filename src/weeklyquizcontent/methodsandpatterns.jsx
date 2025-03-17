const methodsQuizQuestions = [
    {
        question: "What is a method?",
        type: "multiple-choice",
        options: [
            "A block of code grouped together with a name",
            "A variable that stores data",
            "A type of class in Java",
            "A type of function unique to Python"
        ],
        answer: 0
    },
    {
        question: "How can a method be invoked?",
        type: "multiple-choice",
        options: [
            "By assigning it to a variable",
            "By using its name",
            "By creating a new class",
            "By using the main method"
        ],
        answer: 1
    },
    {
        question: "In Java, where must a method be defined?",
        type: "multiple-choice",
        options: ["Inside a function", "Inside a class", "Inside an if statement", "Inside a comment"],
        answer: 1
    },
    {
        question: "In Python, what keyword is used to define a method?",
        type: "multiple-choice",
        options: ["method", "define", "def", "func"],
        answer: 2
    },
    {
        question: "What does a method modifier do in Java?",
        type: "multiple-choice",
        options: [
            "Indicates how the method can be invoked",
            "Changes the return type of the method",
            "Modifies a variable inside the method",
            "Controls how loops work inside a method"
        ],
        answer: 0
    },
    {
        question: "What can methods have that represent values needed for execution?",
        type: "multiple-choice",
        options: ["Classes", "Parameters", "Loops", "Print statements"],
        answer: 1
    },
    {
        question: "What is the return type of a method?",
        type: "multiple-choice",
        options: [
            "The method’s name",
            "A class name",
            "The data type the method returns or void if it returns nothing",
            "The number of times the method runs"
        ],
        answer: 2
    },
    {
        question: "What is the correct Java method syntax?",
        type: "multiple-choice",
        options: [
            "<modifier> <return-type> <name>(<parameters>) { <Java code block>; }",
            "def <name>(<parameters>) { <Java code block>; }",
            "method <name>(<parameters>) { <Java code block>; }",
            "function <name>(<parameters>) { <Java code block>; }"
        ],
        answer: 0
    },
    {
        question: "What is the correct Python method syntax?",
        type: "multiple-choice",
        options: [
            "<modifier> <return-type> <name>(<parameters>) { <Python code block> }",
            "def <name>(<parameters>) : <Python code block>",
            "method <name>(<parameters>) { <Python code block> }",
            "function <name>(<parameters>) { <Python code block> }"
        ],
        answer: 1
    },
    {
        question: "In the Java example provided, what does the move method do?",
        type: "multiple-choice",
        options: [
            "Prints a statement",
            "Changes the pos variable by adding distance to it",
            "Decreases the value of pos",
            "Returns a boolean value"
        ],
        answer: 1
    },
    {
        question: "Define a method in your own words.",
        type: "written",
        answer: ""
    },
    {
        question: "What are some key differences between methods in Java and Python?",
        type: "written",
        answer: ""
    },
    {
        question: "How does a method help in programming?",
        type: "written",
        answer: ""
    },
    {
        question: "Explain the difference between a method that returns a value and one that is void.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Java method that calculates the square of a number.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Python method that checks if a number is even or odd.",
        type: "written",
        answer: ""
    },
    {
        question: "Why does Java require methods to be inside a class, while Python allows them to exist independently?",
        type: "written",
        answer: ""
    },
    {
        question: "What are parameters in a method, and why are they useful?",
        type: "written",
        answer: ""
    },
    {
        question: "What is the significance of the def keyword in Python?",
        type: "written",
        answer: ""
    },
    {
        question: "How would you modify a Java method to ensure only certain parts of a program can access it?",
        type: "written",
        answer: ""
    }
];

const functionsVsProceduresQuiz = [
    {
        question: "What is a procedure?",
        type: "multiple-choice",
        options: [
            "A method that returns a value",
            "A method that has no return value but performs an action",
            "A variable inside a function",
            "A type of function unique to Python"
        ],
        answer: 1
    },
    {
        question: "What is a function?",
        type: "multiple-choice",
        options: [
            "A method that has a return type but does not perform an action",
            "A method that always prints a value",
            "A loop inside a method",
            "A method that has no return value"
        ],
        answer: 0
    },
    {
        question: "How are procedure names typically structured?",
        type: "multiple-choice",
        options: [
            "As nouns that describe the returned value",
            "As numbers",
            "As verbs that describe the goal of the procedure",
            "As random characters"
        ],
        answer: 2
    },
    {
        question: "How are function names typically structured?",
        type: "multiple-choice",
        options: [
            "As verbs that describe the action",
            "As numbers",
            "As adjectives",
            "As nouns that describe the returned value"
        ],
        answer: 3
    },
    {
        question: "Which keyword is used in Java to define a procedure?",
        type: "multiple-choice",
        options: ["return", "def", "void", "function"],
        answer: 2
    },
    {
        question: "Which keyword is used in Python to define a procedure?",
        type: "multiple-choice",
        options: ["void", "return", "def", "method"],
        answer: 2
    },
    {
        question: "What is the key difference between a function and a procedure?",
        type: "multiple-choice",
        options: [
            "A function has a return value, a procedure does not",
            "A function performs an action, a procedure does not",
            "A function is a type of procedure",
            "There is no difference"
        ],
        answer: 0
    },
    {
        question: "What does a Java function require that a procedure does not?",
        type: "multiple-choice",
        options: ["A loop", "A return statement", "A class", "A print statement"],
        answer: 1
    },
    {
        question: "What does a Python function require that a procedure does not?",
        type: "multiple-choice",
        options: ["A return statement", "A variable", "A loop", "A print statement"],
        answer: 0
    },
    {
        question: "What is recommended to avoid when writing functions?",
        type: "multiple-choice",
        options: [
            "Using return statements",
            "Having side effects",
            "Using variables",
            "Using parameters"
        ],
        answer: 1
    },
    {
        question: "Define a procedure in your own words.",
        type: "written",
        answer: ""
    },
    {
        question: "Define a function in your own words.",
        type: "written",
        answer: ""
    },
    {
        question: "What are some key differences between functions and procedures?",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Java procedure that prints 'Hello, World!'.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Java function that calculates the area of a circle.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Python procedure that prints 'Hello, World!'.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a simple Python function that calculates the area of a triangle.",
        type: "written",
        answer: ""
    },
    {
        question: "Why should functions avoid side effects?",
        type: "written",
        answer: ""
    },
    {
        question: "Provide an example where a function and a procedure work together.",
        type: "written",
        answer: ""
    }
];

const methodOverloadingQuiz = [
    {
        question: "What is method overloading?",
        type: "multiple-choice",
        options: [
            "A method having multiple names in the same class",
            "A method with the same name but different parameters in the same class",
            "A method that replaces another method in Python",
            "A method that can only take string arguments"
        ],
        answer: 1
    },
    {
        question: "Which language supports method overloading?",
        type: "multiple-choice",
        options: ["Java", "Python", "Both Java and Python", "Neither"],
        answer: 0
    },
    {
        question: "What happens if you define multiple methods with the same name in Python?",
        type: "multiple-choice",
        options: [
            "The last method overrides the previous ones",
            "All methods will work separately",
            "Python automatically combines them",
            "An error occurs"
        ],
        answer: 0
    },
    {
        question: "What is a method signature?",
        type: "multiple-choice",
        options: [
            "The name of the method only",
            "The method name along with the number and types of its parameters",
            "The order of arguments passed to a method",
            "A comment describing the method"
        ],
        answer: 1
    },
    {
        question: "What is an argument in a method?",
        type: "multiple-choice",
        options: [
            "A placeholder variable used in method definition",
            "A data value passed to a method when it is invoked",
            "A method signature",
            "A return value of a method"
        ],
        answer: 1
    },
    {
        question: "Which of the following statements is true?",
        type: "multiple-choice",
        options: [
            "Java allows method overloading by defining multiple methods with the same name but different parameters",
            "Python allows method overloading just like Java",
            "Both Java and Python support method overloading in the same way",
            "Java does not allow method overloading"
        ],
        answer: 0
    },
    {
        question: "What is the main purpose of method overloading?",
        type: "multiple-choice",
        options: [
            "To allow a method to accept different sets of parameters",
            "To allow multiple classes to have the same method",
            "To replace one method with another",
            "To execute a method without calling it"
        ],
        answer: 0
    },
    {
        question: "What is the output of the Java method `move(5, 2)` in the provided example?",
        type: "multiple-choice",
        options: ["pos += 5", "pos += 5 * 2", "pos += 2", "Error"],
        answer: 1
    },
    {
        question: "How does the Python `add` function differentiate between integers and strings?",
        type: "multiple-choice",
        options: [
            "By checking the number of arguments",
            "By using the `match` statement to determine data type",
            "By automatically converting values",
            "By storing previous method calls"
        ],
        answer: 1
    },
    {
        question: "What happens when calling `add('str', 'Hi ', 'Geeks')` in Python?",
        type: "multiple-choice",
        options: ["'Hi Geeks' is printed", "An error occurs", "It returns a tuple", "The function does nothing"],
        answer: 0
    },
    {
        question: "Define method overloading in your own words.",
        type: "written",
        answer: ""
    },
    {
        question: "What are the advantages of method overloading in Java?",
        type: "written",
        answer: ""
    },
    {
        question: "Why does Python not support traditional method overloading?",
        type: "written",
        answer: ""
    },
    {
        question: "Write a Java method with two overloaded versions: one that accepts an integer and another that accepts two integers.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a Python function that mimics method overloading using conditional checks on argument types.",
        type: "written",
        answer: ""
    },
    {
        question: "What is a method signature, and why is it important?",
        type: "written",
        answer: ""
    },
    {
        question: "Explain the difference between parameters and arguments in methods.",
        type: "written",
        answer: ""
    }
];

const methodsPatternsQuiz = [
    {
        question: "What are coding patterns?",
        type: "multiple-choice",
        options: [
            "Recognized techniques used to solve common problems",
            "A type of method used in Python",
            "A way to print statements",
            "A type of programming language"
        ],
        answer: 0
    },
    {
        question: "What does the read pattern do?",
        type: "multiple-choice",
        options: [
            "Prints data to the console",
            "Prompts the user for input and returns the value",
            "Stores data in a file",
            "Loops through an array"
        ],
        answer: 1
    },
    {
        question: "How does the read-loop pattern work?",
        type: "multiple-choice",
        options: [
            "It reads user input once and stops",
            "It repeatedly reads user input until a condition is met",
            "It loops through an array",
            "It prints numbers to the console"
        ],
        answer: 1
    },
    {
        question: "Which pattern is best used for iterating over arrays in Java?",
        type: "multiple-choice",
        options: [
            "The read-loop pattern",
            "The any-pattern",
            "The for-each loop",
            "The read pattern"
        ],
        answer: 2
    },
    {
        question: "What does the any-pattern check for?",
        type: "multiple-choice",
        options: [
            "If all elements meet a condition",
            "If at least one element meets a condition",
            "If no elements meet a condition",
            "If a loop runs correctly"
        ],
        answer: 1
    },
    {
        question: "What does the every-pattern check for?",
        type: "multiple-choice",
        options: [
            "If all elements meet a condition",
            "If at least one element meets a condition",
            "If no elements meet a condition",
            "If a loop runs correctly"
        ],
        answer: 0
    },
    {
        question: "What does the none-pattern check for?",
        type: "multiple-choice",
        options: [
            "If no elements meet a condition",
            "If all elements meet a condition",
            "If at least one element meets a condition",
            "If a loop runs correctly"
        ],
        answer: 0
    },
    {
        question: "Which programming languages support the for-each loop?",
        type: "multiple-choice",
        options: ["Java only", "Python only", "Both Java and Python", "Neither"],
        answer: 2
    },
    {
        question: "Write a Java function using the read pattern.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a Python function using the read-loop pattern.",
        type: "written",
        answer: ""
    },
    {
        question: "Explain how the any-pattern works in Java and Python.",
        type: "written",
        answer: ""
    },
    {
        question: "Why is the for-each loop useful in programming?",
        type: "written",
        answer: ""
    },
    {
        question: "Write a Java function that checks if all numbers in an array are positive using the every-pattern.",
        type: "written",
        answer: ""
    },
    {
        question: "Write a Python function that verifies if none of the elements in a list are negative using the none-pattern.",
        type: "written",
        answer: ""
    },

    {
        question: "What is a method?",
        type: "multiple-choice",
        options: [
            "A block of code grouped together with a name",
            "A variable that stores data",
            "A type of class in Java",
            "A type of function unique to Python"
        ],
        answer: 0
    },
    {
        question: "How can a method be invoked?",
        type: "multiple-choice",
        options: [
            "By assigning it to a variable",
            "By using its name",
            "By creating a new class",
            "By using the main method"
        ],
        answer: 1
    },
    {
        question: "In Java, where must a method be defined?",
        type: "multiple-choice",
        options: ["Inside a function", "Inside a class", "Inside an if statement", "Inside a comment"],
        answer: 1
    },
    {
        question: "In Python, what keyword is used to define a method?",
        type: "multiple-choice",
        options: ["method", "define", "def", "func"],
        answer: 2
    },
    {
        question: "What does a method modifier do in Java?",
        type: "multiple-choice",
        options: [
            "Indicates how the method can be invoked",
            "Changes the return type of the method",
            "Modifies a variable inside the method",
            "Controls how loops work inside a method"
        ],
        answer: 0
    },
    {
        question: "What can methods have that represent values needed for execution?",
        type: "multiple-choice",
        options: ["Classes", "Parameters", "Loops", "Print statements"],
        answer: 1
    },
    {
        question: "What is the return type of a method?",
        type: "multiple-choice",
        options: [
            "The method’s name",
            "A class name",
            "The data type the method returns or void if it returns nothing",
            "The number of times the method runs"
        ],
        answer: 2
    },
    {
        question: "What is the correct Java method syntax?",
        type: "multiple-choice",
        options: [
            "<modifier> <return-type> <name>(<parameters>) { <Java code block>; }",
            "def <name>(<parameters>) { <Java code block>; }",
            "method <name>(<parameters>) { <Java code block>; }",
            "function <name>(<parameters>) { <Java code block>; }"
        ],
        answer: 0
    },
    {
        question: "What is the correct Python method syntax?",
        type: "multiple-choice",
        options: [
            "<modifier> <return-type> <name>(<parameters>) { <Python code block> }",
            "def <name>(<parameters>) : <Python code block>",
            "method <name>(<parameters>) { <Python code block> }",
            "function <name>(<parameters>) { <Python code block> }"
        ],
        answer: 1
    },
    {
        question: "In the Java example provided, what does the move method do?",
        type: "multiple-choice",
        options: [
            "Prints a statement",
            "Changes the pos variable by adding distance to it",
            "Decreases the value of pos",
            "Returns a boolean value"
        ],
        answer: 1
    },
    {
        question: "Write a simple Java method that calculates the square of a number.",
        type: "written",
        answer: "public int square(int num) { return num * num; }"
    },
    {
        question: "Write a simple Python method that checks if a number is even or odd.",
        type: "written",
        answer: "def is_even(num): return num % 2 == 0"
    },
    {
        question: "How would you modify a Java method to ensure only certain parts of a program can access it?",
        type: "written",
        answer: "Use access modifiers like private, protected, or public to control method accessibility."
    }
];


const recursiveMethodsQuiz = [
    {
        question: "What is recursion in programming?",
        type: "multiple-choice",
        options: [
            "A technique where a method calls itself repeatedly",
            "A function that calls another function",
            "A loop that repeats indefinitely",
            "A way to store values in an array"
        ],
        answer: 0
    },
    {
        question: "What must a recursive method include to avoid infinite execution?",
        type: "multiple-choice",
        options: [
            "A loop",
            "A termination condition",
            "An array",
            "A print statement"
        ],
        answer: 1
    },
    {
        question: "What does the Java recursive method `sum(n)` compute?",
        type: "multiple-choice",
        options: [
            "Factorial of n",
            "Sum of numbers from n to 0",
            "Sum of even numbers up to n",
            "Number of digits in n"
        ],
        answer: 1
    },
    {
        question: "What is the base case for the factorial function in Python?",
        type: "multiple-choice",
        options: [
            "n == 1 or n == 0",
            "n > 0",
            "n == -1",
            "n % 2 == 0"
        ],
        answer: 0
    },
    {
        question: "What is the primary benefit of using recursion?",
        type: "multiple-choice",
        options: [
            "It reduces code readability",
            "It replaces loops and simplifies certain problems",
            "It runs faster than any loop",
            "It uses less memory"
        ],
        answer: 1
    },
    {
        question: "Write a Java recursive function to calculate the factorial of a number.",
        type: "written",
        answer: "public int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n - 1); }"
    },
    {
        question: "Write a Python recursive function to calculate the sum of numbers from n to 0.",
        type: "written",
        answer: "def sum_n(n): return n + sum_n(n-1) if n > 0 else 0"
    },
    {
        question: "Explain why a termination condition is necessary in recursion.",
        type: "written",
        answer: "A termination condition is required to prevent infinite recursion, which can cause stack overflow and crash the program."
    },
    {
        question: "Write a Java function that checks if a number is prime.",
        type: "written",
        answer: "public boolean isPrime(int number) { for (int i = 2; i < number; i++) if (number % i == 0) return false; return true; }"
    },
    {
        question: "Describe the 'Break it down - Build it up' technique with an example.",
        type: "written",
        answer: "The 'Break it down - Build it up' technique divides a complex problem into smaller tasks. For example, to count prime numbers in an array, we first write a function to check if a number is prime, then use it in another function to count the primes."
    }
];

const recursiveMethodsQuiz = [
    {
        question: "What is recursion in programming?",
        type: "multiple-choice",
        options: [
            "A technique where a method calls itself repeatedly",
            "A function that calls another function",
            "A loop that repeats indefinitely",
            "A way to store values in an array"
        ],
        answer: 0
    },
    {
        question: "What must a recursive method include to avoid infinite execution?",
        type: "multiple-choice",
        options: [
            "A loop",
            "A termination condition",
            "An array",
            "A print statement"
        ],
        answer: 1
    },
    {
        question: "What does the Java recursive method `sum(n)` compute?",
        type: "multiple-choice",
        options: [
            "Factorial of n",
            "Sum of numbers from n to 0",
            "Sum of even numbers up to n",
            "Number of digits in n"
        ],
        answer: 1
    },
    {
        question: "What is the base case for the factorial function in Python?",
        type: "multiple-choice",
        options: [
            "n == 1 or n == 0",
            "n > 0",
            "n == -1",
            "n % 2 == 0"
        ],
        answer: 0
    },
    {
        question: "What is the primary benefit of using recursion?",
        type: "multiple-choice",
        options: [
            "It reduces code readability",
            "It replaces loops and simplifies certain problems",
            "It runs faster than any loop",
            "It uses less memory"
        ],
        answer: 1
    },
    {
        question: "What is a process in programming?",
        type: "multiple-choice",
        options: [
            "A structured approach to solving a problem",
            "A loop inside a function",
            "A method that always returns a string",
            "A way to store arrays"
        ],
        answer: 0
    },
    {
        question: "What is the 'Break it down - Build it up' technique?",
        type: "multiple-choice",
        options: [
            "A debugging strategy",
            "A structured approach to handle complex problems",
            "A way to remove loops from programs",
            "A method to optimize memory usage"
        ],
        answer: 1
    },
    {
        question: "In the example, what is the purpose of the `isPrime` function?",
        type: "multiple-choice",
        options: [
            "To count prime numbers in an array",
            "To check if a number is prime",
            "To store prime numbers",
            "To remove non-prime numbers"
        ],
        answer: 1
    },
    {
        question: "What does the `primeCount` function do?",
        type: "multiple-choice",
        options: [
            "Returns an array of prime numbers",
            "Counts the number of prime numbers in an array",
            "Removes non-prime numbers",
            "Checks if all numbers are prime"
        ],
        answer: 1
    },
    {
        question: "What pattern is used to ensure a number is prime?",
        type: "multiple-choice",
        options: [
            "Every-pattern",
            "None-pattern",
            "For-loop",
            "Sum-pattern"
        ],
        answer: 1
    },
    {
        question: "Write a Java recursive function to calculate the factorial of a number.",
        type: "written",
        answer: "public int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n - 1); }"
    },
    {
        question: "Write a Python recursive function to calculate the sum of numbers from n to 0.",
        type: "written",
        answer: "def sum_n(n): return n + sum_n(n-1) if n > 0 else 0"
    },
    {
        question: "Explain why a termination condition is necessary in recursion.",
        type: "written",
        answer: "A termination condition is required to prevent infinite recursion, which can cause stack overflow and crash the program."
    },
    {
        question: "Write a Java function that checks if a number is prime.",
        type: "written",
        answer: "public boolean isPrime(int number) { for (int i = 2; i < number; i++) if (number % i == 0) return false; return true; }"
    },
    {
        question: "Describe the 'Break it down - Build it up' technique with an example.",
        type: "written",
        answer: "The 'Break it down - Build it up' technique divides a complex problem into smaller tasks. For example, to count prime numbers in an array, we first write a function to check if a number is prime, then use it in another function to count the primes."
    }
];
export default methodsQuizQuestions;
