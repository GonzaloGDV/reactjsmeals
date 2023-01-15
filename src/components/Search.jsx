import { useState } from 'react';
import { useGlobalContext } from '../Context';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText('');
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeal();
  };

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={text}
          className='form-input'
          placeholder='Type favorite meal...'
        />
        <button className='btn' type='submit'>
          search
        </button>
        <button
          className='btn btn-hipster'
          type='button'
          onClick={handleRandomMeal}
        >
          suprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
