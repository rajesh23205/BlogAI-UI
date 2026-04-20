import { render, screen, fireEvent } from '@testing-library/react';
import { AIGenerator } from './AIGenerator';
import { describe, it, expect } from 'vitest';

describe('AIGenerator Component', () => {
  it('updates the textarea on change', () => {
    render(<AIGenerator />);
    const textarea = screen.getByPlaceholderText(/Enter a topic.../i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Future of AI' } });
    expect(textarea.value).toBe('Future of AI');
  });

  it('displays the result when generate is clicked', () => {
    render(<AIGenerator />);
    const textarea = screen.getByPlaceholderText(/Enter a topic.../i);
    const button = screen.getByText(/Generate Draft/i);
    
    fireEvent.change(textarea, { target: { value: 'Test' } });
    fireEvent.click(button);
    
    expect(screen.getByText(/AI response for: Test/i)).toBeInTheDocument();
  });
});