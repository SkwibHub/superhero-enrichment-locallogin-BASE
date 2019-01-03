const listSorter = (ListArray, key) => {
  let newListArray = ListArray.slice();
  for (let i = 0; i < newListArray.length - 1; i++) {
    for (let j = 0; j < newListArray.length - 1; j++) {
      if (newListArray[j][key] > newListArray[j + 1][key]) {
        let temp = newListArray[j];
        newListArray[j] = newListArray[j + 1];
        newListArray[j + 1] = temp;
      }
    }
  }
  return newListArray;
};

module.exports = listSorter;
