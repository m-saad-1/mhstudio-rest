"use client";

import { useEffect, useRef, useState } from "react";
import { loadEmailClient } from "@/lib/email-client";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import { sendGAEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  business: string;
  website: string;
  solution: string;
  otherSolution: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  website: "",
  solution: "",
  otherSolution: "",
  message: "",
};

export function DemoForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (submitted) successRef.current?.focus(); }, [submitted]);

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <h2 className="text-2xl font-semibold text-foreground">Request a Free Demo</h2>
        <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">
          Fill out the details below, and we will build a custom interactive preview tailored to your restaurant.
        </p>
      </div>

      {submitted ? (
        <div ref={successRef} tabIndex={-1} role="status" className="form-status form-status-success flex flex-col items-center justify-center p-6 text-center sm:p-8">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-card bg-success-soft text-success">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-success">Demo Request Sent!</h3>
          <p className="text-base leading-relaxed text-success">
            We have received your request. Our team will review your business and prepare a free custom demo for you shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="button-secondary mt-6"
          >
            Request Another Demo
          </button>
        </div>
      ) : (
        <form
          className="grid gap-4"
          onFocusCapture={() => { void loadEmailClient().catch(() => {}); }}
          aria-busy={isSubmitting}
          aria-describedby={formError ? "demo-form-error" : undefined}
          onSubmit={async (event) => {
            event.preventDefault();
          if (isSubmitting) return;
          setFormError("");
            setIsSubmitting(true);

            try {
              const finalSolution = formState.solution === "Other"
                ? `Other: ${formState.otherSolution}`
                : formState.solution;

              // Combine additional information into the message to ensure EmailJS template delivers it
              const combinedMessage = `
Requested Solution: ${finalSolution}
Website: ${formState.website || "Not provided"}
Company: ${formState.business}
 
Use Case Details:
${formState.message}
              `.trim();

              const { default: emailjs } = await loadEmailClient();
              await emailjs.send(
                "service_tnqdrdd", // Service ID
                "template_teb23hr", // Template ID
                {
                  from_name: formState.name,
                  reply_to: formState.email,
                  business: formState.business,
                  budget: "Demo Request", // use this to easily distinguish in standard template
                  timeline: finalSolution, // map solution of interest to timeline for display
                  message: combinedMessage,
                  to_email: "saad@mhstudios.online",
                },
                "C9krtPTiFCls0Vayb" // Public Key
              );

              setSubmitted(true);
              setFormState(initialState);
              sendGAEvent({ event: "submit_demo", form_name: "demo_form" });
            } catch (error) {
              console.error("Failed to send demo request:", error);
              setFormError("Something went wrong, please try again.");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          {formError && <div id="demo-form-error" role="alert" className="form-status form-status-error">{formError}</div>}
        <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Name
              <input
                required
                minLength={2}
                name="name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, name: event.target.value }))
                }
                className="form-field"
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Business Email
              <input
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, email: event.target.value }))
                }
                className="form-field"
                placeholder="you@restaurant.com"
                disabled={isSubmitting}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Restaurant / Brand Name
              <input
                required
                minLength={2}
                name="business"
                value={formState.business}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, business: event.target.value }))
                }
                className="form-field"
                placeholder="Restaurant or brand name"
                disabled={isSubmitting}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Website URL (Optional)
              <input
                type="url"
                name="website"
                value={formState.website}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, website: event.target.value }))
                }
                className="form-field"
                placeholder="https://example.com"
                disabled={isSubmitting}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Service of Interest
            <select
              required
              name="solution"
              value={formState.solution}
              onChange={(event) =>
                setFormState((current) => ({ ...current, solution: event.target.value }))
              }
              className="form-field"
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              <option value="Modern Restaurant Website">Modern Restaurant Website</option>
              <option value="Interactive Online Menu">Interactive Online Menu</option>
              <option value="Online Reservation Integration">Online Reservation Integration</option>
              <option value="AI Restaurant Assistant">AI Restaurant Assistant</option>
              <option value="Gallery & Food Showcase">Gallery & Food Showcase</option>
              <option value="Local SEO & Map Rankings">Local SEO & Map Rankings</option>
              <option value="Website Maintenance & Support">Website Maintenance & Support</option>
              <option value="Other">Other (Please specify)</option>
            </select>
          </label>

          {formState.solution === "Other" && (
            <label className="grid gap-2 text-sm font-medium text-foreground animate-in fade-in slide-in-from-top-1 duration-200">
              Please specify the service
              <input
                required
                minLength={2}
                name="otherSolution"
                value={formState.otherSolution}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, otherSolution: event.target.value }))
                }
                className="form-field"
                placeholder="What service do you need?"
                disabled={isSubmitting}
              />
            </label>
          )}

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Requirements / Focus
            <textarea
              required
              minLength={15}
              name="message"
              value={formState.message}
              onChange={(event) =>
                setFormState((current) => ({ ...current, message: event.target.value }))
              }
              rows={5}
              className="form-field"
              placeholder="Tell us what you would like the demo to showcase (e.g., modern layout, digital menu, custom reservation widget, AI assistant)."
              disabled={isSubmitting}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary mt-2 w-full px-6 text-sm sm:w-auto"
          >
            {isSubmitting ? "Submitting Request..." : "Request Free Demo"}
          </button>
        </form>
      )}
    </div>
  );
}
