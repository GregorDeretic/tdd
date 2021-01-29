var assert = require("chai").assert;
var expect = require("chai").expect;

// Put your CUT here
class StringSplitter
{
    splitString( stringToSplit )
    {
        var result = null;
        
        if (stringToSplit.length < 1)
            result = []

        return result;
    }
}

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
});