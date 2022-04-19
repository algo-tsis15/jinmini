function solution(answers) {
    var answer = [];
    var supo1 = [1,2,3,4,5];
    var supo2 = [2,1,2,3,2,4,2,5];
    var supo3 = [3,3,1,1,2,2,4,4,5,5];
    var supo1answer = 0;
    var supo2answer = 0;
    var supo3answer = 0;
    for(i=0;i<answers.length;i++)
    {
        supo1[i%5]==answers[i] ? supo1answer++ : supo1answer+=0;
        supo2[i%8]==answers[i] ? supo2answer++ : supo2answer+=0;
        supo3[i%10]==answers[i] ? supo3answer++ : supo3answer+=0;        
    }
    var max = Math.max(supo1answer,supo2answer,supo3answer);
    max==supo1answer? answer.push(1):0;
    max==supo2answer? answer.push(2):0;
    max==supo3answer? answer.push(3):0;
    
    return answer;

}
