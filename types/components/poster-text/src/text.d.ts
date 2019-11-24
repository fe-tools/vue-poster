import { VNode } from 'vue';
import { ElementHandler } from '../../../helper/type';
export declare type TextConfig = {
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
    color?: string;
    font?: string;
    lineHeight?: number;
    vnodes: VNode[];
    border?: boolean;
};
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
