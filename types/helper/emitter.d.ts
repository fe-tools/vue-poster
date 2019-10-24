import Vue from 'vue';
declare type Dispatch = (vm: Vue, componentName: string, eventName: string, payload: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => Promise<void>) => void;
export declare const dispatch: Dispatch;
export {};
