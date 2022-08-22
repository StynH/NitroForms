import {NitroFormMetadata} from "../form/nitroformmetadata";

export function NitroForm(name: string): ClassDecorator {
    return function(constructor: Function){
        constructor.prototype.nitroform = constructor.prototype.nitroform || new NitroFormMetadata();
        constructor.prototype.nitroform.name = name;
    }
}

export function Id(id: string): PropertyDecorator {
    return <(target: any, propertyKey: (string | symbol)) => void>function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata = target.nitroform || new NitroFormMetadata();
        metadata.createFieldIfNotExists(propertyKey, Reflect.getMetadata("design:type", target, propertyKey).name);
        metadata.updateField(propertyKey, {id: id});
        target.nitroform = metadata;
    }
}

export function DisplayName(displayName: string): PropertyDecorator {
    return <(target: any, propertyKey: (string | symbol)) => void>function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata = target.nitroform || new NitroFormMetadata();
        metadata.createFieldIfNotExists(propertyKey, Reflect.getMetadata("design:type", target, propertyKey).name);
        metadata.updateField(propertyKey, {displayName: displayName});
        target.nitroform = metadata;
    }
}
