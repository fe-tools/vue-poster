import Vue, { VNode } from 'vue';
export declare const getVueComponentName: (vm: Vue) => string | undefined;
export declare const getVNodeComponentName: (vnode: VNode) => string | undefined;
export declare function imageLoader(src: string, cors?: boolean): Promise<HTMLImageElement>;
