document.addEventListener('DOMContentLoaded', function() {

  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault();
    checkWord();
    window.scrollTo(0,150);
  }

  document.getElementById('terminalTextInput').focus();

  var textInputValue = document.getElementById('terminalTextInput').value.trim();
  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }

  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  scrollToBottomOfResults();

  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }

  var postHelpList = function(){
    var helpKeyWords = [
      "- 'About' will briefly introduce me and my work",
      "- 'Education' will list my degrees, the focus of each, and from which University they were conferred",
      "- 'Skills' will describe which methods I have used for my work",
      "- 'Work' will list my current projects, their ratioinales and details",
      "- 'Contact' will point you to ways to reach out",
      "- Open + website URL to open it in the browser (ex. open reddit.com)",
      "- Google + keyword to search directly in Google (ex. google adventure time)",
      "- YouTube + keyword to search directly in YouTube (ex. youtube not like us)",
      "* There are more keywords that you have to discover by yourself."
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }

  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    var dateMonth = timeAndDate.getMonth() + 1;
    var dateYear = timeAndDate.getFullYear();

    if (timeHours < 10){ timeHours = "0" + timeHours; }
    if (timeMinutes < 10){ timeMinutes = "0" + timeMinutes; }

    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }

  function executeCommand(command) {
    textInputValueLowerCase = command.toLowerCase();
    textReplies();
  }

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  var viewingProjects = false;
  var viewingProjectDetails = false;
  const projects = [
    { name: "Stella", description: "A clinical phenotyping pipeline using SimCLR, UMAP, and HDBSCAN. Please see the GitHub <a target = _blank href = 'https://github.com/wi11iamk/Stella' >repo</a> for more information." },
    { name: "Lucy", description: "A conversational AI companion to help dementia patients feel more connected while giving caregivers tools to track changes in communication patterns. Lucy is built to: engage in clear, simple, and supportive conversations; track changes in speech patterns over time; prevent misaligned AI responses using context-aware filtering; block adversarial attacks that attempt to bypass safety features; protect patient data with encryption and role-based access control (RBAC). Please see the GitHub <a target = _blank href = 'https://github.com/wi11iamk/Lucy' >repo</a> for more information." },
    { name: "Juno", description: "A machine-learning-based scheduling system for rehabilitation patients. Please see the GitHub <a target = _blank href = 'https://github.com/wi11iamk/Juno' >repo</a> for more information." }
  ];

  function displayProjects() {
    clearInput();
    viewingProjects = true;
    viewingProjectDetails = false;
    let projectList = "Current Projects:<br>";
    projects.forEach((p, index) => {
      projectList += `${index + 1}. ${p.name}<br>`;
    });
    projectList += "<br>Type a project name or number for more information, or type 'back' to return to the main menu.";
    addTextToResults(projectList);
  }

  var textReplies = function() {
    switch(textInputValueLowerCase){
      case "about":
        clearInput();
        addTextToResults("Hello 👋<br>My name is William Kistler. I am a PhD fellow in Neuroscience with the NIH and UCL Queen Square Institute of Neurology. I have passions for the movement and visual neurosciences, as well as applications and safeguards for ML and AI in healthcare. Outside of research, I can be found watching any number of <a target = _blank href='https://mubi.com/lists/love' >films that I love</a>!");
        break;

      case "education":
        clearInput();
        addTextToResults("PhD, Neuroscience, NIH & UCL<br>MA, Visual Perception and Neuroscience, American University<br>BS, Psychology, University of Maryland");
        break;

      case "skills":
        clearInput();
        addTextToResults("Languages: Python, C, Git, Bash, Cython<br>Technologies: Virtual reality, Motion capture, Computer vision, MEG<br>Software/Libraries: PyTorch, DeepLabCut, PsyToolkit, MTurk, Inkscape, Blender, GNU/Linux");
        break;
        
      case "contact":
        clearInput();
        addTextToResults("You can contact me using these links:<br><a href='https://www.linkedin.com/in/william-david-kistler/' target = _blank>Linkedin</a>, <a href='https://twitter.com/wi11iamk' target = _blank>Twitter</a><br>Or if you'd like, feel free to e-mail me directly:<br><a href='mailto:williamdkistler@gmail.com' target = _blank>williamdkistler at gmail dot com </a>");
        break;

      case "work":
        displayProjects();
        break;

      case "time":
        clearInput();
        getTimeAndDate("time");
        break;

      case "date":
        clearInput();
        getTimeAndDate("date");
        break;

      case "help":
      case "?":
        clearInput();
        postHelpList();
        break;

      case "back":
        if (viewingProjectDetails) {
          viewingProjectDetails = false;
          displayProjects();
        } else if (viewingProjects) {
          clearInput();
          viewingProjects = false;
          addTextToResults("Main Menu:<br>> about<br>> education<br>> skills<br>> work<br>> contact<br>Type a command to proceed.");
        } else {
          clearInput();
          addTextToResults("Type 'help' to see available commands.");
        }
        break;
        
      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults("I know ❤.");
        break;
        
      case "how are you":
      case "how are ya":
      case "how are things":
      case "how's things":  
        clearInput();
        addTextToResults('Yeah pretty good thanks.');
        break;

      case "git":
        clearInput();
        addTextToResults("git push origin master <br>you can check this project's repo on GitHub: <a href='https://github.com/wi11iamk/wi11iamk.github.io' target = _blank>wi11iamk.github.io</a>");
        break;

      case "git status":
        clearInput();
        addTextToResults("nothing to commit, working directory clean.");
        break;

      case "hello":
      case "hi":
      case "hola":
        clearInput();
        addTextToResults("Well hello to you!");
        break;

      case "cat":
        clearInput();
        addTextToResults("Mrow!! 🐱<br> psst: try typing (cat videos)");
        break;

      case "cat videos":
      case "cat v":
        addTextToResults("Mrow!");
        openLinkInNewWindow('https://www.youtube.com/results?search_query=cat videos');
        break;
        
      case "youtube":
        clearInput();
        addTextToResults("Type youtube + something to search for.");
        break;

      case "google":
        clearInput();
        addTextToResults("Type google + something to search for.");
        break;

      default:
        if (viewingProjects) {
          let project = projects.find(p => p.name.toLowerCase() === textInputValueLowerCase);
          let projectIndex = parseInt(textInputValueLowerCase) - 1;
          if (!project && projectIndex >= 0 && projectIndex < projects.length) {
            project = projects[projectIndex];
          }
          if (project) {
            clearInput();
            viewingProjectDetails = true;
            addTextToResults(`${project.name}:<br>${project.description}<br><br>Type 'back' to return to the project list.`);
          } else {
            clearInput();
            addTextToResults("Invalid project selection. Type a project name or number, or type 'back' to return to the project list.");
          }
        } else {
          clearInput();
          addTextToResults(`<p><i>The command <b>${textInputValue}</b> was not found. Type <b>Help</b> to see all commands.</i></p>`);
        }
        break;
    }
  }
  
// Main function to check the entered text and assign it to the correct function
  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim();
    textInputValueLowerCase = textInputValue.toLowerCase();

    if (textInputValue != "") {
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");

      if (textInputValueLowerCase.startsWith("open ")) {
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>The URL <b>" + textInputValue.substr(5) + "</b> should be opened now.</i>");
      } else if (textInputValueLowerCase.startsWith("youtube ")) {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>I've searched on YouTube for <b>" + textInputValue.substr(8) + "</b>. It should be opened now.</i>");
      } else if (textInputValueLowerCase.startsWith("google ")) {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for <b>" + textInputValue.substr(7) + "</b>. It should be opened now.</i>");
      } else if (textInputValueLowerCase.startsWith("wiki ")) {
        openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>I've searched on Wikipedia for <b>" + textInputValue.substr(5) + "</b>. It should be opened now.</i>");
      } else {
        textReplies(); // Executes regular terminal commands like 'projects' and 'about'
      }
    }
  };

  // Execute command from URL if present
  const initialCommand = getQueryParam('cmd');
  if (initialCommand) {
    const commands = initialCommand.split(',');
    commands.forEach(cmd => executeCommand(cmd.trim()));
}
});
