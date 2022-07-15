const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let uniques_list = [];
for (i in list) {
  for (j in list[i]) {
      if (!uniques_list.includes(list[i][j])) { 
        uniques_list.push(list[i][j]);
      }
  }
}
console.log(uniques_list);