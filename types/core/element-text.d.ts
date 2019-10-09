import { Element, DrwaElement } from './element';
declare type TextConfig = {
    offsetX: number;
    offsetY: number;
    text: string;
    color?: string;
    font?: string;
};
declare const drwaText: DrwaElement<TextConfig>;
export default drwaText;
export declare type TextComponent = Element & TextConfig;
