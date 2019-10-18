import { Element, DrawElement } from './element';
declare type ImageConfig = {
    width?: number;
    height?: number;
    offsetX: number;
    offsetY: number;
    src: string;
    cors?: boolean;
};
declare const drawImage: DrawElement<ImageConfig>;
export default drawImage;
export declare type ImageComponent = Element & ImageConfig;
