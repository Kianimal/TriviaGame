var timeCount = 0;
var questionNum = [];
var rightCount = 0;
var wrongCount = 0;
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
    },{
        textVal: "What ship was Luke flying when he destroyed the Death Star?",
        right: "X-Wing",
        a: "A-Wing",
        b: "Y-Wing",
        c: "The 'SS GOT 'EM'",
        d: "X-Wing"
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