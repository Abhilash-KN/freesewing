import panel1ab from './panel1ab';

var panel1 = {
  draft: function(part) {

    // prettier-ignore
    let {macro, sa, points, paths, Point, Path, options, final, paperless } = part.shorthand();

    delete paths.outline;
    delete paths.panel2;
    delete paths.panel3;
    delete paths.panel4;
    delete paths.panel5;
    delete paths.panel6;

    if (options.panels === 13) return panel1ab.draft(part);

    // Final?
    if(final) {
      macro('cutonfold', {
        to: points.bottomCF,
        from: points.topCF,
        grainline: true
      });
      points.title = points.waistCF.shiftFractionTowards(points.underbustGap1Left, 0.5);
      macro('title', {
        nr: 1,
        title: '',
        at: points.title
      });
      if(sa) paths.sa = paths.panel1.offset(sa).attr('class', 'fabric sa');
    }

    // Paperless?
    if (paperless) {
      macro('vd', {
        from: points.bottomCF,
        to: points.waistCF,
        x: points.topCF.x - sa - 15
      });
      macro('vd', {
        from: points.waistCF,
        to: points.topCF,
        x: points.topCF.x - sa - 15
      });
      macro('vd', {
        from: points.hipsGap1,
        to: points.waistGap1Left,
        x: points.hipsGap1.x + sa + 15
      });
      macro('vd', {
        from: points.waistGap1Left,
        to: points.underbustGap1Left,
        x: points.hipsGap1.x + sa + 15
      });
      macro('hd', {
        from: points.bottomCF,
        to: points.hipsGap1,
        y: points.bottomCF.y + sa + 15
      });
      macro('hd', {
        from: points.topCF,
        to: points.underbustGap1Left,
        y: points.topCF.y - sa - 15
      });
      macro('ld', {
        from: points.waistCF,
        to: points.waistGap1Left
      });
    }

    return part;
  }
};

export default panel1;
