import { useState } from 'react';
import debounce from '../utils/debounce';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const validate = () => {
    if (value === '') {
      setError('Name cannot empty');
    }
  };

  return {
    value,
    error,
    validate,
    isValid: error.length === 0,
    setValue,
    reset: () => setValue(''),
    bind: {
      onChange: debounce(event => {
        setValue(event.target.value);
      }, 300),
    },
  };
};

export default useInput;
