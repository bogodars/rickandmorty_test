import React, { useEffect, useState } from 'react';
import Character from './Character';
import Title from '../img/title.png';
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      fetch('https://rickandmortyapi.com/api/character',  {mode: 'no-cors'})
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setCharacters(json.results);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (loading) return 'Loading...';

  return (
    <div className='bg-gray-600'>
      <div className='flex justify-center items-center'>
        <img className='animate-pulse' src={Title} alt='title' />
      </div>

      <div className='flex  flex-wrap w-auto justify-center max-w-4xl m-auto'>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
