import { render } from '@testing-library/react';
import { Img } from './index';

test('Img is visible', () => {
  const { getByAltText } = render(<Img src="https://picsum.photos/1920/1080" altText="Test Image" />);
  expect(getByAltText('Test Image')).toBeInTheDocument();
});

test('Img opacity changes when disabled', () => {
  const { getByAltText } = render(
    <Img src="https://picsum.photos/1920/1080" altText="Disabled Image" disabled />
  );
  const img = getByAltText('Disabled Image');
  expect(img).toHaveStyle('opacity: 0.6');
});
