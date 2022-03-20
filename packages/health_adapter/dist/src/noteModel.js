"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModel = void 0;
const tslib_1 = require("tslib");
const util_1 = require("./util");
const note_model_1 = require("./note.model");
const pacient_model_1 = require("./pacient.model");
class NoteModel extends util_1.Model {
    createNote(noteId, pacientIdentifier, noteDate, noteTitle, noteText) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.create(note_model_1.Note, noteId.toString(), pacientIdentifier.toString(), noteDate.toString(), noteTitle, noteText);
        });
    }
    getOneNote(noteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOne(note_model_1.Note, noteId);
        });
    }
    getAllNotes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getAll(note_model_1.Note);
        });
    }
    getPacientNotes(pacientId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getOwnerSome(pacient_model_1.Pacient, note_model_1.Note, pacientId);
        });
    }
}
exports.NoteModel = NoteModel;
//# sourceMappingURL=noteModel.js.map