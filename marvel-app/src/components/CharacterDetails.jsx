import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../priv';
import CharacterDetailsCard from './CharacterDetailsCard';

const CharacterDetails = ({ character }) => {
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
            src={characterInfo.thumbnail.path + '/portrait_incredible.jpg'}
            alt='portrait_incredible'
            className='character-info__image'
          />
          <div className='character-info__story'>
            <h1 className='character-info__name'>{characterInfo.name}</h1>
            <p className='character-info__description'>
              {characterInfo.description}
            </p>
            <div className='character-info__comics character-info__cards'>
              {characterInfo.comics.items.map((comic, index) => (
                <CharacterDetailsCard key={index} name={comic.name} />
              ))}
            </div>
            <div className='character-info__events character-info__cards'>
              {characterInfo.events.items.map((event, index) => (
                <CharacterDetailsCard key={index} name={event.name} />
              ))}
            </div>
            <div className='character-info__series character-info__cards'>
              {characterInfo.series.items.map((serie, index) => (
                <CharacterDetailsCard key={index} name={serie.name} />
              ))}
            </div>
            <div className='character-info__stories character-info__cards'>
              {characterInfo.stories.items.map((story, index) => (
                <CharacterDetailsCard key={index} name={story.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetails;
