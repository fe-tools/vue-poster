import Vue from 'vue';
import { ImageComponent } from '../core/image';
import { TextComponent } from '../core/text';
declare type Elements = {
    type: 'image';
    vm: ImageComponent;
} | {
    type: 'text';
    vm: TextComponent;
};
declare const _default: import("vue").VueConstructor<{
    isPosterDrwaCompleted: boolean;
    elements: Elements[];
    imageDate: string;
} & {
    posterClass: string;
    width: number;
    height: number;
    ratio: number;
    type: string;
    quality: number;
    backgroundColor: string;
} & Vue>;
export default _default;
