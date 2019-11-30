import * as shared from './shared'

export default part => {
  let {
    store,
    sa,
    Point,
    points,
    Path,
    paths,
    Snippet,
    snippets,
    options,
    measurements,
    complete,
    paperless,
    macro
  } = part.shorthand()

  // Cut arm a bit deeper at the front
  let deeper = measurements.chestCircumference * options.frontArmholeDeeper
  points.armholePitchCp1.x -= deeper
  points.armholePitch.x -= deeper
  points.armholePitchCp2.x -= deeper

  // Rename cb (center back) to cf (center front)
  for (let key of ['Shoulder', 'Armhole', 'Waist', 'Hips', 'Hem']) {
    points[`cf${key}`] = new Point(points[`cb${key}`].x, points[`cb${key}`].y)
    delete points[`cb${key}`]
  }
  // Front neckline points
  points.hpsCp2 = new Point(points.hpsCp2Front.x, points.hpsCp2Front.y)

  // Seamline
  paths.saBase = shared.saBase('front', points, Path)
  paths.seam = new Path()
    .move(points.cfNeck)
    .line(points.cfHem)
    .join(paths.saBase)
    .attr('class', 'fabric')

  // Store lengths to fit sleeve
  store.set('frontArmholeLength', shared.armholeLength(points, Path))
  store.set('frontShoulderToArmholePitch', shared.shoulderToArmholePitch(points, Path))

  // Complete pattern?
  if (complete) {
    macro('cutonfold', {
      from: points.cfNeck,
      to: points.cfHips,
      grainline: true
    })
    macro('title', { at: points.title, nr: 1, title: 'front' })
    snippets.armholePitchNotch = new Snippet('notch', points.armholePitch)
    if (sa) {
      paths.sa = paths.saBase
        .offset(sa)
        .attr('class', 'fabric sa')
        .line(points.cfNeck)
        .move(points.cfHips)
      paths.sa.line(paths.sa.start())
    }
  }

  // Paperless?
  if (paperless) {
    shared.dimensions(macro, points, Path, sa)
    macro('hd', {
      from: points.cfHips,
      to: points.hips,
      y: points.hips.y + sa + 15
    })
    macro('vd', {
      from: points.cfHips,
      to: points.cfNeck,
      x: points.cfHips.x - sa - 15
    })
    macro('hd', {
      from: points.cfNeck,
      to: points.hps,
      y: points.hps.y - sa - 15
    })
    macro('hd', {
      from: points.cfNeck,
      to: points.shoulder,
      y: points.hps.y - sa - 30
    })
  }

  return part
}
