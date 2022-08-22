import {ObservableFieldValidator} from "./fieldvalidator";
import {FieldType} from "../form/fieldtype";

export class MinValidator extends ObservableFieldValidator{
    private readonly min: number;

    public constructor(min: number) {
        super();
        this.min = min;
    }

    handleElement(element: JQuery<HTMLElement>): void {
        this.bindChangeListener(element);
        if(element.attr("type") === FieldType.NUMBER){
            element.attr("min", this.min);
        }
    }

    onElementValueChanged(element: JQuery<HTMLElement>): void {
        this.notifyListeners();
    }
}
