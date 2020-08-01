document.addEventListener('DOMContentLoaded', function() {

  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault(); // Preventing the form from submitting
    checkWord(); // Check the entered word/sentence
    window.scrollTo(0,150);
  }

  // Get the focus to the text input to enter a word right away.
  document.getElementById('terminalTextInput').focus();

  // Getting the text from the input
  var textInputValue = document.getElementById('terminalTextInput').value.trim();

  //Getting the text from the results div
  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  // Clear text input
  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }

  // Scrtoll to the bottom of the results div
  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  // Scroll to the bottom of the results
  scrollToBottomOfResults();

  // Add text to the results div
  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }

  // Getting the list of keywords for help & posting it to the screen
  var postHelpList = function(){
    // Array of all the help keywords
    var helpKeyWords = [
      "- 'About' will briefly introduce me and my work",
      "- 'Education' will detail my degrees, the focus of each, and from which University they were conferred",
      "- 'Skills' will describe which methods I have used for my work",
      "- 'Contact' will point you to ways to reach out",
      "- Open + website URL to open it in the browser (ex. open reddit.com)",
      "- Google + keyword to search directly in Google (ex. google adventure time)",
      "- YouTube + keyword to search directly in YouTube (ex. youtube vox explained)",
      "- Wiki + keyword to search directly in Wikipedia (ex. wiki numbers)",
      "* There are more keywords that you have to discover by yourself."
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }

  // Getting the time and date and post it depending on what you request for
  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
    var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.

    if (timeHours < 10){ // if 1 number display 0 before it.
      timeHours = "0" + timeHours;
    }

    if (timeMinutes < 10){ // if 1 number display 0 before it.
      timeMinutes = "0" + timeMinutes;
    }

    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }

  // Opening links in a new window
  var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
  }

  // Having a specific text reply to specific strings
  var textReplies = function() {
    switch(textInputValueLowerCase){

      // unique replies [BEGIN]
        
      case "about":
        clearInput();
        addTextToResults("Hello 👋<br>My name is William Kistler. I am a PhD fellow in Neuroscience with the NIH and UCL Institute of Neurology. I have a passion for the clinical and movement neurosciences and understanding how our results can be used for rehabilitation practices post-stroke. Outside of research, you can find me watching any number of <a target = _blank href='https://mubi.com/lists/love' >films that I love</a>!");
        break;
        
      case "education":
        clearInput();
        addTextToResults("PhD, Neuroscience, University College London<br>MA, Communications, American University<br>BS, Psychology, University of Maryland");
        break;
        
      case "skills":
        clearInput();
        addTextToResults("Languages: Python, C, Matlab, Git, Bash<br>Technologies: EEG, MEG<br>Software: DeepLabCut, FreeSurfer, Blender, Linux");
        break;
        
      case "contact":
        clearInput();
        addTextToResults("You can contact me via these links:<br><a href='https://www.linkedin.com/in/william-david-kistler/' target = _blank>Linkedin</a>, <a href='https://twitter.com/wi11iamk' target = _blank>Twitter</a><br>Or if you'd like, feel free to e-mail me directly:<br><a href='mailto:williamdkistler@gmail.com' target = _blank>williamdkistler at gmail dot com </a>");
        break;  
        
      case "hermano":
        clearInput();
        addTextToResults("An amazing and talented scientist/brother of mine. <br> He helped me a lot while I was in my Master's programme. He is <a href='https://www.linkedin.com/in/brendan-tunstall-2ab3b495/' target = _blank>Brendan Tunstall</a>");
        break;

      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults("Aw! Here's some love for you too ❤ !");
        break;

      case "america":
      case "this is america":
      case "gambino":
      case "donald":
      case "glover":
        clearInput();
        addTextToResults('This is America!');
        openLinkInNewWindow('https://www.youtube.com/watch?v=VYOjWnS4cMY');
        break;

      case "git":
        clearInput();
        addTextToResults("git push origin master <br>you can check this project's repo on GitHub: <a href='https://github.com/wi11iamk/wi11iamk.github.io' target = _blank>wi11iamk.github.io</a>");
        break;

      case "git status":
        clearInput();
        addTextToResults("nothing to commit, working directory clean.");
        break;

      case "git push origin master":
        clearInput();
        addTextToResults("Push it real good.");
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

      case "what the":
      case "wtf":
      case "fuck":
        clearInput();
        addTextToResults("F***, amirite?");
        break;

      case "shit":
      case "poop":
      case "💩":
        clearInput();
        addTextToResults("💩");
        break;

      case "cat videos":
      case "cat v":
        addTextToResults("Okay I'll show you some in YouTube.");
        openLinkInNewWindow('https://www.youtube.com/results?search_query=cat videos');
        break;

      // unique replies [END]

      case "youtube":
        clearInput();
        addTextToResults("Type youtube + something to search for.");
        break;

      case "google":
        clearInput();
        addTextToResults("Type google + something to search for.");
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

      default:
      clearInput();
      addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
      break;
    }
  }

// Main function to check the entered text and assign it to the correct function
  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
    textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

    if (textInputValue != ""){ //checking if text was entered
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0,5) == "open ") { //if the first 5 characters = open + space
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,7) == "google ") {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
        openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
      } else{
        textReplies();
      }
    }
  };

});
