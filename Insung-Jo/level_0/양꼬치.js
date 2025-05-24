function solution(skewerCount, drinkCount) {
  const LAMB_SKEWER_PRICE = 12000;
  const DRINK_PRICE = 2000;
  const FREE_DRINK_THRESHOLD = 10;
  const NO_SERVICE_COUNT = 0;

  if(typeof skewerCount !== 'number' || typeof drinkCount !== 'number') throw new Error('숫자를 입력해주세요.');
  if (n < 0 || k < 0) throw new Error('음수는 허용되지 않습니다.');

  const drinkService = skewerCount >= FREE_DRINK_THRESHOLD ? Math.trunc(drinkCount / FREE_DRINK_THRESHOLD) : NO_SERVICE_COUNT; 

  const total = skewerCount * LAMB_SKEWER_PRICE + drinkCount * DRINK_PRICE - drinkService * DRINK_PRICE;

  return total;
}