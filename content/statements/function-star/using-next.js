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

  let loops = 5;
  while (loops) {
    console.log(`Loop #${5 - loops + 1}`);
    console.log(counterGenerator.next());

    loops -= 1;
    (await sleep())();
  }
}

main();
