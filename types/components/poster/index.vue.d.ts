import Vue from 'vue';
import { ElementHandler } from '../../canvas';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    elements: ElementHandler<{}>[];
    imageDate: string;
}, {
    addElementToQueue(handler: ElementHandler<{}>): void;
    drawPoster(): void;
}, unknown, {
    posterClass: string;
    width: number;
    height: number;
    ratio: number;
    type: string;
    quality: number;
    backgroundColor: string;
}>;
export default _default;
