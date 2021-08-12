const Country = ({ country }) => {
  return (
    <article style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
      <h1>{country.name}</h1>
      <h3>{country.capital}</h3>
      <img style={{ width: '40px', height: '40px' }} src={country.flag} alt={country.name} />
      <p>Area : {country.area}, km2</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </article>
  );
};

export default Country;
