import { VNode } from 'vue';
import { ElementHandler } from '../../canvas';
export declare type TextConfig = {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    color: string;
    font: string;
    lineHeight: number;
    border: boolean;
    vnodes?: VNode[];
};
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
