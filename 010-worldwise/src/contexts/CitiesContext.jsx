import { createContext, useEffect, useContext, useReducer, useCallback } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

const initialState = {
  cities: [
    {
      cityName: 'Lisbon',
      country: 'Portugal',
      emoji: '🇵🇹',
      date: '2027-10-31T15:59:59.138Z',
      notes: 'My favorite city so far!',
      position: {
        lat: 38.727881642324164,
        lng: -9.140900099907554,
      },
      id: 73930385,
    },
    {
      cityName: 'Madrid',
      country: 'Spain',
      emoji: '🇪🇸',
      date: '2027-07-15T08:22:53.976Z',
      notes: '',
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004,
      },
      id: 17806751,
    },
    {
      cityName: 'Berlin',
      country: 'Germany',
      emoji: '🇩🇪',
      date: '2027-02-12T09:24:11.863Z',
      notes: 'Amazing 😃',
      position: {
        lat: 52.53586782505711,
        lng: 13.376933665713324,
      },
      id: 98443197,
    },
    {
      cityName: 'Nijar',
      country: 'Spain',
      emoji: '🇪🇸',
      date: '2023-04-03T07:47:59.202Z',
      notes: '',
      position: {
        lat: '36.967508314568164',
        lng: '-2.13128394200588',
      },
      id: 98443198,
    },
    {
      cityName: 'Orleat',
      country: 'France',
      emoji: '🇫🇷',
      date: '2024-08-07T05:19:29.505Z',
      notes: '',
      position: {
        lat: '45.87471224890479',
        lng: '3.4497070312500004',
      },
      id: 98443199,
    },
  ],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };

    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };

    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };

    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error('Unknown action type');
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: 'loading' });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading cities...',
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: 'loading' });

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading the city...',
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: 'loading' });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      dispatch({ type: 'city/created', payload: data });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating the city...',
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: 'loading' });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the city...',
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
}

export { CitiesProvider, useCities };
