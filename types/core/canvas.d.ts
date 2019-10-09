interface CanvasProperty {
    width?: number;
    height?: number;
    ratio?: number;
    backgroundColor?: string;
}
export declare const canvasElement: HTMLCanvasElement;
export declare const canvasContext: CanvasRenderingContext2D | null;
export declare let canvasRatio: number;
export declare const setCanvasProperty: (configs: CanvasProperty) => void;
export declare const canvasToDataURL: (type: string, quality: number) => string;
export {};
