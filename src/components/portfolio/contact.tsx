import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Download, ArrowUpRight, Code2, Loader2 } from "lucide-react";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";
import emailjs from "@emailjs/browser";

const resumes = [
  { label: "Full Stack Developer CV", href: "https://drive.google.com/file/d/1RxXskIC4kGWh266WlZ3pX8nVTBLLfLpi/view?usp=sharing" },
  { label: "Machine Learning Engineer CV", href: "https://drive.google.com/file/d/1spC_yrkMEKMksmDq0G3RSRbP-zmbD3ZZ/view?usp=sharing" },
  { label: "AI Engineer CV", href: "https://drive.google.com/file/d/1WKRzBpOcC7HBvuL8rVderWr4kr6RrssZ/view?usp=sharing" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/antara-chitte-44b364329/" },
  { icon: Github, label: "GitHub", href: "https://github.com/AKC07-Dev" },
  { icon: Code2, label: "CodeChef", href: "https://www.codechef.com/users/glee_serene_81" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/AKC_07/" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "invalid email";
    if (form.message.trim().length < 10) e.message = "message too short";
    return e;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setIsSending(true);
    setStatusMessage(null);

    try {
      // Replace these placeholders with your actual EmailJS credentials
      const currentTime = new Date().toLocaleString(); 
      await emailjs.send(
  "service_68sbpuo", 
  "template_85sh4eg", 
  {
    name: form.name,
    email: form.email,
    message: form.message,
    to_email: "antarachitte.genai@gmail.com",
    time: currentTime // This provides the missing data for {{time}}
  },
  "33fe0GCJktX8X8Puu"
);

      setStatusMessage({
        type: "success",
        text: "✓ message queued · sent to inbox successfully.",
      });
      setForm({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
       console.error("EmailJS Error details:", error);
      setStatusMessage({
        type: "error",
        text: "× transmission failed · please try again or email directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's build something <span className="text-gradient-purple">remarkable.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Terminal */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-[#0A0A0E] overflow-hidden font-mono text-sm shadow-2xl">
              {/* titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-1">
                <span className="h-3 w-3 rounded-full bg-accent-red" />
                <span className="h-3 w-3 rounded-full bg-accent-gold" />
                <span className="h-3 w-3 rounded-full bg-accent-emerald" />
                <span className="ml-3 text-xs text-text-muted">antara@portfolio:~/contact</span>
              </div>
              <form onSubmit={onSubmit} className="p-6 text-[#F0EFF8] space-y-5">
                <div className="text-text-muted">
                  <span className="text-accent-emerald"></span> Send me a message to get in touch! Whether you have a project in mind, want to collaborate, or just want to say hi..
                </div>

                <Field
                  prefix="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="your full name"
                  error={errors.name}
                  disabled={isSending}
                />
                <Field
                  prefix="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@company.com"
                  error={errors.email}
                  disabled={isSending}
                />
                <div>
                  <div className="flex gap-2">
                    <span className="text-accent-purple">→</span>
                    <span className="text-text-muted">message:</span>
                  </div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="tell me about your project..."
                    rows={5}
                    disabled={isSending}
                    className="mt-2 w-full bg-transparent border border-border rounded-lg p-6 text-sm outline-none focus:border-accent-purple resize-none placeholder:text-text-muted/60 disabled:opacity-50"
                  />
                  {errors.message && <p className="mt-1 text-xs text-accent-red">! {errors.message}</p>}
                </div>

                {statusMessage && (
                  <div className={statusMessage.type === "success" ? "text-accent-emerald" : "text-accent-red"}>
                    {statusMessage.text}
                  </div>
                )}

                {!statusMessage && !isSending && (
                  <div className="text-text-muted">
                    <span className="text-accent-emerald">$</span> ready to send
                    <span className="animate-blink ml-1">_</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-purple px-5 py-3 text-white text-sm hover:bg-accent-purple/90 transition-colors disabled:bg-accent-purple/50"
                >
                  {isSending ? (
                    <>
                      Sending...
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Execute · send_message()
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Side Info */}
          <Reveal className="lg:col-span-2 space-y-4" delay={0.1}>
            <a
              href="mailto:antarachitte.genai@gmail.com"
              data-cursor="hover"
              className="group block rounded-2xl border border-border bg-surface-1 p-6 hover:border-accent-purple/50 transition-colors"
            >
              <Mail className="h-5 w-5 text-accent-purple" />
              <div className="mt-3 font-mono text-xs text-text-muted uppercase tracking-widest">Email</div>
              <div className="mt-1 font-display text-lg font-bold break-all">antarachitte.genai@gmail.com</div>
            </a>
            <a
              href="tel:+919158498492"
              data-cursor="hover"
              className="group block rounded-2xl border border-border bg-surface-1 p-6 hover:border-accent-emerald/50 transition-colors"
            >
              <Phone className="h-5 w-5 text-accent-emerald" />
              <div className="mt-3 font-mono text-xs text-text-muted uppercase tracking-widest">Phone</div>
              <div className="mt-1 font-display text-lg font-bold">+91 9158498492</div>
            </a>

            <div className="rounded-2xl border border-border bg-surface-1 p-6">
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest">Find me on</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <Magnetic key={s.label} strength={0.4}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      data-cursor="hover"
                      className="h-12 w-12 grid place-items-center rounded-full border border-border bg-surface-2 hover:bg-accent-purple hover:border-accent-purple hover:text-white transition-colors"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
              {/* Resumes Section */}
  <div className="mt-5 flex flex-col gap-3">
    {resumes.map((resume) => (
      <Magnetic key={resume.label} strength={0.2}>
        <a
          href={resume.href}
          data-cursor="hover"
          className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm hover:border-foreground/40 transition-colors"
        >
          <span className="font-mono text-xs lowercase">{resume.label}</span>
          <Download className="h-4 w-4" />
        </a>
      </Magnetic>
    ))}
  </div>
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 font-mono text-xs text-text-muted">
          <div>© 2026 Antara Chitte · Shirpur, India</div>
          <div>Designed & engineered with precision.</div>
        </div>
      </div>
    </section>
  );
}

function Field({ 
  prefix, value, onChange, placeholder, error, disabled 
}: { 
  prefix: string; value: string; onChange: (v: string) => void; placeholder: string; error?: string; disabled?: boolean 
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-accent-purple">→</span>
        <span className="text-text-muted">{prefix}:</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-text-muted/60 disabled:opacity-50"
        />
      </div>
      {error && <p className="mt-1 ml-6 text-xs text-accent-red">! {error}</p>}
    </div>
  );
}