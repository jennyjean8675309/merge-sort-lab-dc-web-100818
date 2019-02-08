//finds and removes the smallest element in a sorted array

function findMinAndRemoveSorted(array) {
  return array.shift()
}

//combines two sorted arrays into one large array
function merge(firstArray, secondArray) {
  let sorted = []

  while (firstArray.length !== 0 && secondArray.length !== 0) {
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondArray))
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

//mergeSort should sort an unsorted array using the two functions defined above
function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
