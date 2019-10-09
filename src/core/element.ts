import Vue from 'vue'

export type Element = Vue

export type DrwaElement<T> = (config: T) => Promise<void>
