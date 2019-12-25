import { TextPluginHandler } from '../text'
import { getVNodeBooleanProps } from '../../../utils'

interface TextInlineConfig {
  color?: string
  font?: string
  character: string
  nowrap: boolean
}

export const handleInlineText: TextPluginHandler = (vnode, next) => {
  const options = vnode.componentOptions
  const props = options?.propsData as TextInlineConfig
  const text = options?.children?.[0].text?.trim() ?? ''

  const nowrap = getVNodeBooleanProps(props, 'nowrap')

  const characters = nowrap ? [text] : text.split(/(\b[a-zA-Z\d]+\b|\s+|.)/)

  next(characters, props)
}
