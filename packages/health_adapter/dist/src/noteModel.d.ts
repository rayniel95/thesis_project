import { Model } from './util';
import { Note } from './note.model';
export declare class NoteModel extends Model {
    createNote(noteId: number, pacientIdentifier: number, noteDate: Date, noteTitle: string, noteText: string): Promise<Note>;
    getOneNote(noteId: number): Promise<Note>;
    getAllNotes(): Promise<Note[]>;
    getPacientNotes(pacientId: number): Promise<Note[]>;
}
