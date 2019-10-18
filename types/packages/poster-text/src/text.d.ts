import { ElementHandler } from '../../../utils/type';
declare type TextConfig = {
    offsetX: number;
    offsetY: number;
    text: string;
    color?: string;
    font?: string;
};
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
