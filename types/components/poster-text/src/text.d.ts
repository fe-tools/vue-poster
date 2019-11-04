import { ElementHandler } from '../../../helper/type';
declare type TextConfig = {
    offsetX?: number;
    offsetY?: number;
    color?: string;
    font?: string;
    text: string;
};
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
