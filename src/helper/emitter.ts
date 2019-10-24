import Vue from 'vue'
import { CanvasContext } from './canvas'

type Dispatch = (
  vm: Vue,
  componentName: string,
  eventName: string,
  payload: (canvas: CanvasContext) => Promise<void>
) => void

export const dispatch: Dispatch = (vm, componentName, eventName, payload) => {
  const parent = vm.$parent

  /**
   * 引用 vuejs 模版编译 cdn 与使用 SFC 的代码存在差异
   * 模版编译下 slot 组件的父级为「包裹」插槽的节点
   * SFC 下 slot 组件的父级为「包裹」插槽的父级节点
   */
  if (parent.$options.name === componentName) {
    // template compile
    parent.$emit.apply(parent, [eventName, payload])
  } else {
    // SFC
    const siblings = parent.$children || []
    const parents = siblings.filter(vnode => vnode.$options.name === componentName)

    if (parents[0]) {
      parents[0].$emit.apply(parents[0], [eventName, payload])
    }
  }
}
