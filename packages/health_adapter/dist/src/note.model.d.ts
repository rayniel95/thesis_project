import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Note extends ConvectorModel<Note> {
    readonly type = "io.worldsibu.note";
    readonly rol = "nota";
    noteId: number;
    pacientIdentifier: number;
    noteDate: string;
    noteTitle: string;
    noteText: string;
}
