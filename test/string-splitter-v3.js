var assert = require("chai").assert;
var expect = require("chai").expect;

// put your CUT here

class StringSplitter
{
    splitString( stringToSplit )
    {
        var result = [];
        var tempResult = stringToSplit.split(',')

        if( tempResult.length > 0 )
            result = tempResult;
        
        if (stringToSplit.length < 1)
            result = []

        return result;
    }
}

// class StringSplitter
// {
//     splitString( stringToSplit )
//     {
//         var result = [];
//         var tempResult = stringToSplit.split( ',' );
//         console.log("tempResult:");
//         console.log( tempResult );
//         console.log(tempResult.length );

//         if( tempResult.length > 0 )
//             result = tempResult;

//         return result;

//     }
// }


describe('Splitting a string', function() {
    it('Input an empty string, return an empty array []', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = []
        var emptyString = "";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

    it('Input one string, return array with one item', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java"]
        var emptyString = "java";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

    it('Input two comma seperated strings, return array with two items', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java", "python"]
        var inputString = "java,python";

        // act...
        var actualResult = cut.splitString( inputString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

});