function dfs(startIndex, numbers, target) {
  return (function dfsRcs(num, index) {
    if (index === numbers.length) {
      if (num === target) {
        return 1;
      } else {
        return 0;
      }
    }
    let num1 = num + numbers[index];
    let num2 = num - numbers[index];

    return dfsRcs(num1, index + 1) + dfsRcs(num2, index + 1);
  })(0, startIndex);
}
//재귀dfs
function solution(numbers, target) {
  let answer = dfs(0, numbers, target);
  return answer;
}
