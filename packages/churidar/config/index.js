import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "salvar",
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
    chunis: ["chunis"],
    placket : ["placket"]
  },
  measurements: ["length","hipsCircumference","naturalWaistToKnee","kneeCircumference","ankleCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["churidar"],
  options: {
    chunis: { deg: 254, min: 203.2, max: 304.8 },
    placket: {
      list:['yes','no'],
      dflt: 'no'
    }
  }
};
