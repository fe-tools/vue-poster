import Vue, { VNode } from 'vue'

export const getVueComponentName = (vnode: Vue) => {
  return vnode.$options.name
}

export const isVueComponentVNode = (vnode: VNode) => {
  return vnode.componentOptions && vnode.componentOptions.tag !== undefined
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const translateVNodePropsDataType = (prop: any, type: string) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let propValue: any = null

  switch (type) {
    case 'boolean':
      propValue = prop === ''
      break
    default:
      propValue = prop
      break
  }
  return propValue
}
