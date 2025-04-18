import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import GalleryPreview from './GalleryPreview';
import { NextIntlClientProvider } from 'next-intl';
import useMediaQueries from '../../hooks/useMediaQueries';
import { beforeEach } from 'node:test';

beforeEach(() => {
  vi.mock('@/hooks/useMediaQueries');
});

afterEach(() => {
  vi.resetAllMocks();
});

const messages = {
  Common: {
    seeFullGallery: 'See Full Gallery',
  },
};

describe('GalleryPreview', () => {
  it('should display the correct number of images on mobile (always 1)', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: true,
      isLgDevice: false,
      isXlDevice: false,
      is2XlDevice: false,
    });

    const mockCallback = vi.fn();

    const images = [
      { alt: 'Image 1', src: '/image1.jpg' },
      { alt: 'Image 2', src: '/image2.jpg' },
      { alt: 'Image 3', src: '/image3.jpg' },
    ];

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <GalleryPreview images={images} callback={mockCallback} />
      </NextIntlClientProvider>,
    );

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(1);

    const button = screen.getByRole('button', { name: /see full gallery/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should display the correct number of images on desktop', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: false,
      isLgDevice: true,
      isXlDevice: false,
      is2XlDevice: false,
    });
    const mockCallback = vi.fn();
    const images = [
      { alt: 'Image 1', src: '/image1.jpg' },
      { alt: 'Image 2', src: '/image2.jpg' },
      { alt: 'Image 3', src: '/image3.jpg' },
      { alt: 'Image 4', src: '/image4.jpg' },
    ];

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <GalleryPreview images={images} callback={mockCallback} />
      </NextIntlClientProvider>,
    );

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(4);

    const button = screen.getByRole('button', { name: /see full gallery/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should handle image amount smaller than 4 correctly', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: false,
      isLgDevice: true,
      isXlDevice: false,
      is2XlDevice: false,
    });
    const mockCallback = vi.fn();
    const images = [
      { alt: 'Image 1', src: '/image1.jpg' },
      { alt: 'Image 2', src: '/image2.jpg' },
    ];

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <GalleryPreview images={images} callback={mockCallback} />
      </NextIntlClientProvider>,
    );

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(2);

    const button = screen.getByRole('button', { name: /see full gallery/i });
    expect(button).toBeInTheDocument();
  });

  it('should handle image amount bigger than 4 correctly', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: false,
      isLgDevice: true,
      isXlDevice: false,
      is2XlDevice: false,
    });
    const mockCallback = vi.fn();

    const images = [
      { alt: 'Image 1', src: '/image1.jpg' },
      { alt: 'Image 2', src: '/image2.jpg' },
      { alt: 'Image 3', src: '/image3.jpg' },
      { alt: 'Image 4', src: '/image4.jpg' },
      { alt: 'Image 5', src: '/image5.jpg' },
    ];

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <GalleryPreview images={images} callback={mockCallback} />
      </NextIntlClientProvider>,
    );

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(4);

    const button = screen.getByRole('button', { name: /see full gallery/i });
    expect(button).toBeInTheDocument();
  });
});
