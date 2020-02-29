//Question array
var questions = [
    {
        textVal: "Which Star Wars movie was the first to be released?",
        right: "Episode IV - A New Hope",
        a: "Episode IV - A New Hope",
        b: "Episode V - The Empire Strikes Back",
        c: "Episode I - The Phantom Menace",
        d: "Kinect Star Wars for Xbox 360"
    },
    {
        textVal: "What type of creature is Han Solo's friend, Chewbacca?",
        right: "Wookiee",
        a: "Human",
        b: "Wookiee",
        c: "Bothan",
        d: "Corellian"
    },
    {
        textVal: "What ship was Luke flying when he destroyed the Death Star?",
        right: "X-Wing",
        a: "A-Wing",
        b: "Y-Wing",
        c: "The 'SS GOT 'EM'",
        d: "X-Wing"
    },
    {
        textVal: "Who is Luke Skywalker's father?",
        right: "Anakin Skywalker",
        a: "Boba Fett",
        b: "Darth Vader",
        c: "Anakin Skywalker",
        d: "Steve Carell"
    },
    {
        textVal: "What is Princess Leia's last name?",
        right: "Organa",
        a: "Skywalker",
        b: "Amidala",
        c: "Solo",
        d: "Organa"
    },
    {
        textVal: "What is Han Solo's home planet?",
        right: "Corellia",
        a: "Corellia",
        b: "Jedha",
        c: "Tatooine",
        d: "Coruscant"
    },
    {
        textVal: "What happened to Luke Skywalker on Cloud City?",
        right: "Lost his right hand",
        a: "Lost his left hand",
        b: "Lost his right hand",
        c: "He fell to his death",
        d: "He got a new sweater, but it didn't fit so he returned it"
    },
    {
        textVal: "When does the Disney+ series 'The Mandalorian' take place?",
        right: "Between the original trilogy and the sequel trilogy",
        a: "Before any of the films take place",
        b: "After the sequel trilogy",
        c: "Between the prequels and the original trilogy",
        d: "Between the original trilogy and the sequel trilogy"
    },
    {
        textVal: "Which character appeared in every entry of the main series?",
        right: "R2D2",
        a: "Leia Organa",
        b: "Han Solo",
        c: "Qi'ra",
        d: "R2D2"
    },
    {
        textVal: "Who did Han Solo kill in 'Solo: A Star Wars Story'?",
        right: "Tobias Beckett",
        a: "Lando Calrissian",
        b: "Dryden Vos",
        c: "Tobias Beckett",
        d: "Darth Maul"
    },
    {
        textVal: "Who was Tobias Beckett married to?",
        right: "Val",
        a: "Val",
        b: "Qi'ra",
        c: "Phoebe Waller-Bridge",
        d: "Enfys Nest"
    },
    {
        textVal: "On what planet is Darth Vader's fortress located?",
        right: "Mustafar",
        a: "Dantooine",
        b: "Mustafar",
        c: "Ilum",
        d: "Alderaan"
    },
    {
        textVal: "What material is Mandalorian armor made of?",
        right: "Beskar",
        a: "Beskar",
        b: "Iron alloy",
        c: "Unobtanium",
        d: "Titanium"
    },
    {
        textVal: "Name the creature that attacked Luke on Hoth.",
        right: "Wampa",
        a: "Ewok",
        b: "Rathtar",
        c: "Krayt Dragon",
        d: "Wampa"
    },
    {
        textVal: "On what planet were the rebels nearly defeated in Episode VIII?",
        right: "Crait",
        a: "Hoth",
        b: "Crait",
        c: "Yavin IV",
        d: "Endor"
    },
    {
        textVal: "Who has scored the most Star Wars films?",
        right: "John Williams",
        a: "John Williams",
        b: "Beethoven",
        c: "Justin Bieber",
        d: "George Lucas"
    },
    {
        textVal: "What last name did Rey take?",
        right: "Skywalker",
        a: "Frik",
        b: "Bliss",
        c: "Ridley",
        d: "Skywalker"
    },
    {
        textVal: "In what city is Anakin Skywalker first introduced?",
        right: "Mos Espa",
        a: "Coruscant",
        b: "Mos Eisly",
        c: "Mos Espa",
        d: "Mos Def"
    },
    {
        textVal: "What is the name of the casino planet featured in Episode VIII?",
        right: "Canto Bight",
        a: "Crait",
        b: "Canto Bight",
        c: "Jupiter",
        d: "Exegol"
    },
    {
        textVal: "What creatures are native to Yavin VI?",
        right: "Ewoks",
        a: "Wookiees",
        b: "Humans",
        c: "Ewoks",
        d: "AT-STs"
    }
];

var rightAnswerPrompt = [
    "Great shot, kid!",
    "Never tell me the odds!",
    "Power! Unlimited POWER!"
];

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

function getAnswer(){
    for (i=1;i<5;i++){
        userAnswer = document.getElementById(i);
        console.log(userAnswer);
        if(userAnswer.checked){
            if(userAnswer.value === questions[j].right){
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

function rightAnswer(){
    
    clearTimeout(splashTimer);
    $(qBody).attr("id","rBody");
    $(qHr).attr("id","rHr");
    $(qContent).empty();
    $(qContent).html("<p class='txtQuestion txtCenter'>" + selectRandom(rightAnswerPrompt) + "</p>" +
                        "<p class='txtW_Timeout txtCenter'>YOU ANSWERED CORRECTLY!</p>");

    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");

    console.log("Right answer!");
    splashTimer = setTimeout(function(){loadQuestions(); }, 3000);
};

function wrongAnswer(){
    
    clearTimeout(splashTimer);
    $(qBody).attr("id","w_tBody");
    $(qHr).attr("id","w_tHr");
    $(qContent).empty();
    $(qContent).prepend("<p class='txtQuestion txtCenter'>" + selectRandom(wrongAnswerPrompt) + "</p>" +
                        "<p class='txtW_Timeout txtCenter'>Correct answer: " + questions[j-1].right +"</p>");

    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");

    console.log("Wrong answer!");
    splashTimer = setTimeout(function(){loadQuestions(); }, 5000);
};

function timedOut(){
    
    j++;

    clearTimeout(splashTimer);
    $(qBody).attr("id","w_tBody");
    $(qHr).attr("id","w_tHr");
    $(tBlock).css("visibility", "hidden");
    $(btn).css("visibility", "hidden");
    $(qContent).empty();
    $(qContent).html("<p class='txtW_Timeout txtCenter'>DO, OR DO NOT.</p>"+
                        "<p class='txtW_Timeout txtCenter'>THERE IS NO TRY.</p>"+
                    "<p class='txtW_Timeout txtCenter'>YOU DID NOT ANSWER IN TIME<p>" +
                    "<p class='txtW_Timeout txtCenter'>Correct answer: " + questions[j-1].right +"</p>");
    wrongCount+=1;

    clearTimeout(qTimer);
    clearInterval(countTimer);

    splashTimer = setTimeout(function(){loadQuestions(); }, 5000);

    console.log("Wrong answer!");
}

function setTime(){
    timeCount-=1;
    tUpdate.textContent = timeCount + " seconds";
}

function loadQuestions(){

    if (j<20){

        clearTimeout(qTimer);
        clearInterval(countTimer);
        $(qBody).attr("id","qBody");
        $(qHr).attr("id","qHr");
        timeCount = 20;
        tUpdate.textContent = timeCount + " seconds";

        $(tBlock).css("visibility", "visible");
        qHead.textContent = "Question " + (j+1);
        $(qContent).empty();

        question.classList.add("txtQuestion");

        question.textContent = questions[j].textVal;

        $(qContent).append(question);
        var a = populateQuestion(questions[j].a,"1");
        $(qContent).append(a);
        var b = populateQuestion(questions[j].b,"2");
        $(qContent).append(b);
        var c = populateQuestion(questions[j].c,"3");
        $(qContent).append(c);
        var d = populateQuestion(questions[j].d,"4");
        $(qContent).append(d);

        $(btn).css("visibility", "visible");
        $(btn).text("SUBMIT");

        qTimer = setTimeout(function(){timedOut(); }, 20000);
        countTimer = setInterval(function(){ setTime(); }, 1000);
    } 
    else {

        timeCount = 20;

        clearTimeout(qTimer);
        clearInterval(countTimer);
        $(qBody).attr("id","qBody");
        $(qHr).attr("id","qHr");
        qHead.textContent = "Star Wars Trivia";
        $(qContent).empty();
        $(qContent).html("<p class='txtQuestion txtCenter'>MAY THE FORCE BE WITH YOU. ALWAYS.</p>"+
                            "<p class='txtAnswer txtCenter'>Right: " + rightCount + "</p>" +
                            "<p class='txtAnswer txtCenter'>Wrong: " + wrongCount + "</p>");

        $(btn).css("visibility", "visible");
        $(btn).text("RESTART");
        j++;
        console.log("Ending J Value: " + j);
        restart = true;
    };

    console.log("Question number: " + (j+1));
    console.log("J Value: " + j);
    console.log("Right answers: " + rightCount);
    console.log("Wrong answers: " + wrongCount);

};

function selectRandom(arr){
    var selected = Math.floor((Math.random()*arr.length));
    return arr[selected];
};

//Variables for counters
var timeCount = 20;
var rightCount = 0;
var wrongCount = 0;
var j = -1;
var restart = false;

//START/SUBMIT Button variables
var btn = document.getElementsByClassName("btn");
var qBody = document.getElementById("qBody");
var qHead = document.getElementById("qTitle");
var qHr = document.getElementById("qHr");
var qContent = document.getElementById("qContent");
var question = document.createElement("div");
var tBlock = document.getElementById("qTimer");
var tUpdate = document.getElementById("time");
tUpdate.textContent = timeCount + " seconds";
var userAnswer;

var qTimer;
var countTimer;
var splashTimer;

//START/SUBMIT Button functionality

$(".btn").click(function(){

    //Avoids collecting answer when starting the game
    if(j>-1 && restart != true){
        getAnswer();
    };

    if(j==-1){
        j++;
        loadQuestions();
    };

    if(restart == true){
        rightCount = 0;
        wrongCount = 0;
        restart = false;
        j = 0;
        loadQuestions();
        console.log("J value: " + j);
    }
});