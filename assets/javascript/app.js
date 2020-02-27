var questionCount = 20;
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
    }
];

function populateQuestion(answer){
    return ("<input class='btnAnswer' type='radio' name='a' value='" + answer + "'> <span class='txtAnswer'>" + answer + "</span><br>");
};

var qHead = document.getElementById("qHeader");
var qHr = document.getElementById("qHr");
var qBody = document.getElementById("qBody")

for (i=0;i<questionCount;i++){
    questionNum.push(i);
}

$(".btn").click(function(){
    
    qHead.textContent = "Question " + (questionNum[j]+1);
    $(qBody).empty(), $(qBody).append(qHead), 
    $(qBody).append(qHr);

    var question = document.createElement("div");
    question.classList.add("questionText");
    question.textContent = questions[j].textVal;

    $(qBody).append(question);
    var a = populateQuestion(questions[j].a);
    $(qBody).append(a);
    var b = populateQuestion(questions[j].b);
    $(qBody).append(b);
    var c = populateQuestion(questions[j].c);
    $(qBody).append(c);
    var d = populateQuestion(questions[j].d);
    $(qBody).append(d);

    j++;
});