import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value); //si initialValues.count viene nulo, utiliza el valor de value

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue); //lo que esta linea hace es que no pueda ser un valor menor a 0

    onChange && onChange({ count: newValue, product }); //esta codigo funciona como un if, si onchange no es nulo, entonces ejecuta la funcion, sino, no hagas nada.
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;

    setCounter(value); //este es el que se encarga de que se refleje el contador en los productos del carrito
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
