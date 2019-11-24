import { VNode } from 'vue'
import { ElementHandler } from '../../../helper/type'
import { splitText } from '../../../helper/text'

export type TextConfig = {
  width?: number
  height?: number
  offsetX?: number
  offsetY?: number

  color?: string
  font?: string
  lineHeight?: number
  vnodes: VNode[]

  border?: boolean
}

const FONT_SIZE_RULE = /\b([\d]+)[a-zA-Z]+\b/

const drawText: ElementHandler<TextConfig> = (config, { context, element, ratio }) => {
  const {
    offsetX = 0,
    offsetY = 0,
    width = element.width / 2,
    height = (element.height - (offsetY * ratio)) / 2,
    vnodes,
    color = 'black',
    font = 'normal 400 14px sans-serif',
    lineHeight,
    border = false
  } = config

  const textNodes = splitText(config, vnodes)

  let firstLineflag = true
  let maxHeight = 0
  let textRenderNodes = []

  const contextLineHeight = Number(font.match(FONT_SIZE_RULE)![1])
  const currentlineHeight = lineHeight || contextLineHeight

  let cacheOffset = {
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
      let fontSizeArr = 0

      try {
        fontSizeArr = Number(textNodes[i].font!.match(FONT_SIZE_RULE)![1])
      } catch(err) {
        fontSizeArr = contextLineHeight
      }

      maxHeight = Math.max(fontSizeArr, maxHeight)
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

  return new Promise((resolve) => resolve())
}

export default drawText
