import {toLower} from "lodash";

export enum FieldType{
    TEXT = "text",
    NUMBER = "number"
}

export function getFieldType(value: any): FieldType{
    value = value != undefined ? toLower(value) : value;
    switch (value){
        case "number":
            return FieldType.NUMBER;
        case "string":
        default:
            return FieldType.TEXT;
    }
}
