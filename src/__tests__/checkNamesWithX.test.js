const { removeNamesWithX } = require("../app");

const tableNames1 = ["Momo", "Hadji", "Leo"];
const tableNames2 = ["DMX", "Xzibit", "JeanKevin"];
const tableNames3 = ["JC", "Leo", "xena"];

const tableRemovedNames2 = ["JeanKevin"];
const tableRemovedNames3 = ["JC", "Leo"];

describe("test remove names with x function", () => {
    it("should return an empty table", () => {
        expect(removeNamesWithX([])).toEqual([]);
    });
    it("should return tableNames1", () => {
        expect(removeNamesWithX(tableNames1)).toEqual(tableNames1);
    });
    it("should return tableRemovedNames2", () => {
        expect(removeNamesWithX(tableNames2)).toEqual(tableRemovedNames2);
    });
    it("should not return tableNames2", () => {
        expect(removeNamesWithX(tableNames2)).not.toEqual(tableNames2);
    });
    it("should return tableRemovedNames3", () => {
        expect(removeNamesWithX(tableNames3)).toEqual(tableRemovedNames3);
    });
});
