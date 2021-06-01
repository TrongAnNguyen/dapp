export const scales = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  DANGER: 'danger',
  SUBTLE: 'subtle',
  SUCCESS: 'success',
} as const

export type Scale = typeof scales[keyof typeof scales]
export type Variant = typeof variants[keyof typeof variants]
