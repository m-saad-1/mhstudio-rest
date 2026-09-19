"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import { sendGAEvent } from "@next/third-parties/google";

type FormState = {
  name: string;
  email: string;
  business: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <h2 className="text-2xl font-semibold text-foreground">Tell us about your project</h2>
        <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">
          Fill out the form below to share your project details and goals directly with our team.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center rounded-none border border-emerald-500/20 bg-emerald-500/10 p-10 text-center animate-in fade-in zoom-in duration-500">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-none bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-emerald-400">Message Sent Successfully!</h3>
          <p className="text-base leading-relaxed text-emerald-200/80">
            Thank you for reaching out. We have received your project details and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="button-primary mt-8 border border-emerald-500/30 bg-emerald-500/20 px-6 py-2.5 text-sm text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300"
          >
            Send Another Message
          </button>
        </div>
      ) : (
      <form
        className="grid gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setIsSubmitting(true);
          
          try {
            await emailjs.send(
              "service_tnqdrdd", // Service ID
              "template_teb23hr", // Template ID
              {
                from_name: formState.name,
                reply_to: formState.email,
                business: formState.business,
                budget: formState.budget,
                timeline: formState.timeline,
                message: formState.message,
                to_email: "saad@mhstudios.online",
              },
              "C9krtPTiFCls0Vayb" // Public Key
            );
            
            setSubmitted(true);
            setFormState(initialState);
            sendGAEvent({ event: "submit_contact", form_name: "contact_form" });
          } catch (error) {
            console.error("Failed to send email:", error);
            alert("Something went wrong, please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Name
            <input
              required
              minLength={2}
              name="name"
              value={formState.name}
              onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
              className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
              placeholder="Your full name"
              disabled={isSubmitting}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Email
            <input
              required
              type="email"
              name="email"
              value={formState.email}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
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
              onChange={(event) => setFormState((current) => ({ ...current, business: event.target.value }))}
              className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
              placeholder="Restaurant or brand name"
              disabled={isSubmitting}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Package of Interest
            <select
              required
              name="budget"
              value={formState.budget}
              onChange={(event) => setFormState((current) => ({ ...current, budget: event.target.value }))}
              className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground"
              disabled={isSubmitting}
            >
              <option value="">Select package range</option>
              <option value="Silver (PKR 2,999/mo)">Silver (PKR 2,999/mo)</option>
              <option value="Golden (PKR 5,999/mo)">Golden (PKR 5,999/mo)</option>
              <option value="Diamond (PKR 9,999/mo)">Diamond (PKR 9,999/mo)</option>
              <option value="Custom Enterprise">Custom Enterprise</option>
              </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Timeline
          <select
            required
            name="timeline"
            value={formState.timeline}
            onChange={(event) => setFormState((current) => ({ ...current, timeline: event.target.value }))}
            className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground"
            disabled={isSubmitting}
          >
            <option value="">Choose a timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="month">Within 1 month</option>
            <option value="quarter">Within 1 quarter</option>
            <option value="planning">Still planning</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Message
          <textarea
            required
            minLength={20}
            name="message"
            value={formState.message}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            rows={6}
            className="rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 py-3 text-foreground placeholder:text-foreground-muted"
            placeholder="Tell us about your restaurant's concept, menu size, reservation platform, and any desired AI features."
            disabled={isSubmitting}
          />
        </label>

        <button type="submit" disabled={isSubmitting} className="button-primary mt-2 w-full px-6 text-sm sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed">
          {isSubmitting ? "Sending..." : "Send Project Brief"}
        </button>

      </form>
      )}
    </div>
  );
}
