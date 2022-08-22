import {ObservableFieldValidator} from "./fieldvalidator";
import {FieldType} from "../form/fieldtype";

export class MaxValidator extends ObservableFieldValidator{
    private readonly max: number;

    public constructor(max: number) {
        super();
        this.max = max;
    }

    handleElement(element: JQuery<HTMLElement>): void {
        this.bindChangeListener(element);
        if(element.attr("type") === FieldType.NUMBER){
            element.attr("max", this.max);
        }
    }

    onElementValueChanged(element: JQuery<HTMLElement>): void {
        this.notifyListeners();
    }
}
