import { Button } from "./Button";

export function BottomNav() {
  return (
    <div
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-8 py-2 flex items-center gap-6 btn-secondary-shadow"
      style={{ boxShadow: "0 0 0 0.5px rgba(0,0,0,0.05), 0 10px 40px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.6)" }}
    >
      <span className="font-serif-display text-2xl font-semibold" style={{ color: "#051A24" }}>N</span>
      <Button href="mailto:namnguyenfnw@gmail.com" variant="primary">Start a chat</Button>
    </div>
  );
}
