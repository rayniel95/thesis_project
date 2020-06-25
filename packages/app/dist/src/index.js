"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const admin_bro_1 = tslib_1.__importDefault(require("admin-bro"));
const AdminBroExpress = tslib_1.__importStar(require("admin-bro-expressjs"));
const express_1 = tslib_1.__importDefault(require("express"));
const admin_bro_sequelizejs_1 = require("admin-bro-sequelizejs");
const express_formidable_1 = tslib_1.__importDefault(require("express-formidable"));
const models = tslib_1.__importStar(require("./models"));
admin_bro_1.default.registerAdapter({ Database: admin_bro_sequelizejs_1.Database, Resource: admin_bro_sequelizejs_1.Resource });
const app = express_1.default();
app.use(express_formidable_1.default());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const users = yield models.HealthProffesional.findAll({ limit: 10 });
    res.send(users);
}));
app.post('/users', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const user = yield models.HealthProffesional.create({
        name: 'ffefef',
        speciality: 'dd'
    });
    res.send(user);
}));
const adminBro = new admin_bro_1.default({
    databases: [models],
    rootPath: '/admin',
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