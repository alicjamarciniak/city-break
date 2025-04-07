import { render, screen, fireEvent } from '@testing-library/react';
import ProfileBox from '@/components/ProfileBox';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import useMediaQueries from '@/hooks/useMediaQueries';

beforeEach(() => {
  vi.mock('@/hooks/useMediaQueries');
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('ProfileBox Component', () => {
  const mockProfile = {
    profileUrl: 'john-doe',
    firstName: 'John',
    lastName: 'Doe',
    text: 'Software Engineer',
    src: '/profile.jpg',
    socialIcons: [
      <span key="1">FB</span>,
      <span key="2">TW</span>,
      <span key="3">IG</span>,
    ],
  };

  it('renders ProfileBox correctly', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: false,
      isLgDevice: true,
      isXlDevice: false,
      is2XlDevice: false,
    });

    render(<ProfileBox {...mockProfile} />);

    const firstNameSpan = screen.getByTestId('first-name');
    expect(firstNameSpan).toBeInTheDocument();
    expect(firstNameSpan).toHaveTextContent('John');

    const heading = screen.getByRole('heading', { level: 6 });
    expect(heading).toContainElement(firstNameSpan);
    expect(heading).toHaveTextContent('Doe');

    // Check if description is displayed
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();

    // Check if image is present
    expect(screen.getByAltText('Photo of John Doe')).toBeInTheDocument();
  });

  it('should show icons on hover (desktop mode)', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: false,
      isLgDevice: true,
      isXlDevice: false,
      is2XlDevice: false,
    });

    render(<ProfileBox {...mockProfile} />);

    const profileContainer = screen.getByTestId('profile-container');

    mockProfile.socialIcons.forEach((icon, i) => {
      expect(screen.queryByTestId(`icon-${i}`)).toHaveClass('max-h-0');
    });

    fireEvent.mouseEnter(profileContainer);

    mockProfile.socialIcons.forEach((icon, i) => {
      expect(screen.queryByTestId(`icon-${i}`)).not.toHaveClass('max-h-0');
    });

    fireEvent.mouseLeave(profileContainer);

    mockProfile.socialIcons.forEach((icon, i) => {
      expect(screen.queryByTestId(`icon-${i}`)).toHaveClass('max-h-0');
    });
  });

  it('should always show icons on mobile (isMdDevice = true)', () => {
    vi.mocked(useMediaQueries).mockReturnValue({
      isSmDevice: false,
      isMdDevice: true,
      isLgDevice: false,
      isXlDevice: false,
      is2XlDevice: false,
    });

    render(<ProfileBox {...mockProfile} />);

    mockProfile.socialIcons.forEach((icon, i) => {
      expect(screen.queryByTestId(`icon-${i}`)).not.toHaveClass('max-h-0');
    });
  });
});
