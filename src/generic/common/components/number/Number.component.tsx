import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { Number } from '@/src/generic/common/components/number/Number.type.ts';

export const NumberComponent = ({ className, value, style, notation, compactDisplay, valueMax }: Number) => {
  const [language] = useLanguage();

  const options = {
    style: style,
    currency: language == 'en' ? 'USD' : 'EUR',
    notation: notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: compactDisplay,
  };

  const format = (value: number) => new Intl.NumberFormat(language == 'en' ? 'en-US' : 'fr-FR', options).format(value);

  return (
    <span className={className}>
      {format(value)}
      {valueMax && '/' + format(valueMax)}
    </span>
  );
};
