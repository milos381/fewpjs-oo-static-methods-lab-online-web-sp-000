describe( "Formatter", () => {
  describe( "capitalize", () => {
    it( "is a static method", () => {
      expect( Formatter.capitalize( "crocodile" ) ).to.not.throw
    } )
 
    it( "uppercases the first letter in a String", () => {
      expect( Formatter.capitalize( "a" ) ).to.equal( "A" )
      expect( Formatter.capitalize( "alligator" ) ).to.equal( "Alligator" )
      expect( Formatter.capitalize( "BURSTING BALLOON" ) ).to.equal( "BURSTING BALLOON" )
    } )
  } )
 
  describe( "sanitize", () => {
    it( "is a static method", () => {
      expect( Formatter.sanitize( "C catching colds" ) ).to.not.throw
    } )
 
    it( "removes non-alphanumeric characters except for dash, single quote and space", () => {
      expect( Formatter.sanitize( "c" ) ).to.equal( "c" )
      expect( Formatter.sanitize( "!" ) ).to.equal( "" )
      expect( Formatter.sanitize( "ca$@#tching cold" ) ).to.equal( "catching cold" )
      expect( Formatter.sanitize( "Doin' Dishes" ) ).to.equal( "Doin' Dishes" )
      expect( Formatter.sanitize( "Entert*ain(i{ng-Elephan^ts" ) ).to.equal( "Entertaining-Elephants" )
    } )
  } )
 
  describe( "titleize", () => {
    it( "is a static method", () => {
      expect( Formatter.titleize( "F forever foolish" ) ).to.not.throw
    } )
 
    it( "capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'", () => {
      expect( Formatter.titleize( "getting giggles" ) ).to.equal( "Getting Giggles" )
      expect( Formatter.titleize( "where the wild things are" ) ).to.equal( "Where the Wild Things Are" )
      expect( Formatter.titleize( "chicken soup with rice and a few other songs" ) ).to.equal( "Chicken Soup With Rice and a Few Other Songs" )
      expect( Formatter.titleize( "Maurice a an but of and for at by from end" ) ).to.equal( "Maurice a an but of and for at by from End" )
    } )
 
    it( "always capitalizes the first word", () => {
      expect( Formatter.titleize( "a tale of two cities" ) ).to.equal( "A Tale of Two Cities" )
      expect( Formatter.titleize( "in the night kitchen" ) ).to.equal( "In the Night Kitchen" )
    } )
  } )
 
  describe( "doubler", () => {
    it( "is a static method", () => {
      expect( Formatter.doubler( [1,5,8] ) ).to.not.throw
    } )
 
    it( "doubles each number within the array", () => {
      expect( Formatter.doubler( [1, 2, 3, 4] ) ).to.eql( [2, 4, 6, 8] )
      expect( Formatter.doubler( [10, 20, 30, 40 ] ) ).to.eql( [20, 40, 60, 80] )
      expect( Formatter.doubler( [365, 520, 450 ] ) ).to.eql( [730, 1040, 900] )
    } )
  } )
 
  describe( "stringifyArray", () => {
    it( "is a static method", () => {
      expect( Formatter.stringifyArray( [1,3,4] ) ).to.not.throw
    } )
 
    it( "makes each number in the array a string", () => {
      expect( Formatter.stringifyArray( [1, 2, 3, 4] ) ).to.eql( ["1", "2", "3", "4"] )
      expect( Formatter.stringifyArray( [10, 20, 30, 40 ] ) ).to.eql( ["10", "20", "30", "40"] )
      expect( Formatter.stringifyArray( [365, 520, 450 ] ) ).to.eql( ["365", "520", "450"] )
    } )
  } )
 
  describe("capitalizeNames", () => {
    it( "is a static method", () => {
      expect( Formatter.capitalizeNames( ["john", "JACOB", "jinGleHeimer"] ) ).to.not.throw
    } )
 
    it("properly capitalizes each name", () => {
      expect( Formatter.capitalizeNames( ["john", "JACOB", "jinGleHeimer", "schmidt"] ) ).to.eql( ["John", "Jacob", "Jingleheimer", "Schmidt"] )
      expect( Formatter.capitalizeNames( ["dan", "WaLKeR", "california", "TEXAS", "Garth"] ) ).to.eql( ["Dan", "Walker", "California", "Texas", "Garth"] )
    })
  })
 
  describe("namesOnly", () => {
 
    const people = [
      {
        name: "Angelina Jolie",
        age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
    ]
 
    const expected = ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
 
    it( "is a static method", () => {
      expect( Formatter.namesOnly( people ) ).to.not.throw
    } )
 
    it("returns an array of the names of people", () => {
      expect( Formatter.namesOnly( people ) ).to.eql( expected )
    })
  })
 
  describe("eligibleForMatrix", () => {
 
    const people = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]
 
  const expected = ["Angelina Jolie can go to The Matrix", 
                    "Eric Jones is under age!!", 
                    "Paris Hilton is under age!!", 
                    "Kayne West is under age!!", 
                    "Bob Ziroll can go to The Matrix"]
 
    it( "is a static method", () => {
      expect( Formatter.eligibleForMatrix( people ) ).to.not.throw
    } )
 
    describe("given one needs to be 17 to enter the matrix", () => {
      it("returns an array of eligibility strings for each person entering the matrix", () => {
        expect( Formatter.eligibleForMatrix( people ) ).to.eql( expected )
      })
    })
    
  })
 
  describe("createHtml", () => {
 
    const people = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]
 
  const expected = ["<h1>Angelina Jolie</h1><h2>80</h2>", 
                    "<h1>Eric Jones</h1><h2>2</h2>", 
                    "<h1>Paris Hilton</h1><h2>5</h2>", 
                    "<h1>Kayne West</h1><h2>16</h2>", 
                    "<h1>Bob Ziroll</h1><h2>100</h2>"
  ]
 
    it("is a static method", () => {
        expect( Formatter.createHtml( people ) ).to.not.throw
      })
 
    it("returns an array of properly formatted html (names in h1 tags and titles in h2 tags)", () => {
      expect( Formatter.createHtml( people ) ).to.eql( expected )
    })
  })
 
} )