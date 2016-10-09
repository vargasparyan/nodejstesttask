const assert = require('assert');
const nodejsModule = require('npm-nodejstesttask-pkg');

describe('#indexOf()', function() {
    it('should return string: 1-8', function() {
        let arr = [1,2,3,4,5,6,7,8]
        assert.equal('1-8', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,3-8', function() {
        let arr = [1,3,4,5,6,7,8]
        assert.equal('1,3-8', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,3-8,10-12', function() {
        let arr = [1,3,4,5,6,7,8,10,11,12]
        assert.equal('1,3-8,10-12', nodejsModule.arrToString(arr));
    });
    it('should return string: 1-3', function() {
        let arr = [1,2,3]
        assert.equal('1-3', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,2', function() {
        let arr = [1,2]
        assert.equal('1,2', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,2,4', function() {
        let arr = [1,2,4]
        assert.equal('1,2,4', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,2,4-6', function() {
        let arr = [1,2,4,5,6]
        assert.equal('1,2,4-6', nodejsModule.arrToString(arr));
    });
    it('should return string: 1-3,7-9,15,17,19-21', function() {
        let arr = [1,2,3,7,8,9,15,17,19,20,21]
        assert.equal('1-3,7-9,15,17,19-21', nodejsModule.arrToString(arr));
    });
    it('should return string: 1-6,100,1091,1999-2002', function() {
        let arr = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]
        assert.equal('1-6,100,1091,1999-2002', nodejsModule.arrToString(arr));
    });
    it('should return string: 1', function() {
        let arr = [1]
        assert.equal('1', nodejsModule.arrToString(arr));
    });
    it('should return string: 1,3,5,7,9,11', function() {
        let arr = [1, 3, 5, 7, 9, 11]
        assert.equal('1,3,5,7,9,11', nodejsModule.arrToString(arr));
    });
});
