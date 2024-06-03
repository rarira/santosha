import { useEffect, useRef } from 'react';

export function useDialogProps({
  showDialog,
  content,
}: {
  content: { title: string; body: string };
  showDialog: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (showDialog) {
      dialogRef.current?.showModal();
    }
  }, [showDialog]);

  return { ref: dialogRef, ...content };
}
