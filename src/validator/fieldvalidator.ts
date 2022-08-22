import {IListener, Observable} from "../observable/observable";

export interface IFieldValidator{
    valid(): boolean;
    getError(): string | string[];
    handleElement(element: JQuery<HTMLElement>): void;
}

export abstract class BaseFieldValidator implements IFieldValidator{
    protected errors: string[]

    protected constructor() {
        this.errors = [];
    }

    public valid(): boolean {
        return this.errors.length === 0;
    }

    protected clearErrors(): void{
        delete this.errors;
        this.errors = [];
    }

    public getError(): string | string[] {
        return this.errors;
    }

    abstract handleElement(element: JQuery<HTMLElement>): void;

    abstract onElementValueChanged(element: JQuery<HTMLElement>): void;
}

export abstract class ListeningFieldValidator extends BaseFieldValidator{
    protected constructor(){
        super();
    }

    abstract handleElement(element: JQuery<HTMLElement>): void;

    abstract onElementValueChanged(element: JQuery<HTMLElement>): void;

    protected bindChangeListener(element: JQuery<HTMLElement>): void{
        const self = this;
        element.on('change', function (event: JQuery.Event){
            self.onElementValueChanged($(this));
        });
    }
}

export abstract class ObservableFieldValidator extends ListeningFieldValidator{
    public changeListener: Observable;

    protected constructor(){
        super();
        this.changeListener = new Observable(this);
    }

    public subscribe(listener: IListener): void{
        this.changeListener.subscribe(listener);
    }

    protected notifyListeners(): void{
        this.changeListener.notifyListeners();
    }
}
