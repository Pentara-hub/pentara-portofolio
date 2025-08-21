import { useState } from "react";

export default function BookingButton() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="w-full h-[85vh] rounded-xl overflow-hidden border border-white/20">
        <div className="flex justify-end p-2 bg-white/10">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-black text-sm bg-red-300 px-2 rounded-full"
          >
            ✕ Close
          </button>
        </div>
        <iframe
          src="https://calendar.app.google/z6Q24T9sDokt6HZz6"
          title="Google Booking"
          className="w-full h-full border-0 bg-white sm:m-0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="w-full inline-flex items-center justify-center font-medium py-3 px-6 rounded-lg transition-all bg-accent hover:bg-opacity-90 text-dark"
    >
      <i className="fas fa-calendar-alt mr-2" /> Book a Call
    </button>
  );
}
