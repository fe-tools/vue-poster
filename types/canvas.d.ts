interface CanvasConfig {
    width: number;
    height: number;
    ratio: number;
    backgroundColor: string;
}
export interface CanvasContext {
    readonly element: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D;
    ratio: number;
}
export declare type ElementHandler<T = {}> = (config: T, canvas: CanvasContext) => Promise<void>;
export declare type Handlers = Array<(canvas: CanvasContext) => ElementHandler>;
export declare const canvas: CanvasContext;
export declare function initCanvas(configs: CanvasConfig): void;
export declare function canvasToDataURL(type: string, quality: number): string;
export {};
