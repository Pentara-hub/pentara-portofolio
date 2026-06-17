import { useState } from "react";
import Button from "../../../components/ui/Button";

export default function BookingButton() {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
      <div className="w-full h-[75vh] rounded-xl overflow-hidden border border-white/10 bg-brand">
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/10">
          <span className="text-sm text-white font-semibold">Schedule a Call</span>
          <button onClick={() => setOpen(false)} className="text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-lg border border-white/10">Close</button>
        </div>
        <iframe src="https://calendar.app.google/z6Q24T9sDokt6HZz6" title="Booking" className="w-full h-[calc(100%-3rem)] border-0 bg-white" />
      </div>
    );
  }
  return (
    <Button variant="secondary" size="md" className="w-full" onClick={() => setOpen(true)}>
      <i className="fas fa-calendar-alt" /> Book a Call
    </Button>
  );
}
