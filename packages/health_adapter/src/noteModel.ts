import { Model } from './util';
import {Note} from './note.model'
import { Pacient } from './pacient.model';


export class NoteModel extends Model {

    public async createNote(
        noteId: number, pacientIdentifier: number, noteDate: Date, 
        noteTitle: string, noteText: string
    ): Promise<Note> {
        return await this.create<Note>(
            Note, noteId.toString(), pacientIdentifier.toString(), 
            noteDate.toString(), noteTitle, noteText
        )
    }

    public async getOneNote(noteId: number): Promise<Note> {
        return await this.getOne<Note>(Note, noteId)
    }

    public async getAllNotes(): Promise<Note[]> {
        return await this.getAll<Note>(Note)
    }

    public async getPacientNotes(pacientId: number): Promise<Note[]> {
        return await this.getOwnerSome<Pacient, Note>(Pacient, Note, pacientId)
    }
}