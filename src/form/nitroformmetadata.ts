import {NitroField} from "./nitrofield";
import {getFieldType} from "./fieldtype";

export class NitroFormMetadata{
    public name: string;
    public fields: NitroField[];

    constructor() {
        this.name = "";
        this.fields = [];
    }

    public getField(name: string): NitroField | undefined{
        return this.fields.filter(nf => nf.name === name)[0];
    }

    public createFieldIfNotExists(name: string, type: string): NitroField | undefined{
        if(this.getField(name) === undefined){
            const field = new NitroField(name, getFieldType(type));
            this.fields.push(field);
            return field;
        }
        return undefined;
    }

    public getOrCreateField(name: string, type: string): NitroField | undefined{
        let field = this.getField(name);
        if(field === undefined){
            field = this.createFieldIfNotExists(name, type);
        }
        return field;
    }

    public updateField(name: string, options: { [id: string] : any; }): void{
        const index = this.fields.findIndex(nf => nf.name === name);
        if(index >= 0){
            for (const [key, value] of Object.entries(options)) {
                // @ts-ignore
                this.fields[index][key] = value;
            }
        }
    }
}
