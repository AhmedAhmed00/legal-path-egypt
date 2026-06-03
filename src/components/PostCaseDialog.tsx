import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { specialties, cities } from "@/data/lawyers";

const field =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold";

export function PostCaseDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(specialties[1]);
  const [city, setCity] = useState(cities[1]);
  const [budget, setBudget] = useState("");
  const [desc, setDesc] = useState("");

  const valid = title.trim().length > 3 && desc.trim().length > 10;

  const reset = () => {
    setDone(false); setTitle(""); setBudget(""); setDesc("");
    setCategory(specialties[1]); setCity(cities[1]);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-start text-navy">انشر قضيتك</DialogTitle>
        </DialogHeader>
        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
            <h4 className="mt-4 text-lg font-bold text-navy">تم نشر قضيتك بنجاح</h4>
            <p className="mt-2 text-sm text-muted-foreground">سيصلك إشعار عند استقبال عروض من المحامين المتخصصين.</p>
            <button onClick={() => { setOpen(false); reset(); }} className="mt-5 rounded-lg bg-navy px-6 py-2.5 text-sm font-bold text-cream">تم</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (valid) setDone(true); }}
            className="space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy">عنوان القضية</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className={field} placeholder="مثال: نزاع تجاري على عقد توريد" maxLength={120} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">التخصص</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={field}>
                  {specialties.slice(1).map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">المدينة</label>
                <select value={city} onChange={(e) => setCity(e.target.value)} className={field}>
                  {cities.slice(1).map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy">الميزانية المتوقعة</label>
              <input value={budget} onChange={(e) => setBudget(e.target.value)} className={field} placeholder="مثال: 5,000 - 12,000 ج.م" maxLength={60} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy">تفاصIل القضية</label>
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} className={field} placeholder="اشرح تفاصيل قضيتك بوضوح ليتمكن المحامون من تقديم عروضهم." maxLength={1000} />
            </div>
            <button type="submit" disabled={!valid} className="w-full rounded-lg bg-gradient-gold py-2.5 text-sm font-bold text-navy shadow-gold disabled:opacity-50">
              نشر القضية
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}