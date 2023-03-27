const postImages = [
  { src: '1', width: 100, height: 100 },
  { src: '2', width: 100, height: 100 },
  { src: '3', width: 300, height: 200 },
  { src: '4', width: 100, height: 100 },
  { src: '5', width: 800, height: 1000 },
  { src: '6', width: 200, height: 300 },
  { src: '7', width: 100, height: 100 },
  { src: '8', width: 300, height: 200 },
  { src: '9', width: 500, height: 250 },
  { src: '10', width: 800, height: 1000 },
  { src: '11', width: 800, height: 1000 },
  { src: '12', width: 800, height: 1000 },
  { src: '13', width: 100, height: 100 },
  { src: '14', width: 500, height: 250 },
  { src: '15', width: 50, height: 25 },
  { src: '16', width: 10, height: 1000 },
  { src: '17', width: 10, height: 6 },
];

// console.log(postImages.length);

const dimensionsMap = {};

for (const { width, height, src } of postImages) {
  const key = `${width}x${height}`;
  if (dimensionsMap[key] === undefined) {
    dimensionsMap[key] = [{ width, height, src }];
  } else {
    dimensionsMap[key] = [...dimensionsMap[key], { width, height, src }];
  }
}

// console.log(dimensionsMap);
const collectors = Object.values(dimensionsMap);
// console.log(collectors);
// console.log('====================');

// https://www.reddit.com/r/learnjavascript/comments/10vcvj1
collectors.sort((a, b) => {
  // return negative to sort `a` before. Positive to sort `b` before

  // `a` is less than `b`
  if (a.length < b.length) {
    return -1;
  }

  // `a` is greater than `b`
  if (a.length > b.length) {
    return 1;
  }

  // Both arrays are of the same length case

  if (a[0].width < b[0].width) {
    return -1;
  }

  if (a[0].width > b[0].width) {
    return 1;
  }

  // `a` must be equal to `b`
  return 0;
});

console.log(collectors.flat());
