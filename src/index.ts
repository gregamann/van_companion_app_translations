import global from './global'
import nodes from './nodes'

export const languages = ['en', 'fr'] as const

export const translations = {
  global,
  ...nodes,
}
