import Vue, { VNode } from 'vue';
export declare const getVueComponentName: (vnode: Vue) => string | undefined;
export declare const isVueComponentVNode: (vnode: VNode) => boolean | undefined;
export declare const translateVNodePropsDataType: (prop: any, type: string) => any;
