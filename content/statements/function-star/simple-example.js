const { log, sleep } = require('../../../helpers');

function* counter() {
  console.log('One');
  yield 1;

  console.log('Two');
  yield 2;

  console.log('Three');
  yield 3;

  console.log('End');
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
