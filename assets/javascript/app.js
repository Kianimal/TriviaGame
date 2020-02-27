var timeCount = 0;
var questionNum = [];
var rightCount = 0;
var j = 0;

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
        d: "Dameron"
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
        right: "Between Episode VI and Episode VII",
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
        textVal: "Who is arguably the person most known for the score of Star Wars films?",
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

function populateQuestion(answer){
    return ("<input class='btnAnswer' type='radio' name='answer' value='" + answer + 
            "'> <span class='txtAnswer'>" + answer + "</span><br>");};

for (i=0;i<questions.length;i++){
    questionNum.push(i);
}

//START/SUBMIT Button

var btn = document.getElementsByClassName("btn");
var qHead = document.getElementById("qHeader");
var qContent = document.getElementById("qContent");
var question = document.createElement("div");
question.classList.add("txtQuestion");

$(".btn").click(function(){

    qHead.textContent = "Question " + (questionNum[j]+1);
    $(qContent).empty();

    question.textContent = questions[j].textVal;

    $(qContent).append(question);
    var a = populateQuestion(questions[j].a);
    $(qContent).append(a);
    var b = populateQuestion(questions[j].b);
    $(qContent).append(b);
    var c = populateQuestion(questions[j].c);
    $(qContent).append(c);
    var d = populateQuestion(questions[j].d);
    $(qContent).append(d);

    $(btn).text("SUBMIT");

    j++;
    console.log(j);
});