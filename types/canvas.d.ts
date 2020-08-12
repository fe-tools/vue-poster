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
export declare type InjectCxtToHandler = (canvas: CanvasContext) => ReturnType<ElementHandler>;
export declare function initCanvas(configs: CanvasConfig): CanvasContext;
export declare function canvasToDataURL(canvas: CanvasContext, type: string, quality: number): string;
export {};
