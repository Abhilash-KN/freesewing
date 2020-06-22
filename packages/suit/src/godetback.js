export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;
  // Godets other than 4 fixed ones
  let varGodets = parseInt(options.numOfGodets) / 4;
  let godetWidth = options.godetWidth;
  let godetGap = ((measurements.backHipArc + options.manipulateHem) - (godetWidth * varGodets)) / varGodets;

  if (godetWidth * varGodets > (measurements.backHipArc + options.manipulateHem)) {
    godetWidth = (0.8 * (measurements.backHipArc + options.manipulateHem)) / varGodets;
    godetGap = (0.2 * (measurements.backHipArc + options.manipulateHem)) / varGodets;
  }

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.backHipArc + options.manipulateHem, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.backHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.naturalWaist / 4 + inch / 8 + options.frontDartWidth+ options.waistgather,0);
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
  points.rightDartR = points.rightDartL.shift(0,options.frontDartWidth);
  points.rightDartC = points.rightDartL.shift(0,options.frontDartWidth/2);
  points.rightDartPoint = points.rightDartC.shift(-90, options.frontRightDartLength);
  

  paths.seam = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.rHem)
    ._curve(points.cp2, points.rHip)
    ._curve(points.cp1, points.rWaist)

    paths.waistCurve = new Path()
    .move(points.origin)
    .line(points.leftDartL)
    .line(points.rightDartL)
    .line(points.rWaist)
      
  paths.leftDart = new Path()
      .move(points.leftDartL)
      .line(points.leftDartPoint)
      .line(points.leftDartR)
  paths.dartfold = new Path()
      .move(points.leftDartPoint)
      .line(points.seven)
      .attr("class", "lining dashed");

  // Left Fixed Half Godet
  points.lFGodetTop = points.lHem.shift(90, options.godetLength);
  points.lFGodetRight = points.lFGodetTop.translate(godetWidth / 2, options.godetLength);
  points.lFGodetRightTop = points.lFGodetRight.shift(90, 0.8 * options.godetLength);
  points.lFGodetTopRcp = points.lFGodetRight.shift(90, options.godetLength);
  paths.lFGodet = new Path()
    .move(points.lFGodetTop)
    ._curve(points.lFGodetTopRcp, points.lFGodetRightTop)
    .line(points.lFGodetRight);

  // Right Fixed Half Godet
  points.rFGodetTop = points.rHem.shift(90, options.godetLength);
  points.rFGodetLeft = points.rFGodetTop.translate(-godetWidth / 2, options.godetLength);
  points.rFGodetLeftTop = points.rFGodetLeft.shift(90, 0.8 * options.godetLength);
  points.rFGodetTopLcp = points.rFGodetLeft.shift(90, options.godetLength);
  paths.rFGodet = new Path()
    .move(points.rFGodetTop)
    ._curve(points.rFGodetTopLcp, points.rFGodetLeftTop)
    .line(points.rFGodetLeft);

  // Variable Godets
  for (let i = 1; i < varGodets; i++) {
    points[`godet${i}Top`] = points.lFGodetTop.shift(0, i * (godetWidth + godetGap));
    // Left half path
    points[`godet${i}Left`] = points[`godet${i}Top`].translate(-godetWidth / 2, options.godetLength);
    points[`godet${i}LeftTop`] = points[`godet${i}Left`].shift(90, 0.8 * options.godetLength);
    points[`godet${i}TopLcp`] = points[`godet${i}Left`].shift(90, options.godetLength);
    paths[`godet${i}L`] = new Path()
      .move(points[`godet${i}Top`])
      ._curve(points[`godet${i}TopLcp`], points[`godet${i}LeftTop`])
      .line(points[`godet${i}Left`]);
    // Right half path
    points[`godet${i}Right`] = points[`godet${i}Top`].translate(godetWidth / 2, options.godetLength);
    points[`godet${i}RightTop`] = points[`godet${i}Right`].shift(90, 0.8 * options.godetLength);
    points[`godet${i}TopRcp`] = points[`godet${i}Right`].shift(90, options.godetLength);
    paths[`godet${i}R`] = new Path()
      .move(points[`godet${i}Top`])
      ._curve(points[`godet${i}TopRcp`], points[`godet${i}RightTop`])
      .line(points[`godet${i}Right`]);
  }

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