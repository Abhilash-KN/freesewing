export default function(part) {
    let { Point, points, Path, paths,utils,measurements,options,macro } = part.shorthand();
    // Design pattern here
    const inch = 25.4;
    points.origin = new Point(0,0)
    points.rHem = points.origin.shift(-90,measurements.naturalWaistToKnee)
    points.rHip = points.origin.shift(-90,measurements.hipsCircumference/3 + inch)
    points.rWaist = points.origin.shift(-90,measurements.hipsCircumference/6)
    points.lWaist = points.rWaist.shift(180,measurements.hipsCircumference*(13/36) + inch)
    points.lHip = points.rHip.shift(180,measurements.hipsCircumference*(13/36) + inch)
    points.lHem = points.rHem.shift(180,measurements.kneeCircumference/2 + inch/2)
    points.lHipcurveref = points.lHip.shift(0,2*inch)
    points.lHipcurve = points.lHipcurveref.shiftFractionTowards(points.lHem,0.2)
    points.lHipcp1 = points.lHip.shift(0,points.lHip.dx(points.lHem)*0.03)
    points.lHipcp2 = points.lHipcurveref.shiftFractionTowards(points.lHipcurve,0.1)
    points.casingbottomleft = points.origin.shift(180,measurements.hipsCircumference/4 + inch)
    points.casingtopleft = points.casingbottomleft.shift(90,1.5*inch)
    points.casingtopright = points.origin.shift(90,1.5*inch)
    points.beltbottomleft = points.rWaist.shift(180,measurements.hipsCircumference/4 + inch)
    points.beltref = points.rWaist.shiftFractionTowards(points.casingbottomleft,0.5)
    .attr("data-text", "BELT")
    .attr("data-text-class", "center");
    points.casingref = points.origin.shiftFractionTowards(points.casingtopleft,0.5)
    .attr("data-text", "CASING")
    .attr("data-text-class", "center");
    points.origin2 = points.rHem.shift(-90,inch);
    points.rAnkle = points.origin2.shift(-90,measurements.length - measurements.naturalWaistToKnee);
    points.lAnkle = points.rAnkle.shift(180,measurements.kneeCircumference + 10*inch)
    points.origin2l = points.lAnkle.shift(90,measurements.length - measurements.naturalWaistToKnee)


    //paths
    paths.sharara = new Path()
    .move(points.rWaist)
    .line(points.rHem)
    .line(points.lHem)
    .line(points.lHipcurve)
    .curve(points.lHipcp2,points.lHipcp1,points.lHip)
    .line(points.lWaist)
    .line(points.rWaist)
    paths.belt = new Path()
    .move(points.rWaist)
    .line(points.beltbottomleft)
    .line(points.casingbottomleft)
    .line(points.origin)
    .line(points.rWaist)
    paths.casing = new Path()
    .move(points.origin)
    .line(points.casingbottomleft)
    .line(points.casingtopleft)
    .line(points.casingtopright)
    .line(points.origin)
    paths.lowersharara = new Path()
    .move(points.origin2)
    .line(points.rAnkle)
    .line(points.lAnkle)
    .line(points.origin2l)
    .line(points.origin2)

    //macros
    macro('cutonfold', {
        from: points.rHem,
        to: points.casingtopright,
        grainline: 'true',
        margin: 1.5
      })
    macro('hd', {
        from: points.origin2l,
        to: points.origin2,
        y: points.origin.dy(points.origin2) + 15,
        text: "KNEE ROUND + 10'' FOR GATHER"
      })


    // Complete?
    if (complete) {
      if (sa) {
      }
      // Paperless?
      if (paperless) {
      }
    }
    return part;
  }
  