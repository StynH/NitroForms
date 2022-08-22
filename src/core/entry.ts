import {NitroFormMetadata} from "../form/nitroformmetadata";
import {NitroFormsRenderer} from "../rendering/renderer";

export abstract class NitroFormRegistry{
    private static forms: NitroFormMetadata[] = [];

    public static register(obj: any): void{
        this.forms.push(obj.nitroform);
    }

    public static build(): void {
        const renderer = new NitroFormsRenderer();
        for(const metadata of NitroFormRegistry.forms){
            renderer.renderNitroFormFromMetadata(metadata);
        }
    }
}
//@ts-ignore
window.NitroFormRegistry = NitroFormRegistry;
