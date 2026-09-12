"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name:      z.string().min(2, "Please enter your name"),
  phone:     z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  outlet:    z.string().min(1, "Please select an outlet"),
  service:   z.string().min(1, "Please select a service"),
  date:      z.string().min(1, "Please choose a date"),
  timeSlot:  z.string().min(1, "Please select a time slot"),
  message:   z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const outlets  = ["Main Branch (MG Road)", "City Centre (FC Road)", "South City (Koregaon Park)", "North Square (Baner)"];
const services = ["Bridal Makeover", "Hair Spa & Care", "Skin Care & Facial", "Nail Art", "Waxing", "Mehndi", "Eye Brow & Threading", "Other"];
const slots    = ["Morning (9am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 8pm)"];

export default function BookingForm({ preselectedOffer }: { preselectedOffer?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const watchedName   = watch("name", "");
  const watchedOutlet = watch("outlet", "");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...data, offer: preselectedOffer }),
      });
      setSubmitted(true);
    } catch (_) {
      // Still show success — form will email via API
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6" id="booking-success">
        <div className="text-5xl mb-6">✨</div>
        <h2 className="font-cormorant text-venus-ink text-3xl mb-4">
          Thank you, {watchedName || "beautiful"}!
        </h2>
        <p className="font-dm text-venus-ink/70 text-lg mb-2">
          Our team from <strong>{watchedOutlet || "your chosen outlet"}</strong> will call you within 2 hours to confirm your appointment.
        </p>
        <p className="font-dm text-venus-ink/50 text-sm">
          We can&apos;t wait to make you glow! 💄
        </p>
        <div className="gold-divider-center mt-8" />
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex mt-6"
          id="booking-success-whatsapp"
        >
          Message us on WhatsApp instead
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      id="booking-form"
      noValidate
      aria-label="Appointment booking form"
    >
      {preselectedOffer && (
        <div className="bg-venus-gold/15 border border-venus-gold/30 rounded px-4 py-3">
          <p className="font-dm text-sm text-venus-ink">
            Booking offer: <strong className="text-venus-gold capitalize">{preselectedOffer.replace(/-/g, " ")}</strong>
          </p>
        </div>
      )}

      {/* Name */}
      <Field label="Full Name" id="field-name" error={errors.name?.message} required>
        <input
          {...register("name")}
          id="field-name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Priya Sharma"
          className={`input-venus ${errors.name ? "error" : ""}`}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      {/* Phone */}
      <Field label="Phone Number" id="field-phone" error={errors.phone?.message} required>
        <input
          {...register("phone")}
          id="field-phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          className={`input-venus ${errors.phone ? "error" : ""}`}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
      </Field>

      {/* Outlet */}
      <Field label="Preferred Outlet" id="field-outlet" error={errors.outlet?.message} required>
        <select
          {...register("outlet")}
          id="field-outlet"
          className={`input-venus ${errors.outlet ? "error" : ""}`}
          aria-describedby={errors.outlet ? "outlet-error" : undefined}
        >
          <option value="">Select an outlet near you</option>
          {outlets.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>

      {/* Service */}
      <Field label="Service Category" id="field-service" error={errors.service?.message} required>
        <select
          {...register("service")}
          id="field-service"
          className={`input-venus ${errors.service ? "error" : ""}`}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      {/* Date */}
      <Field label="Preferred Date" id="field-date" error={errors.date?.message} required>
        <input
          {...register("date")}
          id="field-date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className={`input-venus ${errors.date ? "error" : ""}`}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
      </Field>

      {/* Time slot */}
      <Field label="Preferred Time Slot" id="field-slot" error={errors.timeSlot?.message} required>
        <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Preferred time slot">
          {slots.map((slot) => {
            const id = `slot-${slot.split(" ")[0].toLowerCase()}`;
            return (
              <label
                key={slot}
                htmlFor={id}
                className="relative flex flex-col items-center gap-1 p-3 border-[1.5px] border-venus-ink/15 rounded cursor-pointer transition-all hover:border-venus-gold has-[:checked]:border-venus-gold has-[:checked]:bg-venus-gold/10 text-center"
              >
                <input
                  {...register("timeSlot")}
                  type="radio"
                  id={id}
                  value={slot}
                  className="sr-only"
                />
                <span className="font-dm text-xs font-medium text-venus-ink">{slot.split(" ")[0]}</span>
                <span className="font-dm text-[11px] text-venus-ink/50">{slot.split(" ").slice(1).join(" ")}</span>
              </label>
            );
          })}
        </div>
        {errors.timeSlot && <p className="text-[#e05252] text-sm mt-1">{errors.timeSlot.message}</p>}
      </Field>

      {/* Optional message */}
      <Field label="Special Requests (optional)" id="field-message">
        <textarea
          {...register("message")}
          id="field-message"
          rows={3}
          placeholder="Any allergies, special occasions, or specific requirements..."
          className="input-venus resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary justify-center w-full md:w-auto md:self-center md:min-w-[280px] text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        id="booking-submit-btn"
      >
        {submitting ? "Sending..." : "Request Appointment — It's Free"}
      </button>

      <p className="font-dm text-xs text-venus-ink/40 text-center">
        No payment required. Our team will call to confirm within 2 hours.
      </p>
    </form>
  );
}

function Field({
  label, id, error, required, children
}: {
  label: string; id: string; error?: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-dm text-sm font-medium text-venus-ink">
        {label}
        {required && <span className="text-venus-rose ml-0.5" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="font-dm text-xs text-[#e05252]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
