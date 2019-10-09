import { VueConstructor } from 'vue'

type LoadingConfig = {
  color: string,
  backgroundColor: string
}

export type LoadingComponent = LoadingConfig & VueConstructor
