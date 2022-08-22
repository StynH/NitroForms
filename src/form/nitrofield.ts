import {FieldValidatorComposite} from "../validator/fieldvalidatorcomposite";
import {FieldType} from "./fieldtype";

export class NitroField{
    public id: string;
    public name: string;
    public displayName: string;

    public type: FieldType;
    public validators: FieldValidatorComposite;

    constructor(name: string, type: FieldType) {
        this.id = name;
        this.name = name;
        this.displayName = name;
        this.type = type;
        this.validators = new FieldValidatorComposite();
    }
}
