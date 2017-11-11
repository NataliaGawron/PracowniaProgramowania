const chai = require('chai').assert;
const add = (x, y) => x + y;

describe("add function", () => {
    it("should add properly", () => {
        const expected = 4;
        chai.equal(add(2, 2), expected)
    })
})