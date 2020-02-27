var questionCount = 20;
var timeCount = 0;
var questionNum = [];
var rightCount = 0;
var wrongCount = 0;
var j = 0;

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
    j++;
});