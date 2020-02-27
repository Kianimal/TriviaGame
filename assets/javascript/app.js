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
        a: "<input class='btnAnswer' type='radio' name='a' value='Episode IV - A New Hope'> <span class='txtAnswer'>Episode IV - A New Hope</span>",
        b: "<input class='btnAnswer' type='radio' name='b' value='Episode V - The Empire Strikes Back'> <span class='txtAnswer'>Episode V - The Empire Strikes Back</span>",
        c: "<input class='btnAnswer' type='radio' name='c' value='Episode I - The Phantom Menace'> <span class='txtAnswer'>Episode I - The Phantom Menace</span>",
        d: "<input class='btnAnswer' type='radio' name='d' value='Kinect Star Wars for Xbox 360'> <span class='txtAnswer'>Kinect Star Wars for Xbox 360</span>"
    }
];

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
    var a = questions[j].a;
    var b = questions[j].b;
    var c = questions[j].c;
    var d = questions[j].d;
    var br = "<br>"
    $(qBody).append(a);
    $(qBody).append(br);
    $(qBody).append(b);
    $(qBody).append(br);
    $(qBody).append(c);
    $(qBody).append(br);
    $(qBody).append(d);
    j++;
});