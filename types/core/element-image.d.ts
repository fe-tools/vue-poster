import { Element, DrwaElement } from './element';
declare type ImageConfig = {
    width?: number;
    height?: number;
    offsetX: number;
    offsetY: number;
    src: string;
    cors?: boolean;
};
declare const drwaImage: DrwaElement<ImageConfig>;
export default drwaImage;
export declare type ImageComponent = Element & ImageConfig;
