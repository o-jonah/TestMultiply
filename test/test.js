
import { assert } from "chai";
import { describe, it } from "mocha";
import multiply from "../multiply.js";

describe("Multiplication function", () => {
    it("should return 1 when you multiply 1 by 1", () => {
        assert.strictEqual(multiply(1, 1), 1);
    });
    it("should return 0 when you multiply 0 by 1", () => {
        assert.strictEqual(multiply(0, 1), 0);
    });
    it("should return 0 when you multiply 0 by 0", () => {
        assert.strictEqual(multiply(0, 0), 0);
    });
    it("should return 2 when you multiply 1 by 2", () => {
        assert.strictEqual(multiply(1, 2), 2);
    });
    it("should return 6 when you multiply 3 by 3", () => {
        assert.strictEqual(multiply(3, 3), 9);
    });
    it("should return 15 when you multiply 4 by 4", () => {
        assert.strictEqual(multiply(4, 4), 16);
    });
    it("should return 20 when you multiply 23 by 45", () => {
        assert.strictEqual(multiply(23, 45), 1035);
    });
});