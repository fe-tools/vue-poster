import Vue, { VNode } from 'vue'

export const getVueComponentName = (vm: Vue) => {
  return vm.$options.name
}

export const getVNodeComponentName = (vnode: VNode) => {
  return vnode.componentOptions?.Ctor?.options?.name
}

export function imageLoader(
  src: string,
  cors?: boolean
): Promise<HTMLImageElement> {
  const image = new Image()

  if (cors) {
    image.crossOrigin = 'anonymous'
  }

  return new Promise(resolve => {
    image.onload = () => resolve(image)
    /* prettier-ignore */
    image.onerror = () => console.warn(`[vue-poster]: Failed to load image at ${src}`)
    image.src = src
  })
}
