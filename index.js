// Define a variable called userName that is set to an empty string.
let userName = ''; // User can enter their name here

// Create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create a variable named userQuestion.
let userQuestion = 'Am I a millionare?'; // Replace with your question

// Log the user's question to the console.
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

// Generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// Create a variable named eightBall and set it equal to an empty string.
let eightBall = '';

// Create a control flow that assigns eightBall to a reply based on randomNumber.
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error: Try again';
    break;
}

// Print the Magic Eight Ball's answer.
console.log(`The Magic Eight Ball says: ${eightBall}`);
