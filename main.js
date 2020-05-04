const BLACKLISTED_KEY_CODES = [ 38 ];

const COMMANDS = {
  hello:
    'Hello! Please enter one of the following supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>My name is William Kistler. I am a PhD fellow in Neuroscience with the NIH and UCL Institute of Neurology, currently living in Bethesda, Maryland. I have a passion for translational neuroscience and understanding how our results can be used for rehabilitation practices post-stroke. Outside of research, you can find me watching a good film!",
  skills:
    '<span class="code">Languages:</span> Python, R, Matlab<br><span class="code">Technologies:</span> EEG, MEG<br><span class="code">Frameworks:</span> DeepLabCut',
  education:
    "PhD, Neuroscience, University College London<br>MA, Communications, American University<br>BS, Psychology, University of Maryland",
  resume: "<a href='./cv.pdf' class='success link'>cv.pdf</a>",
  experience: "Plenty!",
  contact:
    "You can contact me on either of the following links:<br><a href='https://www.linkedin.com/in/william-david-kistler/' class='success link'>Linkedin</a> , <a href='https://twitter.com/wi11iamk' class='success link'>Twitter</a><br>Additionally, please feel free to e-mail me:<br><a href='mailto:william.kistler@nih.gov' class='success link'>williamdkistler at gmail.com </a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
