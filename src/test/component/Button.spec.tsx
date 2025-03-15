import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';

describe('Button.spec.tsx', () => {
  it('Render with children property', () => {
    cy.mount(<ButtonComponent>Button</ButtonComponent>);
    cy.get('button').contains('Button');
  });
});
