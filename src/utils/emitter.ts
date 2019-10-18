import Vue from 'vue'

type Dispatch = (vm: Vue, componentName: string, eventName: string, payload: () => Promise<void>) => void

export const dispatch: Dispatch = (vm, componentName, eventName, payload) => {
  const siblings = vm.$parent.$children || []
  const parent = siblings.filter(vm => vm.$options.name === componentName)

  if (parent[0]) {
    parent[0].$emit.apply(parent[0], [eventName, payload])
  }
}
