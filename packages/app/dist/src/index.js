"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const admin_bro_1 = tslib_1.__importDefault(require("admin-bro"));
const AdminBroExpress = tslib_1.__importStar(require("admin-bro-expressjs"));
const express_1 = tslib_1.__importDefault(require("express"));
const admin_bro_sequelizejs_1 = require("admin-bro-sequelizejs");
const express_formidable_1 = tslib_1.__importDefault(require("express-formidable"));
const models = tslib_1.__importStar(require("./sequelize/models"));
admin_bro_1.default.registerAdapter({ Database: admin_bro_sequelizejs_1.Database, Resource: admin_bro_sequelizejs_1.Resource });
const app = express_1.default();
app.use(express_formidable_1.default());
app.get('/', (req, res) => res.send('Hello World!'));
const adminBro = new admin_bro_1.default({
    rootPath: '/admin',
    databases: [models]
});
const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);
function run() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        app.listen(8080, () => console.log(`Example app listening on port 8080!`));
    });
}
run();
//# sourceMappingURL=index.js.map