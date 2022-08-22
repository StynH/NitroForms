import {IInputRenderStrategy} from "./inputrenderstrategy";
import {NitroField} from "../../form/nitrofield";

export class NumberBoxRenderStrategy implements IInputRenderStrategy{
    public renderInput(field: NitroField): JQuery {
        const input = $(`<input type="${field.type}" id="${field.id}" name="${field.name}" class="nitro-form-element">`);
        field.validators.handleElement(input);
        return input;
    }
}
