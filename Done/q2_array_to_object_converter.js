/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (arr) =>{
    function convert(arr, key) {
        output = {};
        arr.forEach(function(item) {
          output[item[key]] = item;
        })
        console.log(output)
        
        return output
      }
      
      convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
}
convert();
	  
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }

}
*/


module.exports = convert;