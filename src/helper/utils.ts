import Vue, { VNode } from 'vue'

export const getVueComponentName = (vnode: Vue) => {
  return vnode.$options.name
}

export const isVueComponentVNode = (vnode: VNode) => {
  return vnode.componentOptions && vnode.componentOptions.tag !== undefined
}

export const translateVNodePropsDataType = (prop: any, type: string) => {
  let propValue:any = null

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
