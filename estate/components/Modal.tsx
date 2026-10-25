"use client";
import { useEffect } from "react";

interface ModalProps { open: boolean; onClose: () => void; children: React.ReactNode; label: string }

export default function Modal({ open, onClose, children, label }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div className="animate-rise max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
