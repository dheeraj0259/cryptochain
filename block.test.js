const Block = require("./block");

describe("Block", () => {
    it("has a timestamp, lastHash, hash, and data property", () => {
        // arrange
        const timestamp = "test-date";
        const lastHash = "test-hash";
        const hash = "test-unique-hash";
        const data = ["testdata1", "testdata2"];
        // act
        const block = new Block({ timestamp, lastHash, hash, data });
        // assert
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    })
});