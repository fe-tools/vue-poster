import Vue from 'vue';
import { CanvasContext } from './canvas';
declare type Dispatch = (vm: Vue, componentName: string, eventName: string, payload: (canvas: CanvasContext) => Promise<void>) => void;
export declare const dispatch: Dispatch;
export {};
