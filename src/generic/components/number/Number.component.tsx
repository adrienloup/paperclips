import { Number } from '@/src/generic/components/number/Number.type';

export const NumberComponent = ({ locale, style, notation, number }: Number) => {
  return (
    <>
      {new Intl.NumberFormat(locale, {
        style,
        currency: locale === 'en-US' ? 'USD' : 'EUR',
        notation,
        compactDisplay: notation ? 'short' : undefined,
        maximumFractionDigits: style || notation ? 2 : undefined,
      }).format(number)}
    </>
  );
};
