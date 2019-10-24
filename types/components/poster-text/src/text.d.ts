import { ElementHandler } from '../../../helper/type';
declare type TextConfig = {
    offsetX: number;
    offsetY: number;
    text: string;
    color?: string;
    font?: string;
};
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
