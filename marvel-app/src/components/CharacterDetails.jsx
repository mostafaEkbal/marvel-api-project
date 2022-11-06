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
        <div>
          <div className='character-info__story'>
            <h2 className='character-info__name heading-2'>
              {characterInfo.name}
            </h2>
            <div className='character-heading'>
              <img
                src={characterInfo.thumbnail.path + '/landscape_incredible.jpg'}
                alt='portrait_incredible'
                className='character-info__image'
              />
              {characterInfo.description && (
                <p className='character-info__description'>
                  {characterInfo.description}
                </p>
              )}
            </div>

            {characterInfo.events.items.length ? (
              <div className='character-info__events '>
                <h4 className='heading-4'>Events</h4>
                <div className='character-cards--flex'>
                  {characterInfo.events.items.map((event, index) => (
                    <CharacterDetailsCard key={index} name={event.name} />
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
            {characterInfo.series.items.length ? (
              <div className='character-info__series character-info__cards'>
                <h4 className='heading-4'>Series</h4>

                {characterInfo.series.items.map((serie, index) => (
                  <CharacterDetailsCard key={index} name={serie.name} />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetails;
