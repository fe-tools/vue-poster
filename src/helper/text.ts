import { VNode } from 'vue'
import { canvas } from './canvas'
import { TextConfig as TextContext } from '../components/poster-text/src/text'
import { isVueComponentVNode, translateVNodePropsDataType } from './utils'

interface TextConfig {
  color?: string
  font?: string
  character: string
  nowrap: boolean
}

type TextRenderConfig = Omit<TextConfig & {
  size: number
}, 'nowrap'>

const SPLIT_RULE = /(\b[a-zA-Z\d]+\b|\s+|.)/

export function calcCharacterSize(context: TextContext, character: string, font?: string): number {
  const ctx = canvas.context
  ctx.font = font || context.font!
  return ctx.measureText(character).width
}

export function splitText(context: TextContext, vnodes: VNode[]): TextRenderConfig[] {
  let textnode: TextRenderConfig[] = []

  let color: TextConfig['color'] = undefined
  let font: TextConfig['font'] = undefined
  let character: TextConfig['character'] = ''
  let nowrap: TextConfig['nowrap'] = false

  vnodes.forEach(vnode => {
    if (isVueComponentVNode(vnode)) {
      const props = vnode.componentOptions!.propsData
      color = props && (props as TextConfig).color
      font = props && (props as TextConfig).font
      character = (vnode.componentOptions!.children![0].text!).trim()
      nowrap = props && translateVNodePropsDataType((props as TextConfig).nowrap, 'boolean')
    } else {
      color = undefined
      font = undefined
      character = vnode.text!.trim()
      nowrap = false
    }

    // Break word
    const arr = nowrap ? [ character ] : character.split(SPLIT_RULE)

    arr.forEach(item => {
      if (!item) return
      textnode.push(JSON.parse(JSON.stringify({
        color: color,
        font: font,
        size: calcCharacterSize(context, item, font),
        character: item
      })))
    })
  })

  return textnode
}
