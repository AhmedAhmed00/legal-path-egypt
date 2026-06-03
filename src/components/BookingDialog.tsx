import { useState } from "react";
import { CheckCircle2, CalendarClock, User, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Lawyer } from "@/data/lawyers";

const consultTypes = [
  { id: "chat", label: "محادثة كتابية" },
  { id: "call", label: "مكالمة صوتية" },
  { id: "video", label: "مكالمة مرئية" },
];

const times = ["10:00 ص", "12:00 م", "02:00 م", "04:00 م", "06:00 م", "08:00 م"];

const steps = ["نوع الاستشارة", "بياناتك", "الدفع", "تأكيد"];

export function BookingDialog({ lawyer }: { lawyer: Lawyer }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [type, setType] = useState("chat");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [card, setCard] = useState("");
  const [card2, setCard2] = useState("");
  const [card3, setCard3] = useState("");

  const reset = () => {
    setStep(0);
    setType("chat");
    setDate(""); setTime(""); setName(""); setPhone(""); setDetails("");
    setCard(""); setCard2(""); setCard3("");
  };

  const today = new Date().toISOString().split("T")[0];

  const canNext =
    (step === 0 && !!date && !!time) ||
    (step === 1 && name.trim().length > 1 && phone.trim().length > 5) ||
    (step === 2 && card.replace(/\s/g, "").length >= 12 && card2.length >= 4 && card3.length >= 3);

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold";

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      <DialogTrigger asChild>
        <button className="mt-5 w-full rounded-lg bg-navy py-3 text-sm font-bold text-cream transition-colors hover:bg-navy-deep">
          احجز وادفع الآن
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-start text-navy">حجز استشارة مع {lawyer.name}</DialogTitle>
        </DialogHeader>

        {/* Steps indicator */}
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 flex-col items-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  i <= step ? "bg-gradient-gold text-navy" : "bg-muted text-muted-foreground"
                }`}
              >
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </span>
              <span className={`mt-1 text-[10px] ${i <= step ? "text-navy" : "text-muted-foreground"}`}>{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-2">
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy"><CalendarClock className="h-4 w-4 text-gold" />نوع الاستشارة</label>
                <div className="grid grid-cols-3 gap-2">
                  {consultTypes.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setType(c.id)}
                      className={`rounded-lg border px-2 py-2.5 text-xs font-semibold transition-colors ${
                        type === c.id ? "border-gold bg-secondary text-navy" : "border-border text-muted-foreground"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">اختر اليوم</label>
                <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={fieldClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">اختر الموعد</label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`rounded-lg border px-2 py-2 text-xs font-semibold transition-colors ${
                        time === t ? "border-gold bg-secondary text-navy" : "border-border text-muted-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy"><User className="h-4 w-4 text-gold" />الاسم بالكامل</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} placeholder="اكتب اسمك" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">رقم الهاتف</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldClass} placeholder="01xxxxxxxxx" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">تفاصيل موضوع الاستشارة</label>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={3} className={fieldClass} placeholder="اشرح باختصار موضوع استشارتك" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-secondary p-4">
                <span className="text-lg font-extrabold text-navy">{lawyer.price} ج.م</span>
                <span className="text-sm text-muted-foreground">إجمالي قيمة الاستشارة</span>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy"><CreditCard className="h-4 w-4 text-gold" />رقم البطاقة</label>
                <input value={card} onChange={(e) => setCard(e.target.value)} className={fieldClass} placeholder="0000 0000 0000 0000" inputMode="numeric" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy">تاريخ الانتهاء</label>
                  <input value={card2} onChange={(e) => setCard2(e.target.value)} className={fieldClass} placeholder="MM/YY" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy">CVV</label>
                  <input value={card3} onChange={(e) => setCard3(e.target.value)} className={fieldClass} placeholder="123" inputMode="numeric" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-4 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
              <h4 className="mt-4 text-lg font-bold text-navy">تم تأكيد حجز استشارتك بنجاح</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {consultTypes.find((c) => c.id === type)?.label} يوم {date} الساعة {time} مع {lawyer.name}.
                سيتم التواصل معك على رقم {phone} لتأكيد الموعد.
              </p>
            </div>
          )}
        </div>

        <div className="mt-2 flex gap-3">
          {step > 0 && step < 3 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-navy"
            >
              رجوع
            </button>
          )}
          {step < 2 && (
            <button
              onClick={() => canNext && setStep((s) => s + 1)}
              disabled={!canNext}
              className="flex-1 rounded-lg bg-navy py-2.5 text-sm font-bold text-cream disabled:opacity-50"
            >
              التالي
            </button>
          )}
          {step === 2 && (
            <button
              onClick={() => canNext && setStep(3)}
              disabled={!canNext}
              className="flex-1 rounded-lg bg-gradient-gold py-2.5 text-sm font-bold text-navy shadow-gold disabled:opacity-50"
            >
              ادفع {lawyer.price} ج.م
            </button>
          )}
          {step === 3 && (
            <button
              onClick={() => { setOpen(false); reset(); }}
              className="flex-1 rounded-lg bg-navy py-2.5 text-sm font-bold text-cream"
            >
              تم
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}