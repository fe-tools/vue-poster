import Vue, { VNode } from 'vue';
export declare const getVueComponentName: (vnode: Vue) => string | undefined;
export declare const isVueComponentVNode: (vnode: VNode) => boolean;
export declare const formateObject: (obj?: {}) => any;
export declare function imageLoader(src: string, cors?: boolean): Promise<HTMLImageElement>;
