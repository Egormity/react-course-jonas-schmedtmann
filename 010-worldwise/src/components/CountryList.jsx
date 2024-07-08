import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

/* eslint-disable react/prop-types */
export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message='Add your first city by clicking on a city on the map' />;

  const countries = cities.reduce(
    (arr, city) =>
      arr.map(el => el.country).includes(city.country)
        ? arr
        : [...arr, { country: city.country, emoji: city.emoji, id: city.id }],
    []
  );

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
