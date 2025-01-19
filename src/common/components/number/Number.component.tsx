import { useLanguage } from '@/src/generic/i18n/useLanguage';
import { Number } from '@/src/common/components/number/Number.type';

export const NumberComponent = ({ style, notation, number }: Number) => {
  const { language } = useLanguage();

  const formattedNumber = new Intl.NumberFormat(language === 'en' ? 'en-US' : 'fr-FR', {
    style,
    currency: language === 'en' ? 'USD' : 'EUR',
    notation,
    compactDisplay: notation ? 'short' : undefined,
    maximumFractionDigits: 2,
  }).format(number);

  return <>{formattedNumber}</>;
};
