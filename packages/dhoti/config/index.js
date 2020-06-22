import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "dhoti",
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
    plates: ["plates"]
  },
  measurements: ["length","hipsCircumference","ankleCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["dhoti"],
  options: {
    plates: { deg: 254, min: 203.2, max: 381 },
    waistcutlength: { deg: 25.4, min: 0, max: 50.8 },
    waistcutdepth: { deg: 152.4, min: 0, max: 203.2 }
  }
};
