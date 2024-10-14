'use client';
import { useState } from 'react';
import styles from './filter.module.scss';

const Filter = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.filter}>
        <select
          className={styles.select}
          value={selectedOption1}
          onChange={handleSelectChange1}
        >
          <option value=''>Текущий состав</option>
          <option value='option1'>Иванов</option>
          <option value='option2'>Петров</option>
          <option value='option3'>Сидоров</option>
        </select>
        <select
          className={styles.select}
          value={selectedOption2}
          onChange={handleSelectChange2}
        >
          <option value=''>Все амплуа</option>
          <option value='optionA'>A</option>
          <option value='optionB'>B</option>
          <option value='optionC'>C</option>
        </select>
        <input
				className={styles.input}
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder=''
        />
      </div>
  );
};

export default Filter;
