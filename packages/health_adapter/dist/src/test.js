"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
class algo {
}
function test() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log(bcrypt_1.default.hashSync('cosa', 10));
    });
}
test();
//# sourceMappingURL=test.js.map