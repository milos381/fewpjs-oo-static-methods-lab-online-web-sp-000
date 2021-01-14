class Formatter {
  static capitalize(string) {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }


  // NE RAZUMEM OVU FUNKCIJU!!!!!
  // static titleize( sentence ) {
  //   let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
  //   let result = [];
  //   let arrayOfWords = sentence.split( " " )
  //   for ( let n = 0; n < arrayOfWords.length; n++ ) {
  //     if ( n == 0 ) {
  //       result.push( this.capitalize( arrayOfWords[ n ] ) )
  //     } else {
  //       if ( exceptions.includes( arrayOfWords[ n ] ) ) {
  //         result.push( arrayOfWords[ n ] )
  //       } else {
  //         result.push( this.capitalize( arrayOfWords[ n ] ) )
  //       }
  //     }

  //   }
  //   return result.join( " " );
  // }


  static titleize(string){
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    const splittedString = string.split(" ")

    const finalArray = splittedString.map(function (word) {
        if (exceptions.includes(word)) {
          return word
        } else {
          return Formatter.capitalize(word)
        }
    })
    finalArray[0] = this.capitalize(finalArray[0])
    return finalArray.join(" ")

  }
  // 1. doubleNumbers: Given an array of numbers, return a new array with each number doubled
  // 2. stringifyArray: Given an array of numbers, return a new array with those numbers as strings
  // 3. capitalizeNames: Given an array of proper nouns, return a new array with proper capitalization
  // 4. namesOnly: Given an array of people objects, return an array of their names
  // 5. eligibleForMatrix: Given an array of people object, return a list of eligibility for each person
  //     You must be at least 17 to enter the Matrix
  // 6. createHtml: Given an array of people objexts, return an array of html-ized people
  //     Names should be surrounded by h1 tags
  //     Ages should be surrounded by h2 tags
   
  static doubler(array){
    return array.map(function (number) {
      return number * 2
    })
  }
  
  static stringifyArray(array){
    return array.map(function (number) {
      return number.toString()
    })
  }
 
  static capitalizeNames(array){
    return array.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
  }
  static namesOnly(array){
    return array.map(function (obj) {
      return obj.name;
    })
  }
  static eligibleForMatrix(array){
    return array.map(function (obj) {
      if(obj.age > 17){
        return obj.name + ' can go to The Matrix'
      } else {
        return obj.name + ' is under age!!'
      }
    })
  }
  static createHtml(array){
    return array.map(function (obj) {
      return '<h1>' + obj.name + '</h1><h2>' + obj.age + '</h2>'
    })
  }
}