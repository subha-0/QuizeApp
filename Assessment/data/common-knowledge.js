const quizData = {
  title: "Computer Science and Engineering Quiz"
};

const questions = [
  {
    text: "What does the acronym CSS stand for?",
    type: "mc",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style System", correct: false },
      { text: "Creative Style Solutions", correct: false },
      { text: "Code Style Syntax", correct: false }
    ]
  },
  {
    text: "In computer science, what is the purpose of an algorithm?",
    type: "mc",
    answers: [
      { text: "To organize data in a database", correct: false },
      { text: "To automate repetitive tasks", correct: false },
      { text: "To solve a specific problem using a series of steps", correct: true },
      { text: "To create user interfaces", correct: false }
    ]
  },
  {
    text: "Which programming language is primarily used for developing Android applications?",
    type: "mc",
    answers: [
      { text: "Swift", correct: false },
      { text: "Java", correct: true },
      { text: "C#", correct: false },
      { text: "Python", correct: false }
    ]
  },
  {
    text: "What is the purpose of a DDoS attack?",
    type: "mc",
    answers: [
      { text: "To encrypt sensitive data", correct: false },
      { text: "To detect vulnerabilities in a system", correct: false },
      { text: "To overload a server with excessive traffic", correct: true },
      { text: "To create a secure connection", correct: false }
    ]
  },
  {
    text: "Which data structure is used to implement recursion?",
    type: "mc",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Tree", correct: false },
      { text: "LinkedList", correct: false }
    ]
  },
  {
    text: "In networking, what does the acronym LAN stand for?",
    type: "mc",
    answers: [
      { text: "Local Area Network", correct: true },
      { text: "Large Area Network", correct: false },
      { text: "Logical Access Node", correct: false },
      { text: "Linear Algebraic Network", correct: false }
    ]
  },
  {
    text: "Which encryption algorithm is commonly used for securing internet communication?",
    type: "mc",
    answers: [
      { text: "AES", correct: true },
      { text: "DES", correct: false },
      { text: "RSA", correct: false },
      { text: "MD5", correct: false }
    ]
  },
  {
    text: "What is the primary function of the BIOS in a computer?",
    type: "mc",
    answers: [
      { text: "Managing file systems", correct: false },
      { text: "Providing a user interface", correct: false },
      { text: "Booting the operating system", correct: true },
      { text: "Executing application programs", correct: false }
    ]
  },
  {
    text: "Which of the following is a high-level programming language?",
    type: "mc",
    answers: [
      { text: "Assembly", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: true },
      { text: "Machine Code", correct: false }
    ]
  },
  {
    text: "What is the purpose of a VPN (Virtual Private Network)?",
    type: "mc",
    answers: [
      { text: "To provide a faster internet connection", correct: false },
      { text: "To encrypt data for secure communication over a network", correct: true },
      { text: "To manage network hardware", correct: false },
      { text: "To host websites", correct: false }
    ]
  },
  // Add more questions as needed
];

module.exports = { quizData, questions };
