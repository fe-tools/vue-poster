import { VNode } from 'vue';
import { TextConfig } from './text';
interface TextInlineConfig {
    color?: string;
    font?: string;
    character: string;
    nowrap: boolean;
}
export declare function calcCharacterSize(config: TextConfig, character: string, font?: string): number;
export declare function splitText(config: TextConfig, vnodes: VNode[]): Pick<TextInlineConfig & {
    size: number;
}, "color" | "font" | "character" | "size">[];
export {};
