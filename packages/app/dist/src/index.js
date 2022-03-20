"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = require("./server");
function run() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        server_1.app.listen(8080, () => console.log(`app listening on port 8080!`));
    });
}
run();
//# sourceMappingURL=index.js.map