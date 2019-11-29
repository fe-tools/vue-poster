import Vue from 'vue';
import { CanvasContext } from '../canvas';
declare type Dispatch = (vm: Vue, payload: (canvas: CanvasContext) => Promise<void>) => void;
export declare const WRAP_COMPONENT_NAME = "poster";
export declare const MOUNTED_EVENT = "on-poster-element-mounted";
export declare const dispatch: Dispatch;
export {};
