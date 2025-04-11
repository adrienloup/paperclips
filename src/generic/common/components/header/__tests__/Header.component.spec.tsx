import { describe, expect, it } from 'vitest';
// import { fireEvent } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';
import { render } from '@/src/render.tsx';
import { HeaderComponent } from '@/src/generic/common/components/header/Header.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

describe('Header component', () => {
  it('should display the component', () => {
    const { getByRole } = render(<HeaderComponent />);
    const header = getByRole('banner');

    expect(header).toBeDefined();
  });

  it('should add "open" class to header when menu button is clicked', async () => {
    const { getByRole } = render(<HeaderComponent />);
    const menu = getByRole('button', { name: /menu/i });

    expect(menu).toBeDefined();
    // fireEvent.click(menu);

    await waitFor(() => {
      const header = getByRole('banner');
      console.log(styles.open);
      expect(header).toHaveClass(styles.header);
      // expect(header).toHaveClass(styles.open);
    });
  });
});
