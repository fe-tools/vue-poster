import Vue from 'vue';
declare type Dispatch = (vm: Vue, componentName: string, eventName: string, payload: () => Promise<void>) => void;
export declare const dispatch: Dispatch;
export {};
