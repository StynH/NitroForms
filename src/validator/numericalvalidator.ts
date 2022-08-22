import {ObservableFieldValidator} from "./fieldvalidator";
import {errors} from "../i18n/errors";

export class NumericalValidator extends ObservableFieldValidator{
    public constructor() {
        super();
    }

    handleElement(element: JQuery<HTMLElement>): void {
        this.bindChangeListener(element);
    }

    onElementValueChanged(element: JQuery<HTMLElement>): void {
        this.clearErrors();
        if(isNaN(Number(element.val()))){
            this.errors.push(errors.numericalIsNonNumber);
        }
        this.notifyListeners();
    }
}
