'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';

const NumberInput = () => {
  const [value, setValue] = useState(1);

  const incrementValue = () => {
    setValue((prev) => prev + 1);
  };

  const decrementValue = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <div className="flex flex-row justify-center">
      <Button
        disabled={value === 1}
        onClick={decrementValue}
        size="sm"
        variant="outline"
      >
        -
      </Button>
      <input
        className="text-center text-sm w-9"
        onChange={() => {}}
        type="text"
        value={value}
      />
      <Button
        className="rounded-lg"
        onClick={incrementValue}
        size="sm"
        variant="outline"
      >
        +
      </Button>
    </div>
  );
};

export default NumberInput;
