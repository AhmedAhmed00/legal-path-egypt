import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

const field =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold";

export function SubmitOfferDialog({ caseTitle, trigger }: { caseTitle: string; trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [msg, setMsg] = useState("");

  const valid = price.trim().length > 0 && msg.trim().length > 10;
  const reset = () => { setDone(false); setPrice(""); setDuration(""); setMsg(""); };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-start text-navy">تقديم عرض</DialogTitle>
        </DialogHeader>
        <p className="-mt-1 text-sm text-muted-foreground">على قضية: {caseTitle}</p>
        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
            <h4 className="mt-4 text-lg font-bold text-navy">تم إرسال عرضك بنجاح</h4>
            <p className="mt-2 text-sm text-muted-foreground">سيتم إشعارك عند رد صاحب القضية على عرضك.</p>
            <button onClick={() => { setOpen(false); reset(); }} className="mt-5 rounded-lg bg-navy px-6 py-2.5 text-sm font-bold text-cream">تم</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (valid) setDone(true); }} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">قيمة العرض (ج.م)</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} className={field} placeholder="مثال: 8000" inputMode="numeric" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">مدة الإنجاز</label>
                <input value={duration} onChange={(e) => setDuration(e.target.value)} className={field} placeholder="مثال: أسبوعان" maxLength={40} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy">رسالتك لصاحب القضية</label>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} className={field} placeholder="اشرح خبرتك وخطتك للتعامل مع القضية." maxLength={1000} />
            </div>
            <button type="submit" disabled={!valid} className="w-full rounded-lg bg-gradient-gold py-2.5 text-sm font-bold text-navy shadow-gold disabled:opacity-50">
              إرسال العرض
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}