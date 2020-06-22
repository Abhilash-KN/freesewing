export default function(part) {
    let { Point, points, Path, paths,utils,measurements,options,macro } = part.shorthand();
    // Design pattern here
    const inch = 25.4;
    points.origin = new Point(0,0)
    points.rHem = points.origin.shift(-90,measurements.length)
    points.rHip = points.origin.shift(-90,measurements.hipsCircumference/3 + inch)
    points.rWaist = points.origin.shift(-90,measurements.hipsCircumference/6)
    points.lWaist = points.rWaist.shift(180,measurements.hipsCircumference/2)
    points.lHip = points.rHip.shift(180,measurements.hipsCircumference/2)
    points.lHemcopy = points.rHem.shift(180,measurements.ankleCircumference/2 + inch/2)
    points.rKnee = points.origin.shift(-90,measurements.naturalWaistToKnee)
    points.lKnee = points.rKnee.shift(180,measurements.kneeCircumference/2 + inch/2)
    if(options.placket === 'yes')
    {
      points.lHem = points.rHem.shift(180,measurements.ankleCircumference)
      points.rChuni = points.rHem.shift(-90,options.chunis)
      points.lChuni = points.rChuni.shift(180,measurements.ankleCircumference)
      macro('hd', {
        from: points.rHem,
        to: points.lHem,
        text: 'ANKLE + PLACKET',
        y: points.origin.dy(points.rHem) - 10
      }) 
      paths.ref = new Path()
      .move(points.lHemcopy)  
      .line(points.lKnee)
      .attr("class", "lining dashed");
    }
    else
    {
      points.lHem = points.rHem.shift(180,measurements.ankleCircumference/2 + inch/2)
      points.rChuni = points.rHem.shift(-90,options.chunis)
      points.lChuni = points.rChuni.shift(180,measurements.ankleCircumference/2 + inch/2)
    }
    
    points.lHipcp1 = points.lHip.shift(0,points.lHip.dx(points.lHem)*0.03)
    points.lHipcp2 = points.lKnee.shiftFractionTowards(points.lHemcopy,-0.35)
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



    //paths
    paths.salvar = new Path()
    .move(points.rWaist)
    .line(points.rHem)
    .line(points.lHem)
    .line(points.lKnee)
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
    paths.chuni = new Path()
    .move(points.rHem)
    .line(points.rChuni)
    .line(points.lChuni)
    .line(points.lHem)
    //macros
    macro('cutonfold', {
        from: points.rHem,
        to: points.casingtopright,
        grainline: 'true',
        margin: 1.5
      })
    macro('vd', {
        from: points.rHem,
        to: points.rChuni,
        text: 'CHUNIS',
        x: -15
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
  