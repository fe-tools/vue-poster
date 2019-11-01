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
    image.onerror = () => {
      console.warn(`[vue-poster]: Failed to load image at ${src}`)
    }
    image.src = src
  })
}
