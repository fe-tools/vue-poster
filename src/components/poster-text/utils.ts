export const getFontSize = (style: string) => {
  const fontSize = style.match(/\b([\d]+)[a-zA-Z]+\b/)?.[1]
  if (!fontSize) {
    /* prettier-ignore */
    throw Error(`[vue-poster]: Font attribute '${style}' must include font size`)
  }
  return Number(fontSize)
}

export const calcCharacterSize = (
  context: CanvasRenderingContext2D,
  globalFont: string,
  character: string,
  font?: string
) => {
  context.font = font || globalFont
  return context.measureText(character).width
}
