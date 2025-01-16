'use client';

import React, { PropsWithChildren, useState } from 'react';
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
        size="sm"
        disabled={value === 1}
        variant="outline"
        onClick={decrementValue}
      >
        -
      </Button>
      <input
        type="text"
        value={value}
        onChange={() => {}}
        className="text-center text-sm w-9"
      />
      <Button
        size="sm"
        variant="outline"
        className="rounded-lg"
        onClick={incrementValue}
      >
        +
      </Button>
    </div>
  );
};

export default NumberInput;
