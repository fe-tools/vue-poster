import Vue, { ComponentOptions } from 'vue';
export declare const PluginMixin: (element: string) => ComponentOptions<Vue, import("vue/types/options").DefaultData<Vue>, import("vue/types/options").DefaultMethods<Vue>, import("vue/types/options").DefaultComputed, import("vue/types/options").PropsDefinition<Record<string, any>>, Record<string, any>>;
declare type ElementMixin = () => ComponentOptions<Vue>;
export declare const elementMixin: ElementMixin;
export {};
