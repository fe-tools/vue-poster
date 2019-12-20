import { VNode } from 'vue';
import { ElementHandler } from '../../canvas';
declare type TextConfig = {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    color: string;
    font: string;
    lineHeight: number;
    textOffsetY: number;
    textBaseline: CanvasTextBaseline;
    border: boolean;
    vnodes?: VNode[];
};
declare type Draw = (characters: string[], props?: {
    font?: string;
    color?: string;
}) => void;
export declare type TextPluginHandler = (vnode: VNode, next: Draw) => void;
declare const drawText: ElementHandler<TextConfig>;
export default drawText;
