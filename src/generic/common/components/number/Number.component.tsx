import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { Number } from '@/src/generic/common/components/number/Number.type.ts';

export const NumberComponent = ({
  className,
  value,
  style,
  notation,
  compactDisplay,
  valueMax,
}: Number) => {
  const [language] = useLanguage();

  const options = {
    style: style,
    currency: language == 'en' ? 'USD' : 'EUR',
    notation: notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: compactDisplay,
  };

  const formatValue: string = new Intl.NumberFormat(
    language == 'en' ? 'en-US' : 'fr-FR',
    options
  ).format(value);

  const formatValueMax: string = new Intl.NumberFormat(
    language == 'en' ? 'en-US' : 'fr-FR',
    options
  ).format(valueMax!);

  return (
    <span className={className}>
      {formatValue}
      {valueMax && '/' + formatValueMax}
    </span>
  );
};
