import { VNode } from 'vue'
import { canvas } from '../../../canvas'
import { TextConfig } from './text'
import { isVueComponentVNode, formateObject } from '../../../helper/utils'

interface TextInlineConfig {
  color?: string
  font?: string
  character: string
  nowrap: boolean
}

type TextRenderConfig = Omit<TextInlineConfig & { size: number }, 'nowrap'>

const SPLIT_RULE = /(\b[a-zA-Z\d]+\b|\s+|.)/

export function calcCharacterSize(
  config: TextConfig,
  character: string,
  font?: string
) {
  const ctx = canvas.context
  ctx.font = font || config.font
  return ctx.measureText(character).width
}

export function splitText(config: TextConfig, vnodes: VNode[]) {
  const textnodes: TextRenderConfig[] = []
  const textConfig: TextInlineConfig = {
    color: undefined,
    font: undefined,
    character: '',
    nowrap: false
  }

  vnodes.forEach(vnode => {
    if (isVueComponentVNode(vnode)) {
      const options = vnode.componentOptions
      const props = options?.propsData as TextInlineConfig
      textConfig.color = props.color
      textConfig.font = props.font
      textConfig.character = options?.children?.[0].text?.trim() ?? ''
      textConfig.nowrap = Boolean(props.nowrap)
    } else {
      textConfig.color = undefined
      textConfig.font = undefined
      textConfig.character = vnode.text?.trim() ?? ''
      textConfig.nowrap = false
    }

    // Break word
    const wordArr = textConfig.nowrap
      ? [textConfig.character]
      : textConfig.character.split(SPLIT_RULE)

    wordArr.forEach(word => {
      if (!word) return

      const node = formateObject({
        color: textConfig.color,
        font: textConfig.font,
        size: calcCharacterSize(config, word, textConfig.font),
        character: word
      })

      textnodes.push(node)
    })
  })

  return textnodes
}
