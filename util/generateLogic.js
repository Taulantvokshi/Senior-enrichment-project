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
  "tk"
];
export const _randomCountry = state => {
  const arr = [];
  while (true) {
    const random = Math.floor(Math.random() * state.length);
    arr.push(state[random].name);
    if (arr.length === 3) {
      return arr;
    }
  }
};

export const _countryName = (alpha2Code, countries) => {
  let state = "";
  countries.forEach(con => {
    if (con.alpha2Code.toLowerCase() === alpha2Code.toLowerCase()) {
      state = con.name;
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
