const { removeNamesWithX } = require('../app');

const tableNames1 = ["Momo","Hadji","Leo"];
const tableNames2 = ["DMX","Xzibit","JeanKevin"];
const tableNames3 = ["JC","Leo","xena"];

describe("test remove names with x function", () => {
    it("should return tableNames1", () => {
        expect(removeNamesWithX(tableNames1)).toEqual(tableNames1);
    });
});