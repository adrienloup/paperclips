import { useLanguage } from '@/src/generic/i18n/useLanguage';
import { Number } from '@/src/generic/common/components/number/Number.type';

export const NumberComponent = ({ style, notation, number }: Number) => {
  const { language } = useLanguage();

  const options = {
    style: style,
    currency: language === 'en' ? 'USD' : 'EUR',
    notation: notation,
    minimumFractionDigits: style === 'currency' ? 2 : 0,
    maximumFractionDigits: 2,
  };

  const formattedNumber = new Intl.NumberFormat(
    language === 'en' ? 'en-US' : 'fr-FR',
    options
  ).format(number);

  return <>{formattedNumber}</>;
};
