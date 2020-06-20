import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "suit",
  version,
  design: "devanshkain",
  code: "devanshkain",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    armhole:
      [
        "shoulderslopedepth", "armholecenter", "armbottomwidth",
        { armholecp: ["topcpspread", "midcp2spread", "midcp1spread", "bottomcpspread"] },
        { armtopshiftup: ["armtopshift"] },
        { armholedart: ["armholedartlength", "armholedartwidth", "frontdart", "afterdartcurvefactor"] }
      ],
    neck:
      [
        { neckcpspread: ["neckcprightspread", "neckcpbottomspread","neckcprightspreadback", "neckcpbottomspreadback"] },
        { neckcpangle: ["neckcprightangle", "neckcpbottomangle","neckcprightangleback", "neckcpbottomangleback"] },
        { neckdimensions: ["neckwidth", "neckdepthback","neckdepth"] }
      ],
    waist: [
      { waistdart:["waistdartwidth", "waistdartlength"]},
      { waistposition:["waistverticalposition", "waistgather"]}
    ],
    type: ["skirttype"],
    hem: ["manipulateHem"],
    skirt: [
      "frontLeftDartLength","frontRightDartLength","backLeftDartLength","backRightDartLength",
      "frontDartWidth","backDartWidth","naturalWaistToHip","dartGap",
      { godet: ["numOfGodets","godetWidth","godetLength"]}
    ],
    slit: ["slitlength","slit"]
  },
  measurements: ["topToWaist", "naturalWaist", "shoulderToShoulder", "naturalWaistToUnderarm",
    "highBust", "bustSpan", "shoulderSlope", "length","frontHipArc", "backHipArc"
  ],
  dependencies: {
    bodicefront: ["neck", "armhole"],
    bodiceback: ["neckback", "armholeback"]
  },
  inject: {
    neck: 'armhole',
    neckback: 'armholeback',
    bodicefront: 'neck',
    bodiceback: 'neckback',
    front: 'bodicefront',
    back: 'bodiceback',
    alinefront: 'bodicefront',
    godetfront: 'bodicefront',
    basicsingledartedfront: 'bodicefront',
    alineback: 'bodiceback',
    godetback: 'bodiceback',
    basicsingledartedback: 'bodiceback'
  },
  hide: ["alinefront", "alineback", "godetfront", "godet", "godetback",
    "basicsingledartedfront", "basicsingledartedback", "armhole", "armholeback",
    "neck", "neckback", "bodicefront", "bodiceback"
  ],
  parts: ["front", "back", "extra", "alinefront", "alineback", "godetback", "godetfront",
    "godet", "basicsingledartedfront", "basicsingledartedback", "armhole", "armholeback",
    "neck", "neckback", "bodicefront", "bodiceback"
  ],
  options: {
    //Importing from arm hole
    bottomcpspread: { pct: 18, min: 0, max: 100 },
    midcp1spread: { pct: 10, min: 0, max: 100 },
    midcp2spread: { pct: 9, min: 0, max: 100 },
    topcpspread: { pct: 20, min: 0, max: 100 },
    shoulderslopedepth: { deg: 19.05, min: 0, max: 25.4 },
    armtopshift: { deg: 0, min: 0, max: 177.8 },
    armholecenter: { deg: 0, min: 0, max: 50 },
    armbottomwidth: { deg: 0, min: 0, max: 12.7 },

    //armholedartoptions
    armholedartlength: { deg: 0, min: 0, max: 76.2 },
    armholedartwidth: { deg: 12.7, min: 0, max: 12.7 },

    //neck hole
    neckwidth: { deg: 80, min: 0, max: 177.8 },
    neckdepth: { deg: 90, min: 0, max: 177.8 },
    neckdepthback: { deg: 90, min: 0, max: 177.8 },
    neckcprightspread: { pct: 50, min: 0, max: 100 },
    neckcprightspreadback: { pct: 50, min: 0, max: 100 },
    neckcpbottomspread: { pct: 100, min: 0, max: 100 },
    neckcpbottomspreadback: { pct: 100, min: 0, max: 100 },
    neckcprightangle: { deg: 0, min: -90, max: 90 },
    neckcprightangleback: { deg: 0, min: -90, max: 90 },
    neckcpbottomangle: { deg: 0, min: -90, max: 90 },
    neckcpbottomangleback: { deg: 0, min: -90, max: 90 },
    frontdart: {
      list: ['no', 'yes'],
      dflt: 'no'
    },
    afterdartcurvefactor: { deg: 0.15, min: 0, max: 0.5 },

    //waist dart
    waistdartwidth: { deg: 38.1, min: 0, max: 50.8 },
    waistdartlength: { deg: 0, min: -101.6, max: 12.7 },

    manipulateHem: { deg: 0, min: -50.8, max: 50.8 },
    frontLeftDartLength: { deg: 86.4, min: 35.6, max: 137.2 },
    frontRightDartLength: { deg: 86.4, min: 35.6, max: 137.2 },
    backLeftDartLength: { deg: 139.7, min: 88.9, max: 190.5 },
    backRightDartLength: { deg: 127, min: 76.2, max: 177.8 },
    frontDartWidth: { deg: 38.1, min: 0, max: 63.5 },
    backDartWidth: { deg: 38.1, min: 0, max: 69.8 },
    dartGap: { deg: 25.4, min: 12.7, max: 50.8 },
    skirttype: {
      list: ['aline', 'godet', 'basicsingledarted'],
      dflt: 'aline'
    },
    naturalWaistToHip: { deg: 177.6, min: 127, max: 279.4 },
    numOfGodets: { dflt: "8", list: ["4", "8", "12", "16"] },
    godetWidth: { deg: 101.6, min: 50.8, max: 152.4 },
    godetLength: { deg: 254, min: 177.8, max: 330.2 },
    waistgather: { deg: 0, min: -76.2, max: 152.4  },
    waistverticalposition: {deg: 0, min: -152.4, max: 152.4  },
    //slit
    slitlength: { deg: 152.4, min: 50.8, max: 203.2 },
    slit: {
      list: ['yes', 'no'],
      dflt: 'no'
    }
  }
};