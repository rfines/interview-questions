/** If given the question:
 *  Print all the characters from the first string that are not present in the second string
 * Use the following code sample
*/

/**
 * Extracts all the characters in A that are not in B using nested for loops
 * 
 * @param {String} A 
 * @param {String} B 
 * 
 * Because of the nested for loops we are iterating over B A.length times for a total of A.length * B.length comparisons
 * O(n^2)
 */
function processStringsInLoops (A, B) {
	var result = ''
	for (var i=0;i<A.length;i++) {
		var found = false
		for (var j = 0; j< B.length;j++) {
			if(A[i] === B[j]){
				found = true
			}
		}
		if(!found) {
			result += A[i]
		}
	}
	return result
}

/**
 * Extracts all the characters from A that are not in B using a hash map 
 * @param {String} A 
 * @param {String} B 
 * 
 * This is the faster implementation because there is significantly fewer iterations and we are only doing one set of comparisons against B
 * O(n+m) to get the characters
 */
function processStringsHashMap (A, B) {
	var hashmap = {}
	for (var i = 0; i< A.length;i++) {
		if (hashmap[A[i]]) {
			hashmap[A[i]]++
		} else {
			hashmap[A[i]] = 1
		}
	}
	for(var i = 0; i< B.length; i++)  {
		if(hashmap[B[i]]) {
			delete hashmap[B[i]]
		}
	}
	return hashmap
}