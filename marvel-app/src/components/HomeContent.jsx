import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const HomeContent = () => {
  const { user } = UserAuth();
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const onClickButton = async e => {
    e.preventDefault();
    try {
      await logOut();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='content__home'>
      <h1 className='heading-1'>{user.displayName}</h1>
      <h2 className='heading-2'>Welcome to the Marvel Search Website</h2>
      <p>
        This Website is created for you to search for your favorite marvel
        characters, and to know more about them.
      </p>
      <button onClick={onClickButton}>Log Out</button>
    </div>
  );
};

export default HomeContent;
