import { colors } from 'quasar'

const { luminosity } = colors

export default (color) => {
  return luminosity(color) > 0.4
}
