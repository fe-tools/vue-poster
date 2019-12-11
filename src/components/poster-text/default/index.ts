import { TextPluginHandler } from '../text'

export const handleDefaultText: TextPluginHandler = (vnode, next) => {
  const text = vnode.text?.trim() ?? ''

  const characters = text.split(/(\b[a-zA-Z\d]+\b|\s+|.)/)

  next(characters)
}
