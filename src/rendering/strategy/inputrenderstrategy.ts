import {NitroField} from "../../form/nitrofield";

export interface IInputRenderStrategy {
    renderInput(field: NitroField): JQuery;
}
