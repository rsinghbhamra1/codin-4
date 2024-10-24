import { render } from '@testing-library/react';
import { HeroImage } from './index';

test('HeroImage is visible', () => {
  const { getByText } = render(
    <HeroImage backgroundImage="https://picsum.photos/1920/1080" heroText="Test Hero" />
  );
  expect(getByText('Test Hero')).toBeInTheDocument();
});

test('HeroImage opacity changes when disabled', () => {
  const { container } = render(
    <HeroImage backgroundImage="https://picsum.photos/1920/1080" heroText="Disabled Hero" disabled />
  );
  const hero = container.firstChild as HTMLElement;
  expect(hero).toHaveStyle('opacity: 0.6');
});
