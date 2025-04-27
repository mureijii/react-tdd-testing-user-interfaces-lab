import { render, screen } from '@testing-library/react';
import App from '../App'; // Adjust the path as necessary
import '@testing-library/jest-dom';

test('displays a top-level heading with the text "Hi, I\'m Muriithi"', () => {
  render(<App />);
  const topLevelHeading = screen.getByRole('heading', { level: 1 });
  expect(topLevelHeading).toBeInTheDocument();
});

test('displays an image with alt text identifying the content', () => {
  render(<App />);
  const image = screen.getByAltText(/a picture of yourself/i); // Replace with your image's alt text if necessary
  expect(image).toBeInTheDocument();
});

test('displays a second-level heading with the text "About Me"', () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole('heading', { level: 2 });
  expect(aboutMeHeading).toBeInTheDocument();
});

test('displays a paragraph with your biography', () => {
  render(<App />);
  const paragraph = screen.getByText(/your biography goes here/i); // Replace with the actual content of your biography if needed
  expect(paragraph).toBeInTheDocument();
});

test('displays a link to GitHub with the correct href', () => {
  render(<App />);
  const githubLink = screen.getByRole('link', { name: /github/i });
  expect(githubLink).toHaveAttribute('href', 'https://github.com/mureijii'); // Replace with your GitHub username
});

test('displays a link to LinkedIn with the correct href', () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/mureijii'); // Replace with your LinkedIn username
});
