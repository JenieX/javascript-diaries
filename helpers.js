exports.log = {
  start() {
    console.log('');
    console.log('Start');
    console.log('');
  },
  one() {
    console.log('One');
  },
  two() {
    console.log('Two');
  },
  three() {
    console.log('Three');
  },
  four() {
    console.log('Four');
  },
  five() {
    console.log('Five');
  },
  end() {
    console.log('End');
  },
};

exports.sleep = function sleep(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, () => console.log(''));
  });
};
