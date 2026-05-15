import { useEffect } from 'react';

const EMAIL = 'mailto:heilyn.fuselier@gmail.com?subject=Engineering%20inquiry';
const LINKEDIN = 'https://www.linkedin.com/in/heilynfuselier-ia/';

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-sm rounded-lg border border-surface-border bg-surface-raised p-6"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-300"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 id="contact-modal-title" className="text-base font-medium text-zinc-100">
          Contact
        </h2>
        <p className="mt-2 text-sm text-zinc-500">Email or LinkedIn.</p>
        <div className="mt-6 flex flex-col gap-2">
          <a href={EMAIL} className="btn-primary text-center" onClick={onClose}>
            Send email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
            onClick={onClose}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
