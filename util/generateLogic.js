export const _randomCountry = state => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * state.length);
    arr.push(state[random].name);
  }
  return arr;
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
