import { render, screen } from '@testing-library/react';
import AuthorsSection from '@/app/[locale]/(home)/_sections/authors';
import { useTranslations } from 'next-intl';
import useMediaQueries from '@/hooks/useMediaQueries';
import { vi, describe, beforeEach, Mock, expect, it } from 'vitest';
import { ProfileBoxProps } from '@/components/ProfileBox';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

vi.mock('@/hooks/useMediaQueries', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('@/components', () => ({
  ProfileBox: ({ firstName, lastName, text, socialIcons }: ProfileBoxProps) => (
    <div data-testid="profile-box">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{text}</p>
      <div data-testid="social-icons">
        {socialIcons.map((icon: React.ReactNode, i: number) => (
          <span data-testid="icon" key={i}>
            {icon}
          </span>
        ))}
      </div>
    </div>
  ),
}));

describe('AuthorsSection', () => {
  const mockT = vi.fn((key: string) => {
    const translations: Record<string, string> = {
      'authors.title': 'Our Authors',
      'authors.subtitle': 'Meet the Team',
      'authors.miraText': 'Mira is a creative writer.',
      'authors.artemText': 'Artem is a visual designer.',
    };
    return translations[key] || key;
  });

  beforeEach(() => {
    (useTranslations as Mock).mockReturnValue(mockT);
  });

  it('renders authors title and subtitle', () => {
    (useMediaQueries as Mock).mockReturnValue({ isMdDevice: false });

    render(<AuthorsSection />);
    expect(screen.getByText('Our Authors')).toBeInTheDocument();
    expect(screen.getByText('Meet the Team')).toBeInTheDocument();
  });

  it('renders two profile boxes with correct content', () => {
    (useMediaQueries as Mock).mockReturnValue({ isMdDevice: false });

    render(<AuthorsSection />);
    expect(screen.getAllByTestId('profile-box')).toHaveLength(2);
    expect(screen.getByText('Mira Kowalska')).toBeInTheDocument();
    expect(screen.getByText('Artem Bondar')).toBeInTheDocument();
    expect(screen.getByText('Mira is a creative writer.')).toBeInTheDocument();
    expect(screen.getByText('Artem is a visual designer.')).toBeInTheDocument();
  });

  it('renders icons with correct size for desktop', () => {
    (useMediaQueries as Mock).mockReturnValue({ isMdDevice: false });

    render(<AuthorsSection />);
    const icons = screen.getAllByTestId('icon');
    expect(icons).toHaveLength(6);
    icons.forEach((icon) => {
      expect(icon.firstChild).toHaveAttribute('width', '25');
      expect(icon.firstChild).toHaveAttribute('height', '25');
    });
  });

  it('renders icons with correct size for mobile', () => {
    (useMediaQueries as Mock).mockReturnValue({ isMdDevice: true });

    render(<AuthorsSection />);
    const icons = screen.getAllByTestId('icon');
    expect(icons).toHaveLength(6);
    icons.forEach((icon) => {
      expect(icon.firstChild).toHaveAttribute('width', '16');
      expect(icon.firstChild).toHaveAttribute('height', '16');
    });
  });
});
