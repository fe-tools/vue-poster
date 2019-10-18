import { Element, DrawElement } from './element';
declare type TextConfig = {
    offsetX: number;
    offsetY: number;
    text: string;
    color?: string;
    font?: string;
};
declare const drawText: DrawElement<TextConfig>;
export default drawText;
export declare type TextComponent = Element & TextConfig;
