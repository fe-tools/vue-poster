import { VNode } from 'vue'
import { ElementHandler } from '../../canvas'
import { splitText } from './split'

export type TextConfig = {
  width: number
  height: number
  offsetX: number
  offsetY: number
  color: string
  font: string
  lineHeight: number
  border: boolean
  vnodes?: VNode[]
}

const getFontSize = (style: string) => {
  const fontSize = style.match(/\b([\d]+)[a-zA-Z]+\b/)?.[1]
  if (!fontSize) {
    /* prettier-ignore */
    throw Error(`[vue-poster]: Font attribute '${style}' must include font size`)
  }
  return Number(fontSize)
}

/* prettier-ignore */
const drawText: ElementHandler<TextConfig> = (config, { context, element, ratio }) => {
  const {
    offsetX = 0,
    offsetY = 0,
    width = element.width / 2,
    height = (element.height - offsetY * ratio) / 2,
    color = 'black',
    font = 'normal 400 14px sans-serif',
    lineHeight,
    border = false,
    vnodes
  } = config

  if (!vnodes) {
    return new Promise(resolve => resolve())
  }

  const textNodes = splitText(config, vnodes)

  let firstLineflag = true
  let maxHeight = 0
  const textRenderNodes = []

  const contextLineHeight = getFontSize(font)
  const currentlineHeight = lineHeight ?? contextLineHeight

  const cacheOffset = {
    x: offsetX,
    y: offsetY
  }

  if (border) {
    context.lineWidth = 1
    context.strokeStyle = 'white'
    context.strokeRect(offsetX, offsetY, width, height)
  }

  for (let i = 0; i < textNodes.length; i++) {
    // calculate maximum font height of the first line
    if (firstLineflag) {
      const font = textNodes[i].font
      const fontSize = font ? getFontSize(font) : contextLineHeight
      maxHeight = Math.max(fontSize, maxHeight)
    }

    // break line
    if (cacheOffset.x + textNodes[i].size > width) {
      cacheOffset.x = offsetX
      cacheOffset.y += currentlineHeight
      firstLineflag = false
    }

    // stop render
    if (cacheOffset.y - offsetY + currentlineHeight > height) {
      break
    }

    textRenderNodes.push({
      color: textNodes[i].color,
      font: textNodes[i].font,
      character: textNodes[i].character,
      x: cacheOffset.x,
      y: cacheOffset.y
    })

    cacheOffset.x += textNodes[i].size
  }

  // render character
  textRenderNodes.forEach(node => {
    context.fillStyle = node.color || color
    context.font = node.font || font
    context.textBaseline = 'bottom'
    context.fillText(node.character, node.x, node.y + maxHeight)
  })

  return new Promise(resolve => resolve())
}

export default drawText
