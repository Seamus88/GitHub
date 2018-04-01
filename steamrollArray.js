// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
	var joinedArray = [];
	function downTheLevels(array) {
		if (array[0].isArray()) {
			downTheLevels(array[0])
		} else {
			return array[0];
		}
	}
	for (var i = 0; i < arr.length; i++) {
		joinedArray.push(downTheLevels(arr[i]));
	}
	return joinedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
