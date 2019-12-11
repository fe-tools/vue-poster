import { TextPluginHandler } from '../text'

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

  const characters = props?.nowrap
    ? [props.character]
    : text.split(/(\b[a-zA-Z\d]+\b|\s+|.)/)

  next(characters, props)
}
