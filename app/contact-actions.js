'use client';

import { useEffect, useRef, useState } from 'react';
import { email, inquiryHref } from './site';

const copyPrompt = 'Click the email address to copy it.';

export default function ContactActions() {
  const [message, setMessage] = useState(copyPrompt);
  const resetTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    window.clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage('Email address copied.');
      resetTimer.current = window.setTimeout(() => setMessage(copyPrompt), 3500);
    } catch {
      setMessage('Select and copy the email address shown above.');
    }
  }

  return (
    <>
      <div className="contact-actions">
        <a className="button button-dark" href={inquiryHref}>
          Start a project <span className="button-icon" aria-hidden="true">+</span>
        </a>
        <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address">
          <span className="copy-label">{email}</span>
          <span className="copy-icon" aria-hidden="true">⧉</span>
        </button>
      </div>
      <p className="contact-small" role="status" id="copy-status">{message}</p>
    </>
  );
}
