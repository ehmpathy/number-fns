import { AsOfGlossary } from 'domain-glossaries';
import { withAssure } from 'type-fns';

export const roundToHundredths = (num: number): number =>
  Math.round(num * 100) / 100;

/**
 * .what = returns a number rounded to a given precision
 *
 * .examples
 * - asNumberRounded(11.31313, 0.01) => 11.31
 * - asNumberRounded(11.31313, 0.1) => 11.3
 * - asNumberRounded(11.31313, 1) => 11
 * - asNumberRounded(11.31313, 10) => 10
 * - asNumberRounded(11.31313, 100) => 0
 */
export const asNumberRounded = (
  num: number,
  precision:
    | 0.000_1
    | 0.001
    | 0.01
    | 0.1
    | 1
    | 10
    | 100
    | 1_000
    | 10_000
    | 100_000
    | 1_000_000,
): Quant => isQuant.assure(Math.round(num / precision) * precision);

/**
 * .what = returns a number floored to a given precision
 *
 * .examples
 * - asNumberFloored(17.31713, 0.01) => 17.31
 * - asNumberFloored(17.31713, 0.1) => 17.3
 * - asNumberFloored(17.31713, 1) => 17
 * - asNumberFloored(17.31713, 10) => 10
 * - asNumberFloored(17.31713, 100) => 0
 */
export const asNumberFloored = (
  num: number,
  precision:
    | 0.000_1
    | 0.001
    | 0.01
    | 0.1
    | 1
    | 10
    | 100
    | 1_000
    | 10_000
    | 100_000
    | 1_000_000,
): Quant => isQuant.assure(Math.floor(num / precision) * precision);

/**
 * .what = represents a number as a percentage in words
 */
export const asPercentWords = (num: number): string =>
  `${Math.round(num * 100)}`.split('.')[0]! + '%';

/**
 * .what = represents a number in words
 */
export const asNumberWords = (
  num: number,
  options: { decimals?: number } = { decimals: 2 },
): string =>
  num?.toLocaleString('en-US', {
    minimumFractionDigits: options?.decimals ?? 2,
    maximumFractionDigits: options?.decimals ?? 2,
  }) ?? null;

/**
 * a ratio
 */
export type Ratio = AsOfGlossary<number, 'number-fns.Ratio'>;
export const isRatio = withAssure(
  (input: number): input is Ratio => typeof input === 'number',
);

/**
 * a quantity
 *
 * a.k.a. a magnitude
 */
export type Quant = AsOfGlossary<number, 'number-fns.Quant'>;
export const isQuant = withAssure(
  (input: number): input is Quant => typeof input === 'number',
);
