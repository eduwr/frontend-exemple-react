import image1 from '../assets/images/landscape1.png';
import image2 from '../assets/images/landscape2.png';
import image3 from '../assets/images/landscape3.png';

export interface ImageInterface {
  id: number;
  uri: string;
  title: string;
  description: string;
}

const mockImageInfo = {
  title: 'LOREM IPSUM',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
};

export const images: ImageInterface[] = [
  { id: 1, uri: image1, ...mockImageInfo },
  { id: 2, uri: image2, ...mockImageInfo },
  { id: 3, uri: image3, ...mockImageInfo },
  { id: 4, uri: image1, ...mockImageInfo },
  { id: 5, uri: image2, ...mockImageInfo },
  { id: 6, uri: image3, ...mockImageInfo },
  { id: 7, uri: image1, ...mockImageInfo },
  { id: 8, uri: image2, ...mockImageInfo },
  { id: 9, uri: image3, ...mockImageInfo },
];
