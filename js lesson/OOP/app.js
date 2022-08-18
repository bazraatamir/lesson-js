const Quiz = function(question,answer,isCorrect){
  this.question = question,
  this.answer = answer
  this.isCorrect = isCorrect
}
Quiz.prototype.showquestion = function(){
   console.log(this.question);
   for(var x = 0; x<=this.answer.length-1;x++){
    console.log(`${x}:${this.answer[x]}`)
   }
  
}

Quiz.prototype.check = function(arg){
    if(arg == this.isCorrect){
      console.log("zov haruilaa")
    }else{
      console.log("buruu haruilaa")
    }
}
let q1 = new Quiz("mongol oron heden aimagtai ve",
      [21,25,45,11],
      0
)
let q2 = new Quiz("mongol oron heden aimagtai veeeeee",
      [21,25,45,11],
      0
)
let questions = [q1,q2];
let random = Math.floor(Math.random()*questions.length)
questions[random].showquestion();
let hariu = prompt('hariugaa oruulna uu')
questions[random].check(hariu)