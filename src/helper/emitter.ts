import Vue from 'vue'
import { CanvasContext } from '../canvas'

type Dispatch = (
  vm: Vue,
  payload: (canvas: CanvasContext) => Promise<void>
) => void

export const WRAP_COMPONENT_NAME = 'poster'
export const MOUNTED_EVENT = 'on-poster-element-mounted'

export const dispatch: Dispatch = (vm, payload) => {
  let parent = vm.$parent

  /**
   * 引用 vuejs 模版编译 cdn 与使用 SFC 的代码存在差异
   * 模版编译下 slot 组件的父级为「包裹」插槽的节点
   * SFC 下 slot 组件的父级为「包裹」插槽的父级节点
   */
  if (parent.$options.name !== WRAP_COMPONENT_NAME) {
    const siblings = parent.$children || []
    const parents = siblings.filter(
      vnode => vnode.$options.name === WRAP_COMPONENT_NAME
    )
    parent = parents[0]
  }

  if (parent) {
    parent.$emit.apply(parent, [MOUNTED_EVENT, payload])
  }
}
