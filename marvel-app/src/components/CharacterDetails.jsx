import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../priv';
import CharacterDetailsCard from './CharacterDetailsCard';

const CharacterDetails = () => {
  const [characterInfo, setCharacterInfo] = useState(null);

  const params = useParams();

  useEffect(() => {
    const getCharacterInfo = async () => {
      const res = await fetch(`${baseURL}&name=${params.name}`);
      const data = await res.json();

      setCharacterInfo(data.data.results[0]);
    };
    getCharacterInfo();
  }, [params.name]);

  return (
    <>
      {characterInfo && (
        <div className='character-info'>
          <img
            src={characterInfo.thumbnail.path + '/portrait_uncanny.jpg'}
            alt='portrait_incredible'
            className='character-info__image'
          />
          <div className='character-info__story'>
            <h2 className='character-info__name heading-2'>
              {characterInfo.name}
            </h2>
            <p className='character-info__description'>
              {characterInfo.description}
            </p>
            {/* <div className='character-info__comics character-info__cards'>
              {characterInfo.comics.items.map((comic, index) => (
                <CharacterDetailsCard key={index} name={comic.name} />
              ))}
            </div> */}
            <div className='character-info__events character-info__cards'>
              <h4 className='heading-4'>Events</h4>
              {characterInfo.events.items.map((event, index) => (
                <CharacterDetailsCard key={index} name={event.name} />
              ))}
            </div>
            <div className='character-info__series character-info__cards'>
              <h4 className='heading-4'>Series</h4>
              {characterInfo.series.items.map((serie, index) => (
                <CharacterDetailsCard key={index} name={serie.name} />
              ))}
            </div>
            {/* <div className='character-info__stories character-info__cards'>
              {characterInfo.stories.items.map((story, index) => (
                <CharacterDetailsCard key={index} name={story.name} />
              ))}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetails;
