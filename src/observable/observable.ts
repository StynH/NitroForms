export interface IListener{
    notifyChanged(observable: any): void;
}

export class Observable{
    private readonly observableObject: any;
    private readonly listeners: IListener[];

    public constructor(observableObject: any) {
        this.observableObject = observableObject;
        this.listeners = [];
    }

    public subscribe(listener: IListener): void{
        this.listeners.push(listener);
    }

    public notifyListeners(): void{
        for(const listener of this.listeners){
            listener.notifyChanged(this.observableObject);
        }
    }
}

