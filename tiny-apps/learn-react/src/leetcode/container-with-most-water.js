//Brute force

var maxArea = function (height) {
  // Brute Force
  let max_water = 0;
  let area = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let cur_height = Math.min(height[i], height[j]);
      let width = j - i;
      area = cur_height * width;
      max_water = Math.max(max_water, area);
    }
  }
  return max_water;
};

// Two pointer
var maxArea = function (height) {
  let max_water = 0;
  let i = 0;
  let j = height.length - 1;
  let height = 0;
  let area = 0;

  while (i < j) {
    height = Math.min(height[i], height[j]);
    area = height * (j - i);
    max_water = Math.max(max_water, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max_water;
};
