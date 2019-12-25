import Vue, { VNode } from 'vue';
export declare const getVueComponentName: (vm: Vue) => string | undefined;
export declare const getVNodeComponentName: (vnode: VNode) => string | undefined;
export declare const getVNodeBooleanProps: <T extends object>(propsData: T, propName: keyof T) => boolean;
export declare function imageLoader(src: string, cors?: boolean): Promise<HTMLImageElement>;
