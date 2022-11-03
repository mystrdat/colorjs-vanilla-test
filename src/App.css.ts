import { style } from '@vanilla-extract/css'
import Color from 'colorjs.io'

const color = new Color('#ffff33').to('hsl').toString()

console.log('vanilla-extract', color)

export const styles = style({ color })
