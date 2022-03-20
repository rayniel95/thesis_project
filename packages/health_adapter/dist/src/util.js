"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const tslib_1 = require("tslib");
const fabric_network_1 = require("fabric-network");
class Model {
    constructor(connProfile, connOptions) {
        this.gateway = new fabric_network_1.Gateway();
        this.connProfile = connProfile;
        this.connOptions = connOptions;
    }
    create(type, ...params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.gateway.connect(this.connProfile, this.connOptions);
                const healthChannel = yield this.gateway.getNetwork('ch1');
                const health = healthChannel.getContract('health');
                const note = yield health.submitTransaction('health_create'.concat(type.name), ...params);
                this.gateway.disconnect();
                return new type(JSON.parse(note.toString()));
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getOne(type, identifier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.gateway.connect(this.connProfile, this.connOptions);
                const network = yield this.gateway.getNetwork('ch1');
                const contract = network.getContract('health');
                const result = yield contract.evaluateTransaction('health_getOne'.concat(type.name), identifier.toString());
                this.gateway.disconnect();
                return new type(JSON.parse(result.toString()));
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getAll(type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.gateway.connect(this.connProfile, this.connOptions);
                const network = yield this.gateway.getNetwork('ch1');
                const contract = network.getContract('health');
                const result = yield contract.evaluateTransaction('health_getAll'.concat(type.name));
                this.gateway.disconnect();
                return JSON.parse(result.toString()).map((properties) => new type(properties));
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getOwnerSome(type, type1, ownerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.gateway.connect(this.connProfile, this.connOptions);
                const network = yield this.gateway.getNetwork('ch1');
                const contract = network.getContract('health');
                const result = yield contract.evaluateTransaction('health_get'.concat(type.name).concat(type1.name), ownerId.toString());
                this.gateway.disconnect();
                return JSON.parse(result.toString()).map((properties) => new type1(properties));
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getOneByEmail(type, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.gateway.connect(this.connProfile, this.connOptions);
                const network = yield this.gateway.getNetwork('ch1');
                const contract = network.getContract('health');
                const result = yield contract.evaluateTransaction('health_getOne'.concat(type.name).concat('ByEmail'), email);
                this.gateway.disconnect();
                return new type(JSON.parse(result.toString()));
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.Model = Model;
//# sourceMappingURL=util.js.map