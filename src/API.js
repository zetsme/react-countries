const apiSettings = {
  getAll: async () => {
    return await (
      await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region;area;'
      )
    ).json();
  },
};
export default apiSettings;
