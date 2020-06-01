export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;
  // Godets other than 4 fixed ones
  let varGodets = parseInt(options.numOfGodets) / 4;
  let godetWidth = options.godetWidth;
  let godetGap = ((measurements.frontHipArc + options.manipulateHem) - (godetWidth * varGodets)) / varGodets;

  if (godetWidth * varGodets > (measurements.frontHipArc + options.manipulateHem)) {
    godetWidth = (0.8 * (measurements.frontHipArc + options.manipulateHem)) / varGodets;
    godetGap = (0.2 * (measurements.frontHipArc + options.manipulateHem)) / varGodets;
  }

  // Design pattern here
  points.origin = points.one;
  points.rHem = points.origin.translate(measurements.frontHipArc + options.manipulateHem, measurements.length);
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
  let i = 1;
  // Variable Godets
  for (i = 1; i < varGodets; i++) {
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

  if(options.frontdart === 'no') {
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

    for (i = 1; i < varGodets; i++) {
      points[`godet${i}Top`] = points.lFGodetTop.shift(0, i * (godetWidth + godetGap));
      // Left half path
      points[`godet${i}Left`] = points[`godet${i}Top`].translate(-godetWidth / 2, options.godetLength);
      points[`godet${i}LeftTop`] = points[`godet${i}Left`].shift(90, 0.8 * options.godetLength);
      points[`godet${i}TopLcp`] = points[`godet${i}Left`].shift(90, options.godetLength);
      points[`godet${i}Top`]  = points[`godet${i}Top`].rotate(rotationangle,points.pivot);
      points[`godet${i}TopLcp`]  = points[`godet${i}TopLcp`].rotate(rotationangle,points.pivot);
      points[`godet${i}LeftTop`]  = points[`godet${i}LeftTop`].rotate(rotationangle,points.pivot);
      points[`godet${i}Left`]  = points[`godet${i}Left`].rotate(rotationangle,points.pivot);
      paths[`godet${i}L`] = new Path()
        .move(points[`godet${i}Top`])
        ._curve(points[`godet${i}TopLcp`], points[`godet${i}LeftTop`])
        .line(points[`godet${i}Left`]);
      // Right half path
      points[`godet${i}Top`] = points.lFGodetTop.shift(0, i * (godetWidth + godetGap));
      points[`godet${i}Right`] = points[`godet${i}Top`].translate(godetWidth / 2, options.godetLength);
      points[`godet${i}RightTop`] = points[`godet${i}Right`].shift(90, 0.8 * options.godetLength);
      points[`godet${i}TopRcp`] = points[`godet${i}Right`].shift(90, options.godetLength);
      points[`godet${i}Top`]  = points[`godet${i}Top`].rotate(rotationangle,points.pivot);
      points[`godet${i}TopRcp`]  = points[`godet${i}TopRcp`].rotate(rotationangle,points.pivot);
      points[`godet${i}RightTop`]  = points[`godet${i}RightTop`].rotate(rotationangle,points.pivot);
      points[`godet${i}Right`]  = points[`godet${i}Right`].rotate(rotationangle,points.pivot);
      paths[`godet${i}R`] = new Path()
        .move(points[`godet${i}Top`])
        ._curve(points[`godet${i}TopRcp`], points[`godet${i}RightTop`])
        .line(points[`godet${i}Right`]);  
    }
  
    points.lFGodetTop  = points.lFGodetTop.rotate(rotationangle,points.pivot);
    points.lFGodetTopRcp  = points.lFGodetTopRcp.rotate(rotationangle,points.pivot);
    points.lFGodetRight  = points.lFGodetRight.rotate(rotationangle,points.pivot);
    points.lFGodetRightTop  = points.lFGodetRightTop.rotate(rotationangle,points.pivot);
    points.rFGodetTop = points.rFGodetTop.rotate(rotationangle,points.pivot);
    points.rFGodetTopLcp  = points.rFGodetTopLcp.rotate(rotationangle,points.pivot);
    points.rFGodetLeft  = points.rFGodetLeft.rotate(rotationangle,points.pivot);
    points.rFGodetLeftTop  = points.rFGodetLeftTop.rotate(rotationangle,points.pivot);

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
      paths.lFGodet = new Path()
        .move(points.lFGodetTop)
        ._curve(points.lFGodetTopRcp, points.lFGodetRightTop)
        .line(points.lFGodetRight);
      paths.rFGodet = new Path()
        .move(points.rFGodetTop)
        ._curve(points.rFGodetTopLcp, points.rFGodetLeftTop)
        .line(points.rFGodetLeft);

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