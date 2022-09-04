import CharacterDetailsCard from './CharacterDetailsCard';

const CharacterDetails = ({ character }) => {
  return (
    <>
      {character && (
        <div className='character-info'>
          <img
            src={character.thumbnail.path + '/portrait_incredible.jpg'}
            alt='portrait_incredible'
            className='character-info__image'
          />
          <div className='character-info__story'>
            <h1 className='character-info__name'>{character.name}</h1>
            <p className='character-info__description'>
              {character.description}
            </p>
            <div className='character-info__comics character-info__cards'>
              {character.comics.items.map((comic, index) => (
                <CharacterDetailsCard key={index} name={comic.name} />
              ))}
            </div>
            <div className='character-info__events character-info__cards'>
              {character.events.items.map((comic, index) => (
                <CharacterDetailsCard key={index} name={comic.name} />
              ))}
            </div>
            <div className='character-info__series character-info__cards'>
              {character.series.items.map((comic, index) => (
                <CharacterDetailsCard key={index} name={comic.name} />
              ))}
            </div>
            <div className='character-info__stories character-info__cards'>
              {character.stories.items.map((storie, index) => (
                <CharacterDetailsCard key={index} name={storie.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetails;
