import { VNode } from 'vue';
import { TextConfig as TextContext } from '../components/poster-text/src/text';
interface TextConfig {
    color?: string;
    font?: string;
    character: string;
    nowrap: boolean;
}
declare type TextRenderConfig = Omit<TextConfig & {
    size: number;
}, 'nowrap'>;
export declare function calcCharacterSize(context: TextContext, character: string, font?: string): number;
export declare function splitText(context: TextContext, vnodes: VNode[]): TextRenderConfig[];
export {};
