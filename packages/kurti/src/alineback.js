export default function(part) {
    let { Point, points, Path, paths, measurements, options } = part.shorthand();
    const inch = 25.4;

//importing basic back

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.backHipArc + options.manipulateHem, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.backHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.naturalWaist / 4 + inch / 8 + options.frontDartWidth*1.5,0);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.topRight = points.origin.shift(0, measurements.backHipArc);
  points.bottomRight = points.topRight.shift(-90, measurements.length);


  // Dart Points
  points.leftDartC = points.origin.shift(0, measurements.bustSpan / 2);
points.leftDartR = points.leftDartC.shift(0,options.frontDartWidth/2);
points.leftDartL = points.leftDartC.shift(180,options.frontDartWidth/2);
points.leftDartPoint = points.leftDartC.shift(-90, options.frontLeftDartLength);
points.rightDartL = points.leftDartR.shift(0,options.dartGap);
points.rightDartR = points.rightDartL.shift(0,options.frontDartWidth/2);
points.rightDartC = points.rightDartL.shift(0,options.frontDartWidth/4);
points.rightDartPoint = points.rightDartC.shift(-90, options.frontRightDartLength);

//aline

  //copyting points
  points.slashstart = points.origin.translate(-points.rightDartPoint.dx(points.origin),measurements.length);
  points.rHemcopy = points.rHem.copy();
  points.rHipcopy = points.rHip.copy();
  points.cp2copy = points.rHipcopy.shift(-90, points.rHipcopy.dy(points.rHem) / 2.5);
  points.cp1copy = points.rHipcopy.shift(90, -points.rHipcopy.dy(points.origin) / 2);
  points.rWaistcopy = points.rWaist.copy();
  
  points.slashend = points.slashstart.copy();

  points.rotationcenter = points.rightDartPoint.shift(-90,inch*(1/8));
  let rotationangle = points.rightDartPoint.angle(points.rightDartL) - points.rightDartPoint.angle(points.rightDartR);

  //rotating
  points.slashend = points.slashend.rotate(rotationangle,points.rotationcenter);
  points.rHemcopy = points.rHemcopy.rotate(rotationangle,points.rotationcenter);
  points.rHipcopy = points.rHipcopy.rotate(rotationangle,points.rotationcenter);
  points.cp2copy = points.cp2copy.rotate(rotationangle,points.rotationcenter);
  points.cp1copy = points.cp1copy.rotate(rotationangle,points.rotationcenter);
  points.rWaistcopy = points.rWaistcopy.rotate(rotationangle,points.rotationcenter);
  points.rWaistcopy = points.rWaistcopy.shift(-90,points.rWaistcopy.dy(points.origin));

  //paths
  paths.seam = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.slashstart)
    .curve(points.bottomRight,points.rHemcopy,points.rHemcopy)
    ._curve(points.cp2copy, points.rHipcopy)
    ._curve(points.cp1copy, points.rWaistcopy)

  paths.waistCurve = new Path()
    .move(points.origin)
    .line(points.leftDartL)
    .line(points.rightDartL)
    .line(points.rWaistcopy)

  paths.leftDart = new Path()
    .move(points.leftDartL)
    .line(points.leftDartPoint)
    .line(points.leftDartR)
  paths.dartfold = new Path()
    .move(points.leftDartPoint)
    .line(points.seven)
    .attr("class", "lining dashed");

  paths.seamnew = new Path()
    .move(points.rWaistcopy)
    .line(points.nine)
  paths.frontdart = new Path()
    .move(points.eightL)
    .line(points.seven)
    .line(points.eightR)
    points.nineref = points.rWaistcopy.shiftTowards(points.nine,points.nine.dy(points.origin)*0.1)
    points.ninerefcp = points.rWaistcopy.shift(90,points.nineref.dy(points.origin)*0.5);
    paths.ref = new Path()
    .move(points.rWaistcopy)
    .curve(points.cp1copy,points.rHipcopy,points.rHipcopy)
    .setRender(false);
    points.rWaistcopyref = paths.ref.shiftFractionAlong(0.08);
    points.rWaistcopyrefcp = points.rWaistcopy.shift(-65,points.origin.dy(points.rWaistcopyref)*0.5)
    paths.true = new Path()
    .move(points.nineref)
    .curve(points.ninerefcp,points.rWaistcopyrefcp,points.rWaistcopyref)
    .attr("class", "lining dashed");

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