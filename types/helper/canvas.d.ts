interface CanvasProperty {
    width?: number;
    height?: number;
    ratio?: number;
    backgroundColor?: string;
}
declare type CreateCanvas = (config: CanvasProperty) => void;
declare type CanvasToDataURL = (type?: string, quality?: number) => string;
export declare const canvasElement: HTMLCanvasElement;
export declare const canvasContext: CanvasRenderingContext2D | null;
export declare let canvasRatio: number;
export declare const createCanvas: CreateCanvas;
export declare const canvasToDataURL: CanvasToDataURL;
export {};
