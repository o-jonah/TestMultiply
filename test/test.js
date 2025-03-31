
import { assert } from "chai";
import { describe, it } from "mocha";
import multiply from "../multiply.js";

describe("Multiplication function", () => {
    it("should return 1 when you multiply 1 by 1", () => {
        assert.strictEqual(multiply(1, 1), 1);
    });
    
});