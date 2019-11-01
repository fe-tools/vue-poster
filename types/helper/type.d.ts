import { CanvasContext } from './canvas';
export declare type ElementHandler<T = {}> = (config: T, canvas: CanvasContext) => Promise<void>;
