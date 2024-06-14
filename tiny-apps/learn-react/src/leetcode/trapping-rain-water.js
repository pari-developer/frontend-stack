/**
 * @param {number[]} height
 * @return {number}
 */
 let trap = function(height) {
    let trapped_water = 0;
    let left_max_arr = [];
    let right_max_arr = [];
       if (height.length === 0) {
        return trapped_water;
    }
    left_max_arr[0] = height[0];
    for(let i=1;i<height.length;i++){
    left_max_arr[i] = Math.max(left_max_arr[i-1] ,height[i]);
    }
    right_max_arr[height.length-1] = height[height.length-1];
    for(let i=height.length-2;i>=0;i--){
    right_max_arr[i] = Math.max(right_max_arr[i+1] ,height[i]);
    }
    for(let i=0;i<height.length;i++){
     trapped_water += ( Math.min(left_max_arr[i],right_max_arr[i]) - height[i]);
    }
 return trapped_water;
  }
