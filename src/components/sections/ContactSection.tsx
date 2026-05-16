"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contact, profile } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validators";

const inputClass =
  "mt-1 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 leading-[1.85] shadow-sm transition placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/25";

const labelClass = "text-sm font-bold text-navy-800";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-b from-navy-50 to-white py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="お問い合わせ"
            description={contact.sectionDescription}
          />
        </FadeInSection>
        <FadeInSection>
          <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center text-sm leading-[1.85] text-navy-700 md:-mt-8 md:mb-14 md:text-base md:leading-[1.85]">
            {contact.intro}
          </p>
        </FadeInSection>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5 lg:gap-12">
          <FadeInSection className="lg:col-span-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-navy-900 p-6 text-white shadow-lg md:p-8">
              <p className="text-sm font-bold text-gold-300">ご連絡先</p>
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 text-center text-sm font-bold text-white transition hover:bg-white/20"
              >
                メール：{profile.email}
              </Link>
              <Link
                href={profile.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold-500 px-4 text-center text-sm font-bold text-navy-950 shadow-lg shadow-gold-900/35 ring-2 ring-gold-300/60 transition hover:bg-gold-400 hover:ring-gold-200/80"
              >
                X {profile.handle} を開く
              </Link>
              <Link
                href={contact.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 text-center text-sm font-bold text-white transition hover:bg-white/20"
              >
                Googleフォームで相談する
              </Link>
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-center text-sm font-bold text-white/45"
                aria-disabled="true"
              >
                LINE公式（準備中）
              </button>
              <p className="text-xs leading-[1.85] text-white/55">
                このページのフォームからも送信いただけます。
              </p>
            </div>
          </FadeInSection>
          <FadeInSection className="lg:col-span-3" delay={0.05}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm md:p-8"
              noValidate
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    お名前 <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    className={inputClass}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="contact-org" className={labelClass}>
                    会社名・屋号（任意）
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    autoComplete="organization"
                    className={inputClass}
                    {...register("organization")}
                  />
                  {errors.organization ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.organization.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    メールアドレス <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    ご相談内容 <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                    {...register("message")}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-500 px-8 text-base font-bold text-navy-950 shadow-xl shadow-gold-900/40 ring-2 ring-gold-300/70 transition hover:bg-gold-400 hover:shadow-gold-500/35 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "送信中…" : "送信する"}
                </button>
                {status === "success" ? (
                  <p className="text-sm font-medium text-gold-700" role="status">
                    送信しました。追ってご連絡いたします。
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-600" role="alert">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                ) : null}
              </div>
            </form>
          </FadeInSection>
        </div>
      </Container>
    </section>
  );
}
