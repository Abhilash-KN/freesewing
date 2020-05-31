import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import config from '../config'
//Parts
import draftArmhole from './armhole'
import draftArmholeback from './armholeback'
import draftNeck from './neck'
import draftNeckback from './neckback'
import draftBodicefront from './bodicefront'
import draftBodiceback from './bodiceback'
import draftFront from './front'
import draftBack from './back'
import draftExtra from './extra'
import draftAlineback from './alineback'
import draftAlinefront from './alinefront'
import draftGodetback from './godetback'
import draftGodetfront from './godetfront'
import draftGodet from './godet'
import draftBasicsingledartedback from './basicsingledartedback'
import draftBasicsingledartedfront from './basicsingledartedfront'

// Create new design
const Pattern = new freesewing.Design(config, plugins)

// Attach the draft methods to the prototype
Pattern.prototype.draftArmhole = draftArmhole
Pattern.prototype.draftArmholeback = draftArmholeback
Pattern.prototype.draftNeck = draftNeck
Pattern.prototype.draftNeckback = draftNeckback
Pattern.prototype.draftBodicefront = draftBodicefront
Pattern.prototype.draftBodiceback = draftBodiceback
Pattern.prototype.draftFront = draftFront
Pattern.prototype.draftBack = draftBack
Pattern.prototype.draftExtra = draftExtra
Pattern.prototype.draftAlineback = draftAlineback
Pattern.prototype.draftAlinefront = draftAlinefront
Pattern.prototype.draftGodetback = draftGodetback
Pattern.prototype.draftGodetfront = draftGodetfront
Pattern.prototype.draftGodet = draftGodet
Pattern.prototype.draftBasicsingledartedback = draftBasicsingledartedback
Pattern.prototype.draftBasicsingledartedfront = draftBasicsingledartedfront

export default Pattern