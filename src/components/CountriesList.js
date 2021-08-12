import Country from './Country';

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h1>Countries List</h1>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
