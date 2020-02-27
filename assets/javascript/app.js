var questionCount = 20;
var timeCount = 0;
var questionNum = [];
var rightCount = 0;
var wrongCount = 0;
var j = 0;

for (i=0;i<questionCount;i++){
    questionNum.push(i);
}

var qHead = document.getElementById("qHeader");
var qHr = document.getElementById("qHr");

$("#btnStart").click(function(){
    qHead.textContent = "Question " + (questionNum[j]+1);
    $("#qBody").empty(), $("#qBody").append(qHead), 
    $("#qHeader").append(qHr);
    j++;
});