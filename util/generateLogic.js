export const remove = [
  "um",
  "hk",
  "sh",
  "gl",
  "nf",
  "io",
  "bv",
  "bl",
  "aq",
  "bq",
  "gi",
  "ai",
  "pr",
  "re",
  "fk",
  "bq",
  "im",
  "yt",
  "mp",
  "nf",
  "gs",
  "ms",
  "vi",
  "hm",
  "nc",
  "je",
  "ax",
  "cc",
  "gu",
  "ck",
  "mo",
  "ky",
  "pn",
  "cx",
  "sx",
  "as",
  "pf",
  "mf",
  "aw",
  "bm",
  "tc",
  "tk",
  "fi",
  "cw",
  "ss",
  "ps",
  "sj",
  "gg",
  "pm",
  "gf",
  "mq",
  "nu",
  "xk"
];
export const _randomCountry = (state, randomCountriesNumber) => {
  const arr = [];
  while (true) {
    const random = Math.floor(Math.random() * state.length);
    arr.push(state[random].name);
    if (arr.length === randomCountriesNumber) {
      return arr;
    }
  }
};

export const _randomCountryAreaAndName = (state, randomCountriesNumber) => {
  const arr = [];
  while (true) {
    const random = Math.floor(Math.random() * state.length);
    arr.push(state[random]);
    if (arr.length === randomCountriesNumber) {
      return arr;
    }
  }
};

export const _countryName = (alpha2Code, countries) => {
  let state = {};
  countries.forEach(con => {
    if (con.alpha2Code.toLowerCase() === alpha2Code.toLowerCase()) {
      state = con;
    }
  });
  return state;
};

export const _shuffle = a => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};
