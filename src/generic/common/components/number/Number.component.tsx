import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { Number } from '@/src/generic/common/components/number/Number.type.ts';

export const NumberComponent = ({
  className,
  value,
  style,
  notation,
  compactDisplay,
  limit,
}: Number) => {
  const [language] = useLanguage();

  const options = {
    style: style,
    currency: language == 'en' ? 'USD' : 'EUR',
    notation: notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    // maximumFractionDigits: style == 'percent' ? 0 : 2,
    compactDisplay: compactDisplay,
  };

  const formatValue: string = new Intl.NumberFormat(
    language == 'en' ? 'en-US' : 'fr-FR',
    options
  ).format(value);

  const formatMax: string = new Intl.NumberFormat(
    language == 'en' ? 'en-US' : 'fr-FR',
    options
  ).format(limit!);

  return (
    <span className={className}>
      {formatValue}
      {limit && '/' + formatMax}
    </span>
  );
};
