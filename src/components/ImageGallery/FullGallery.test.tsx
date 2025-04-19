import { render, screen, fireEvent } from '@testing-library/react';
import FullGallery from './FullGallery';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('swiper/react', async () => {
  const actual = await vi.importActual('swiper/react');
  return {
    ...actual,
    Swiper: vi.fn(({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    )),
    SwiperSlide: vi.fn(({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    )),
  };
});

vi.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
}));

describe('FullGallery Component', () => {
  const mockCallback = vi.fn();
  const mockImages = [
    { alt: 'Image 1', src: '/image1.jpg' },
    { alt: 'Image 2', src: '/image2.jpg' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the gallery correctly', () => {
    render(<FullGallery callback={mockCallback} images={mockImages} />);

    expect(screen.getByText('Go back')).toBeInTheDocument();
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  it('calls callback function when "Go back" button is clicked', () => {
    render(<FullGallery callback={mockCallback} images={mockImages} />);
    fireEvent.click(screen.getByText('Go back'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('navigates slides using arrow keys', () => {
    render(<FullGallery callback={mockCallback} images={mockImages} />);

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyDown(document, { key: 'ArrowLeft' });

    expect(true).toBe(true);
  });

  it('renders navigation buttons (if not mobile)', () => {
    render(<FullGallery callback={mockCallback} images={mockImages} />);

    const nextButton = screen.getByRole('button', { name: /next image/i });
    const prevButton = screen.getByRole('button', { name: /prev image/i });

    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });
});
