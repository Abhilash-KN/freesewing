import Godet from './godet'
import Noextra from './noextra'

export default part => {
    let { store, options } = part.shorthand()

    if (options.skirttype === 'godet') return Godet(part)
    else if (options.skirttype === 'aline') return Noextra(part)
    else if (options.skirttype === 'basicsingledarted') return Noextra(part)
}
