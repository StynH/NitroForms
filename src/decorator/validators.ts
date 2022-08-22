import {MaxValidator} from "../validator/maxvalidator";
import {MinValidator} from "../validator/minvalidator";
import {NitroFormMetadata} from "../form/nitroformmetadata";
import {NumericalValidator} from "../validator/numericalvalidator";
import {} from 'reflect-metadata';
import 'core-js/es7/reflect';

export function Min(min: number): PropertyDecorator {
    return <(target: any, propertyKey: (string | symbol)) => void>function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata = target.nitroform || new NitroFormMetadata();
        metadata.getOrCreateField(propertyKey, Reflect.getMetadata("design:type", target, propertyKey).name).validators.add(new MinValidator(min));
        target.nitroform = metadata;
    }
}

export function Max(max: number): PropertyDecorator {
    return <(target: any, propertyKey: (string | symbol)) => void>function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata = target.nitroform || new NitroFormMetadata();
        metadata.getOrCreateField(propertyKey, Reflect.getMetadata("design:type", target, propertyKey).name).validators.add(new MaxValidator(max));
        target.nitroform = metadata;
    }
}

export function Numerical(): PropertyDecorator {
    return <(target: any, propertyKey: (string | symbol)) => void>function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata = target.nitroform || new NitroFormMetadata();
        metadata.getOrCreateField(propertyKey, Reflect.getMetadata("design:type", target, propertyKey).name).validators.add(new NumericalValidator());
        target.nitroform = metadata;
    }
}

