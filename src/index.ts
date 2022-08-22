import {Min, Max, Numerical} from "./decorator/validators";
import {NitroForm, Id, DisplayName} from "./decorator/form";
import {NitroFormRegistry} from "./core/entry";

@NitroForm("TestForm")
export class TestClass{
    @Min(3)
    @Max(8)
    @Id("TestId")
    @DisplayName("Test Property")
    private testProperty: number;

    @Min(4)
    @Max(7)
    @Id("TestIdTwo")
    @DisplayName("Another Property")
    private anotherProperty: number;

    @Min(4)
    @Max(7)
    @Id("TestIdThree")
    @DisplayName("More Property")
    private moreProperty: number;

    @Numerical()
    @DisplayName("I am a number!")
    private iAmANumber: string;

    constructor() {
        this.testProperty = 0;
        this.anotherProperty = 0;
        this.moreProperty = 0;
        this.iAmANumber = "";
    }
}

let test = new TestClass();
NitroFormRegistry.register(test);
