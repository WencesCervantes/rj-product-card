# RJ-Product-Card

es un paquete de pruebas de despliegue npm

### Wences Cervantes

## Ejemplo

```
import {ProductCard,
ProductImage,
ProductTitle,
ProductButtons
} from 'rj-product-card';
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 15,
        }}
      >
        {({ reset, count, increaseBy, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
