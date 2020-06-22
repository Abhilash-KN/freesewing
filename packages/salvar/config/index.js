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
    fit: ["size"]
  },
  measurements: ["length","hipsCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["salvar"],
  options: {
    size: { pct: 50, min: 10, max: 100 }
  }
};
