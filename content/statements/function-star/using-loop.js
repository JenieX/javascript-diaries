const { log, sleep } = require('../../../helpers');

function* counter() {
  log.one();
  yield 1;

  log.two();
  yield 2;

  log.three();
  yield 3;

  log.end();
}

const counterGenerator = counter();

async function main() {
  log.start();

  let loop = 0;
  for (const value of counterGenerator) {
    console.log(`Loop #${(loop += 1)}`);
    console.log(value);
    (await sleep())();
  }
}

main();
