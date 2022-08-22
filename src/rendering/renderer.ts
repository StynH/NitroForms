import {NitroFormMetadata} from "../form/nitroformmetadata";
import {NitroField} from "../form/nitrofield";
import {FieldType} from "../form/fieldtype";
import {TextBoxRenderStrategy} from "./strategy/textboxrenderstrategy";
import {NumberBoxRenderStrategy} from "./strategy/numberboxrenderstrategy";

export class NitroFormsRenderer{

    public renderNitroFormFromMetadata(form: NitroFormMetadata){
        const root = this.getFormSelector(form.name);
        if(root){
            for(const field of form.fields){
                const inputBlock = this.renderInputBlock(field);
                root.append(inputBlock);
            }
        }
    }

    private getFormSelector(name: string): JQuery | undefined{
        const element = $(`nitro-form[name="${name}"]`);
        if(element.length > 0){
            element.replaceWith(`<form name="${name}"></form>`);
            return $(`form[name="${name}"]`);
        }
        return undefined;
    }

    private renderInputBlock(field: NitroField): JQuery{
        const wrapper = this.createInputWrapper();
        const label = this.createLabelFor(field);
        const input = this.createEmptyInput(field);

        wrapper.append(label);
        wrapper.append(input);
        return wrapper;
    }

    private createInputWrapper(): JQuery{
        return $('<div class="nitro-form-element"></div>');
    }

    private createEmptyInput(field: NitroField): JQuery{
        switch (field.type){
            case FieldType.NUMBER:
                return new NumberBoxRenderStrategy().renderInput(field);
            case FieldType.TEXT:
                return new TextBoxRenderStrategy().renderInput(field);
        }
    }

    private createLabelFor(field: NitroField): JQuery{
        return $(`<label for="${field.id}">${field.displayName}</label>`);
    }
}
