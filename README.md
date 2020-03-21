# vue-poster

> 易用的海报合成组件

## Installation

```bash
yarn add @fe-tools/vue-poster
```

## Usage

```vue
<template>
  <Poster :width="375" :height="600">
    <PosterImage
      :width="375"
      :height="600"
      :offset-y="0"
      :offset-x="0"
      src="/image/path"
    />

    <PosterText>Poster</PosterText>
  </Poster>
</template>

<script>
import { Poster, PosterImage, PosterText } from '@fe-tools/vue-poster'

export default {
  components: {
    Poster,
    PosterImage,
    PosterText
  }
}
</script>
```


## Components

### Poster

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| width | Number | `300` | 宽度 |
| height | Number | `300` | 高度 |
| ratio | Number | `1` | 分辨率 |
| type | `png` \| `jpeg` | `jpeg` | 生成的图片格式 |
| quality | Number | `1` | 生成的图片质量 |
| backgroundColor | String | -- | 背景色 |
| posterClass | String | -- | 自定义类名 |

| Slot | Description |
| -- | -- |
| default | 默认插槽，放置海报组件 |
| loading | 海报渲染时的 Loading 组件 |

| Event | CallBack | Description |
| -- | -- | -- |
| on-render | `(base64: String) => void` | 监听海报渲染完成事件 |

### PosterImage

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| src | String | -- | 源文件地址 |
| width | Number | 原图宽度 | 宽度 |
| height | Number | 原图高度 | 高度 |
| offsetX | Number | `0` | 水平偏移像素 |
| offsetY | Number | `0` | 垂直偏移像素 |
| round | Boolean | `false` | 剪切成圆形 |
| cors | Boolean | `false` | 是否允许 CORS |

### PosterQRCode

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| text | String | -- | 需要转化成二维码的文本 |
| width | Number | `40` | 宽度 |
| height | Number | `40` | 高度 |
| offsetX | Number | `0` | 水平偏移像素 |
| offsetY | Number | `0` | 垂直偏移像素 |
| margin | Number | 「点」尺寸的 `2` 倍 | 二维码白边宽度 |

### PosterText

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| width | Number | `offsetX` 到海报 `right` 的距离 | 宽度 |
| height | Number | `offsetY` 到海报 `bottom` 的距离  | 高度 |
| offsetX | Number | `0` | 文本偏移像素 |
| offsetY | Number | `0` | 文本偏移像素 |
| color | String | `black` | 文字颜色 |
| font | String | `normal 400 14px sans-serif` | 文字样式 |
| lineHeight | Number | `14` | 行高 |
| textBaseline | String | `alphabetic` | 基线对齐方式 |
| textOffsetY | Number | `0` | 文本垂直偏移量 |
| border | Boolean | `false` | 是否显示边框 |

| Slot | Description |
| -- | -- |
| default | 默认插槽，放置需要渲染的文本 |

#### PosterTextInline

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| color | String | extends `PosterText` color | 文字颜色 |
| font | String | extends `PosterText` font | 文字样式 |
| nowrap | Boolean | `false` | 是否不允许换行 |

### PosterLoading

| Attribute | Type | Default | Description |
| -- | -- | -- | -- |
| color | String | `#bdbdbd` | icon 颜色 |
| backgroundColor | String | `rgba(0, 0, 0, 0.7)` | 蒙层颜色 |
