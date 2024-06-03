'use client';

import { MutableRefObject, useEffect } from 'react';

interface ContactDialogProps {
  title: string;
  body: string;
  ref: MutableRefObject<HTMLDialogElement | null>;
}

function ContactDialog({ title, body, ref }: ContactDialogProps): JSX.Element {
  useEffect(() => {
    ref.current?.addEventListener('close', () => {
      ref.current?.close();
    });
  }, [ref]);

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ContactDialog;
