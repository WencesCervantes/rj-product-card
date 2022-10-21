import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  //con esto le estamos dando un nombre ha nuestra funcion
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount, //lo que hace la expresion es si maxcount es undefinido regresa un false y sino hace la evaluacion de counter y maxCount
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} //lo que hace es is isMaxReached es true entonces aplica el estilo
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
