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


}