exports.log = {
  start() {
    console.log('');
    console.log('Start');
    console.log('');
  },
};

exports.sleep = function sleep(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, () => console.log(''));
  });
};
