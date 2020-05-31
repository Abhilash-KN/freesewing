import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "dress",
  version,
  design: "Roopin619",
  code: "Roopin619",
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
    armholeoptions:
      [
        "shoulderslopedepth", "armholecenter", "armbottomwidth",
        { armholecp: ["topcpspread", "midcp2spread", "midcp1spread", "bottomcpspread"] },
        { armtopshiftup: ["armtopshift"] },
        { armholedart: ["armholedartlength", "armholedartwidth", "frontdart", "afterdartcurvefactor"] }
      ],
    neckoptions:
      [
        { neckcpspread: ["neckcprightspread", "neckcpbottomspread"] },
        { neckcpangle: ["neckcprightangle", "neckcpbottomangle"] },
        { neckdimensions: ["neckwidth", "neckdepth","neckdepthback"] }
      ],
    waistdart: ["waistdartwidth", "waistdartlength"],
    Type: ["skirttype"],
    Hem: ["manipulateHem"],
    Dart: [
      "dartGap", "waistDartPosition",
      { Front: ["frontLeftDartLength", "frontRightDartLength", "frontDartWidth"] },
      { Back: ["backLeftDartLength", "backRightDartLength", "backDartWidth"] }
    ],
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
    neckcprightspread: { pct: 50, min: 0, max: 100 },
    neckcpbottomspread: { pct: 50, min: 0, max: 100 },
    neckcprightangle: { deg: 0, min: -90, max: 90 },
    neckcpbottomangle: { deg: 0, min: -90, max: 90 },
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
    waistDartPosition: { deg: 86.4, min: 35.6, max: 137.2 },
    naturalWaistToHip: { deg: 228.6, min: 177.8, max: 279.4 },
    dartGap: { deg: 25.4, min: 12.7, max: 50.8 },
    skirttype: {
      list: ['aline', 'godet', 'basicsingledarted'],
      dflt: 'aline'
    },
    naturalWaistToHip: { deg: 203.2, min: 127, max: 279.4 },
    hemExcess: { deg: 0, min: -76.2, max: 203.2 },
    numOfGodets: { dflt: "8", list: ["4", "8", "12", "16"] },
    godetWidth: { deg: 101.6, min: 50.8, max: 152.4 },
    godetLength: { deg: 254, min: 177.8, max: 330.2 }
  }
};