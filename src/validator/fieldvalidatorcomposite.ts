import {IFieldValidator, ObservableFieldValidator} from "./fieldvalidator";
import {forEach} from "lodash";
import {IListener} from "../observable/observable";

export class FieldValidatorComposite implements IFieldValidator, IListener{
    private readonly validators: IFieldValidator[];
    private readonly errors: string[];

    constructor() {
        this.validators = [];
        this.errors = [];
    }

    public add(validator: ObservableFieldValidator): void{
        validator.subscribe(this);
        this.validators.push(validator);
    }

    public valid(): boolean {
        let success = true;
        forEach(this.validators, (validator: IFieldValidator) => {
            if(!validator.valid()){
                this.errors.push(<string>validator.getError())
                success = false;
            }
        });
        return success;
    }

    public getError(): string[] {
        return this.errors;
    }

    public handleElement(element: JQuery<HTMLElement>): void {
        for(const validator of this.validators){
            validator.handleElement(element);
        }
    }

    public notifyChanged(observable: any): void {
        console.log(observable);
    }
}
