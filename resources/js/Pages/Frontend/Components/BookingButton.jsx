import { useState } from "react";

export default function BookingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full inline-flex items-center justify-center font-medium py-3 px-6 rounded-lg transition-all bg-accent hover:bg-opacity-90 text-dark"
      >
        <i className="fas fa-calendar-alt mr-2" /> Book a Call
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-0.5 right-3 text-gray-600 hover:text-black text-md bg-red-300 px-2 rounded-full"
            >
              ✕
            </button>

            {/* Booking Page */}
            <iframe
              src="https://calendar.app.google/z6Q24T9sDokt6HZz6"
              title="Google Booking"
              className="w-full h-[95vh]  rounded-b-2xl border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
