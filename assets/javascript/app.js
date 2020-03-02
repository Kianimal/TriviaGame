//Question array
var questions = [
    {
        answered: false,
        textVal: "Which Star Wars movie was the first to be released?",
        right: "Episode IV - A New Hope",
        a: "Episode IV - A New Hope",
        b: "Episode V - The Empire Strikes Back",
        c: "Episode I - The Phantom Menace",
        d: "Kinect Star Wars for Xbox 360"
    },
    {
        answered: false,
        textVal: "What type of creature is Han Solo's friend, Chewbacca?",
        right: "Wookiee",
        a: "Human",
        b: "Wookiee",
        c: "Bothan",
        d: "Corellian"
    },
    {
        answered: false,
        textVal: "What ship was Luke flying when he destroyed the Death Star?",
        right: "X-Wing",
        a: "A-Wing",
        b: "Y-Wing",
        c: "The 'SS GOT 'EM'",
        d: "X-Wing"
    },
    {
        answered: false,
        textVal: "Who is Luke Skywalker's father?",
        right: "Anakin Skywalker",
        a: "Boba Fett",
        b: "Darth Sidious",
        c: "Anakin Skywalker",
        d: "Darth Maul"
    },
    {
        answered: false,
        textVal: "What is Princess Leia's last name?",
        right: "Organa",
        a: "Skywalker",
        b: "Amidala",
        c: "Solo",
        d: "Organa"
    },
    {
        answered: false,
        textVal: "What is Han Solo's home planet?",
        right: "Corellia",
        a: "Corellia",
        b: "Kashyyyk",
        c: "Tatooine",
        d: "Coruscant"
    },
    {
        answered: false,
        textVal: "What happened to Luke Skywalker on Cloud City?",
        right: "He lost his right hand",
        a: "He lost his left hand",
        b: "He lost his right hand",
        c: "He fell to his death",
        d: "He was frozen in carbonite"
    },
    {
        answered: false,
        textVal: "When does the Disney+ series 'The Mandalorian' take place?",
        right: "Between the original trilogy and the sequel trilogy",
        a: "Before any of the films take place",
        b: "After the sequel trilogy",
        c: "Between the prequels and the original trilogy",
        d: "Between the original trilogy and the sequel trilogy"
    },
    {
        answered: false,
        textVal: "Which character appeared in every entry of the main series?",
        right: "R2D2",
        a: "Leia Organa",
        b: "Han Solo",
        c: "Qi'ra",
        d: "R2D2"
    },
    {
        answered: false,
        textVal: "Who did Han Solo kill in 'Solo: A Star Wars Story'?",
        right: "Tobias Beckett",
        a: "Lady Proxima",
        b: "Dryden Vos",
        c: "Tobias Beckett",
        d: "Darth Maul"
    },
    {
        answered: false,
        textVal: "Who was Tobias Beckett married to?",
        right: "Val",
        a: "Val",
        b: "Qi'ra",
        c: "Phoebe Waller-Bridge",
        d: "Enfys Nest"
    },
    {
        answered: false,
        textVal: "On what planet is Darth Vader's fortress located?",
        right: "Mustafar",
        a: "Dantooine",
        b: "Mustafar",
        c: "Ilum",
        d: "Alderaan"
    },
    {
        answered: false,
        textVal: "What material is Mandalorian armor made of?",
        right: "Beskar",
        a: "Beskar",
        b: "Iron alloy",
        c: "Unobtanium",
        d: "Titanium"
    },
    {
        answered: false,
        textVal: "Name the creature that attacked Luke on Hoth.",
        right: "Wampa",
        a: "Ewok",
        b: "Rathtar",
        c: "Krayt Dragon",
        d: "Wampa"
    },
    {
        answered: false,
        textVal: "On what planet were the rebels nearly defeated in Episode VIII?",
        right: "Crait",
        a: "Hoth",
        b: "Crait",
        c: "Yavin IV",
        d: "Endor"
    },
    {
        answered: false,
        textVal: "Who has scored the most Star Wars films?",
        right: "John Williams",
        a: "John Williams",
        b: "Michael Giacchino",
        c: "Charles Gerhardt",
        d: "George Lucas"
    },
    {
        answered: false,
        textVal: "What last name did Rey take?",
        right: "Skywalker",
        a: "Frik",
        b: "Bliss",
        c: "Ridley",
        d: "Skywalker"
    },
    {
        answered: false,
        textVal: "In what city is Anakin Skywalker first introduced?",
        right: "Mos Espa",
        a: "Coruscant",
        b: "Mos Eisly",
        c: "Mos Espa",
        d: "Mos Def"
    },
    {
        answered: false,
        textVal: "What is the name of the casino planet featured in Episode VIII?",
        right: "Canto Bight",
        a: "Crait",
        b: "Canto Bight",
        c: "Jupiter",
        d: "Exegol"
    },
    {
        answered: false,
        textVal: "What creatures are native to Yavin IV?",
        right: "Ewoks",
        a: "Wookiees",
        b: "Humans",
        c: "Ewoks",
        d: "AT-STs"
    }
];
//Right answer splash page text array
var rightAnswerPrompt = [
    "Great shot, kid!",
    "Never tell me the odds!",
    "Power! Unlimited POWER!"
];
//Wrong answer splash page text array
var wrongAnswerPrompt = [
    "I FIND YOUR LACK OF FAITH DISTURBING",
    "THAT'S NOT TRUE! THAT'S IMPOSSIBLE!",
    "SO THIS IS HOW LIBERTY DIES...",
    "I'VE GOT A BAD FEELING ABOUT THIS"
];
//Populates question div one answer at a time
function populateQuestion(answer,id){
    return ("<input id='" + id + "' class='btnAnswer' type='radio' name='answer' value='" + answer + 
            "'> <span class='txtAnswer'>" + answer + "</span><br>");
};
//Gets the answer and checks it against the right value
function getAnswer(){
    for (i=1;i<5;i++){
        userAnswer = document.getElementById(i);
        console.log(userAnswer);
        if(userAnswer.checked){
            if(userAnswer.value === qDisplay.right){
                rightCount+=1;
                j++;
                rightAnswer();
                break;
            }

            else{
                wrongCount+=1;
                j++;
                wrongAnswer();
                break;
            };
        };
    };
};
//Run when the right answer is chosen
function rightAnswer(){
    
    clearTimeout(qTimer);
    clearInterval(countTimer);
    clearTimeout(splashTimer);
    $(qBody).toggleClass("rBody");
    $(qHr).attr("id","rHr");
    $(qContent).empty();
    $(qContent).toggleClass("qCenterTimeout",false);
    $(qContent).toggleClass("qCenter");
    $(qContent).html("<p class='txtQuestion txtCenter'>" + selectRandom(rightAnswerPrompt) + "</p>" +
                        "<p class='txtW_Timeout txtCenter'>YOU ANSWERED CORRECTLY!</p>");

    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");

    console.log("Right answer!");
    splashTimer = setTimeout(function(){loadQuestions(); }, 3000);
};
//Run when the wrong answer is chosen
function wrongAnswer(){
    
    clearTimeout(qTimer);
    clearInterval(countTimer);
    clearTimeout(splashTimer);
    $(qBody).toggleClass("w_tBody");
    $(qHr).attr("id","w_tHr");
    $(qContent).empty();
    $(qContent).toggleClass("qCenterTimeout",false);
    $(qContent).toggleClass("qCenter");
    $(qContent).html("<p class='txtQuestion txtCenter'>" + selectRandom(wrongAnswerPrompt) + "</p>" +
                        "<p class='txtW_Timeout txtCenter'>Correct answer: " + qDisplay.right +"</p>");

    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");

    console.log("Wrong answer!");
    splashTimer = setTimeout(function(){loadQuestions(); }, 5000);
};
//Run when the user doesn't answer before timer ends
function timedOut(){
    
    j++;

    clearTimeout(splashTimer);
    $(qBody).toggleClass("w_tBody");
    $(qHr).attr("id","w_tHr");
    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");
    $(qContent).empty();
    $(qContent).toggleClass("qCenterTimeout");
    $(qContent).toggleClass("qCenter",false);
    $(qContent).html("<p class='txtW_Timeout txtCenter'>DO, OR DO NOT.</p>"+
                        "<p class='txtW_Timeout txtCenter'>THERE IS NO TRY.</p>"+
                    "<p class='txtW_Timeout txtCenter'>YOU DID NOT ANSWER IN TIME<p>" +
                    "<p class='txtW_Timeout txtCenter'>Correct answer: " + qDisplay.right +"</p>");
    wrongCount+=1;

    clearTimeout(qTimer);
    clearInterval(countTimer);

    splashTimer = setTimeout(function(){loadQuestions(); }, 5000);

    console.log("Wrong answer!");
}
//Populates question container with questions from the array, in order.
function loadQuestions(){

    if (j<20){

        clearTimeout(qTimer);
        clearInterval(countTimer);
        $(qBody).toggleClass("qBody",true);
        $(qBody).toggleClass("rBody",false);
        $(qBody).toggleClass("w_tBody",false);
        $(qHr).attr("id","qHr");
        timeCount = 20;
        tUpdate.textContent = timeCount + " seconds";

        $(tBlock).css("visibility", "visible");
        qHead.textContent = "Question " + (j+1);
        $(qContent).empty();
        $(qContent).removeAttr("class");

        question.classList.add("txtQuestion");

        qDisplay = selectRandomQuestion(questions);
        qDisplay.answered = true;
        question.textContent = qDisplay.textVal;

        $(qContent).append(question);
        var a = populateQuestion(qDisplay.a,"1");
        $(qContent).append(a);
        var b = populateQuestion(qDisplay.b,"2");
        $(qContent).append(b);
        var c = populateQuestion(qDisplay.c,"3");
        $(qContent).append(c);
        var d = populateQuestion(qDisplay.d,"4");
        $(qContent).append(d);

        $(btn).css("visibility", "visible");
        $(btn).text("SUBMIT");

        qTimer = setTimeout(function(){timedOut(); }, 20000);
        countTimer = setInterval(function(){ setTime(); }, 1000);

        function setTime(){
            timeCount-=1;
            tUpdate.textContent = timeCount + " seconds";
        }
    } 
    else {

        // timeCount = 20;

        clearTimeout(qTimer);
        clearInterval(countTimer);
        $(qBody).attr("class","qBody");
        $(qHr).attr("id","qHr");
        qHead.textContent = "Star Wars Trivia";
        $(qContent).empty();
        $(qContent).removeAttr("class");
        $(qContent).html("<p class='txtQuestion txtCenter'>MAY THE FORCE BE WITH YOU. ALWAYS.</p>"+
                            "<p class='txtAnswer txtCenter'>Right: " + rightCount + "</p>" +
                            "<p class='txtAnswer txtCenter'>Wrong: " + wrongCount + "</p>");

        $(btn).css("visibility", "visible");
        $(btn).text("RESTART");
        j++;
        console.log("Ending J Value: " + j);
        restart = true;
    };

};
//Randomly selects splash page text from right/wrong prompt arrays
//Returns the value at a random index in the length of the array
function selectRandom(arr){
    var selected = Math.floor((Math.random()*arr.length));
    return arr[selected];
};
function selectRandomQuestion(qArr){
    var qSelected = selectRandom(qArr);
    if(qSelected.answered === false){
        return qSelected;
    } 
    else {
        return selectRandomQuestion(qArr);
    }
};
//Restart function resets all variables to necessary values to restart the game
function restartGame(){
    for(i=0;i<questions.length;i++){
        questions[i].answered = false;
    };
    timeCount = 20;
    rightCount = 0;
    wrongCount = 0;
    restart = false;
    j = 0;
    loadQuestions();
};

//Variables for counters
var timeCount = 20;
var rightCount = 0;
var wrongCount = 0;
//J variable counts through questions and tracks game progress
var j = -1;
//Restart triggered to restart the game when it ends
var restart = false;

//START/SUBMIT Button variables
//Button
var btn = document.getElementsByClassName("btn");
//Container for dynamic content. Used to change border color.
var qBody = document.getElementsByClassName("qBody");
//Horizontal row content, used to change border color
var qHr = document.getElementById("qHr");
//Dynamic text for questions/container label
var qHead = document.getElementById("qTitle");
//Dynamic text container
var qContent = document.getElementById("qContent");
//Creates a div that is added when questions load.
//Used to update dynamic question text.
var question = document.createElement("div");
//????
var qDisplay;
//Dynamic timer text container
var tBlock = document.getElementById("qTimer");
//Dynamic text for timer
var tUpdate = document.getElementById("time");
tUpdate.textContent = timeCount + " seconds";
//Global variable to store user answer
var userAnswer;
//Global timer variables to be used by multiple functions
var qTimer;
var countTimer;
var splashTimer;

//START/SUBMIT Button functionality

$(".btn").click(function(){

    //Avoids collecting answer when starting or restarting game
    if(j>-1 && restart != true){
        getAnswer();
    };

    //Load first question when starting first game
    if(j==-1){
        j++;
        loadQuestions();
    };

    //Restart functionality resets all variables and restarts game
    if(restart == true){
        restartGame();
    };
});