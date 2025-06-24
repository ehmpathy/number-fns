# number-fns

![test](https://github.com/ehmpathy/number-fns/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/number-fns/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous **number** resources and mechanisms.

# purpose

1. declare an intuitive and stable definition of `number`

2. create a pit of success for number utilization

3. declare a ubiquitious language for
    - domain objects related to `number`s
      - Quant
      - Ratio
    - procedures related to `number`s
      - asNumberRounded
      - etc

# install

```sh
npm install number-fns
```

# use

### `roundToHundredths`

.what = returns a number rounded to the hundredths
.examples =
```ts
asNumberRounded(11.31313) => 11.31
asNumberRounded(11.31) => 11.31
asNumberRounded(11.3) => 11.30
asNumberRounded(11) => 11.00
```

### `asNumberRounded`

.what = returns a number rounded to a given precision
.examples =
```ts
asNumberRounded(11.31313, 0.01) => 11.31
asNumberRounded(11.31313, 0.1) => 11.3
asNumberRounded(11.31313, 1) => 11
asNumberRounded(11.31313, 10) => 10
asNumberRounded(11.31313, 100) => 0
```

### `asNumberFloored`

.what = returns a number floored to a given precision
.examples =
```ts
asNumberFloored(17.31713, 0.01) => 17.31
asNumberFloored(17.31713, 0.1) => 17.3
asNumberFloored(17.31713, 1) => 17
asNumberFloored(17.31713, 10) => 10
asNumberFloored(17.31713, 100) => 0
```

### `asPercentWords`

.what = represents a number as a percentage in words
.examples =
```ts
asPercentWords(12.321) => "1232%"
```

### `asNumberWords`

.what = represents a number in words


### `Quant`

.what = represents an absolute quantity


### `Ratio`

.what = represents a relative ratio
