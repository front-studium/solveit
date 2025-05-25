function solution(n, k) {
  let answer;
  service = Math.trunc(n / 10);
  answer = 12000 * n + (k - service) * 2000;
  return answer;
}
