import { Badge } from '@/src/generic/common/component/badge/Badge.type.ts';

export const BadgeComponent = ({ children, max = 9, value = 0 }: Badge) => {
  const valueMax = value <= max ? `${value}` : `${max}+`;

  return (
    <>
      {valueMax}
      {children}
    </>
  );
};
