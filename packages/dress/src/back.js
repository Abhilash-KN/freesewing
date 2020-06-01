import Aline from './alineback'
import Godet from './godetback'
import Basicsingledarted from './basicsingledartedback'

export default part => {
  let { store, options } = part.shorthand()

  if (options.skirttype === 'aline') return Aline(part)
  else if (options.skirttype === 'godet') return Godet(part)
  else if (options.skirttype === 'basicsingledarted') return Basicsingledarted(part)
}
