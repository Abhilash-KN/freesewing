export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.frontHipArc + options.manipulateHem, measurements.length);
  points.rHem = points.rHem.shift(-90,inch/2);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.frontHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.naturalWaist / 4 + inch / 8 + options.frontDartWidth,0);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.topRight = points.origin.shift(0, measurements.frontHipArc);
  points.bottomRight = points.topRight.shift(-90, measurements.length);


  // Dart points
  points.leftDartC = points.origin.shift(0, measurements.bustSpan / 2);
  points.leftDartR = points.leftDartC.shift(0,options.frontDartWidth/2);
  points.leftDartL = points.leftDartC.shift(180,options.frontDartWidth/2);
  points.leftDartPoint = points.leftDartC.shift(-90, options.frontLeftDartLength);
  points.rightDartL = points.leftDartR.shift(0,options.dartGap);
  points.rightDartR = points.rightDartL.shift(0,options.frontDartWidth);
  points.rightDartC = points.rightDartL.shift(0,options.frontDartWidth/2);
  points.rightDartPoint = points.rightDartC.shift(-90, options.frontRightDartLength);
  

  paths.seam = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.rHem)
    ._curve(points.cp2, points.rHip)
    ._curve(points.cp1, points.rWaist)

  paths.leftDart = new Path()
    .move(points.leftDartL)
    .line(points.leftDartPoint)
    .line(points.leftDartR)
  paths.dartfold = new Path()
    .move(points.leftDartPoint)
    .line(points.seven)
    .attr("class", "lining dashed");
  
  paths.waistCurve = new Path()
  .move(points.origin)
  .line(points.leftDartL)
  .line(points.rightDartL)
  .line(points.rWaist)

  if (options.frontdart === 'no') {
    paths.seamnew = new Path()
      .move(points.rWaist)
      .line(points.nine)
    paths.frontdart = new Path()
      .move(points.eightL)
      .line(points.seven)
      .line(points.eightR)
      points.nineref = points.rWaist.shiftTowards(points.nine,points.nine.dy(points.origin)*0.1)
      points.ninerefcp = points.rWaist.shift(90,points.nineref.dy(points.origin)*0.5);
      paths.ref = new Path()
      .move(points.rWaist)
      .curve(points.cp1,points.rHip,points.rHip)
      .setRender(false);
      points.rWaistcopyref = paths.ref.shiftFractionAlong(0.08);
      points.rWaistcopyrefcp = points.rWaist.shift(-65,points.origin.dy(points.rWaistcopyref)*0.5)
      paths.true = new Path()
      .move(points.nineref)
      .curve(points.ninerefcp,points.rWaistcopyrefcp,points.rWaistcopyref)
      .attr("class", "lining dashed");
  }
  else{
    let dartreduction = Math.abs(points.eightrnew.dx(points.eightl)-points.eightR.dx(points.eightL));
    points.rWaist = points.origin.translate(measurements.naturalWaist / 4 + inch / 8 + options.frontDartWidth- dartreduction ,0);
    points.leftDartR = points.leftDartR.shift(180,dartreduction);
    let rotationangle = points.eightrnew.angle(points.pivot) - points.eightr.angle(points.pivot) ;
    //rotating points
    points.rHem = points.rHem.rotate(rotationangle,points.pivot);
    points.lHem = points.lHem.rotate(rotationangle,points.pivot);
    points.rHip = points.rHip.rotate(rotationangle,points.pivot);
    points.rWaist = points.rWaist.rotate(rotationangle,points.pivot);
    points.cp1 = points.cp1.rotate(rotationangle,points.pivot);
    points.cp2 = points.cp2.rotate(rotationangle,points.pivot);
  
      
      paths.seam = new Path()
        .move(points.origin)
        .line(points.lHem)
        .line(points.rHem)
        ._curve(points.cp2, points.rHip)
        ._curve(points.cp1, points.rWaist)
        
      paths.leftDart = new Path()
        .move(points.leftDartL)
        .line(points.leftDartPoint)
        .line(points.leftDartR)
      paths.waistCurve = new Path()
        .move(points.origin)
        .line(points.leftDartR)
        .line(points.rWaist)
      paths.frontrotated = new Path()
        .move(points.armbottomcopy)
        .line(points.rWaist)
        .line(points.eightrnew)
        .line(points.pivot)
        .line(points.eightl)
        .line(points.cf)
      
      points.waistdartfoldref = points.leftDartR.shiftFractionTowards(points.leftDartL,0.5);
      paths.waistdartfold = new Path()
        .move(points.leftDartPoint)
        .line(points.waistdartfoldref)
        .line(points.seven)
        .attr("class", "lining dashed");
        points.nineref = points.rWaist.shiftTowards(points.armbottomcopy,points.nine.dy(points.origin)*0.1)
        points.ninerefcp = points.rWaist.shift(90,points.nineref.dy(points.origin)*0.5);
        paths.ref = new Path()
        .move(points.rWaist)
        .curve(points.cp1,points.rHip,points.rHip)
        .setRender(false);
        points.rWaistcopyref = paths.ref.shiftFractionAlong(0.08);
        points.rWaistcopyrefcp = points.rWaist.shift(-65,points.origin.dy(points.rWaistcopyref)*0.5)
        paths.true = new Path()
        .move(points.nineref)
        .curve(points.ninerefcp,points.rWaistcopyrefcp,points.rWaistcopyref)
        .attr("class", "lining dashed");
      paths.dartfold.setRender(false);
      
    }

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