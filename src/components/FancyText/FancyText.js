import React from 'react';

import textStyles from './FancyText.module.scss';

const FancyText = ({ text, label }) => {
  const output = text.split('');
  return (
    <h2 className={textStyles.fancyTitle} aria-label={label}>
      {output.map((letter, i) => <span aria-hidden={true} key={`titleSpan${i}`}>{letter}</span>)}
    </h2>
  );
}

export default FancyText;