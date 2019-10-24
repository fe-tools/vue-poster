interface CanvasProperty {
    width?: number;
    height?: number;
    ratio?: number;
    backgroundColor?: string;
}
export interface CanvasContext {
    readonly element: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D;
    ratio: number;
}
declare type CreateCanvas = (config: CanvasProperty) => void;
declare type CanvasToDataURL = (type?: string, quality?: number) => string;
export declare const canvas: CanvasContext;
export declare const createCanvas: CreateCanvas;
export declare const canvasToDataURL: CanvasToDataURL;
export {};
