import '@testing-library/jest-dom/vitest';
import { ImgProps } from 'next/dist/shared/lib/get-img-props';

import { vi } from 'vitest';

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

/* SWIPER */

vi.mock('swiper/react', () => {
  const Swiper = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const SwiperSlide = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="slide">{children}</div>
  );
  return { Swiper, SwiperSlide };
});

vi.mock('swiper/modules', () => ({
  Navigation: {},
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImgProps) => <img {...props} />,
}));

vi.mock('@/components/ui/avatar', async () => {
  const mod = await import('@/components/ui/avatar');
  return {
    ...mod,
    AvatarImage: (props: ImgProps) => (
      <img data-testid="mock-avatar-img" {...props} />
    ),
  };
});
