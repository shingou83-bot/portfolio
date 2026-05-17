"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contact, profile } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { LineAddFriendButton } from "@/components/ui/LineAddFriendButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validators";

const inputClass =
  "mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-foreground leading-relaxed transition placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

const labelClass = "text-sm font-medium text-foreground";

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
      className="scroll-mt-24 border-t border-border bg-white py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="contact-heading"
            variant="document"
            title="お問い合わせ"
            description={contact.sectionDescription}
          />
        </FadeInSection>
        <FadeInSection disabled>
          <p className="mb-10 leading-relaxed text-muted">{contact.intro}</p>
        </FadeInSection>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeInSection disabled className="lg:col-span-2">
            <nav className="flex flex-col gap-3" aria-label="連絡先">
              <p className="text-sm font-medium text-foreground">ご連絡先</p>
              <Link
                href={`mailto:${profile.email}`}
                className="text-sm text-accent hover:underline"
              >
                メール：{profile.email}
              </Link>
              <Link
                href={profile.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                X {profile.handle} を開く
              </Link>
              <Link
                href={contact.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                Googleフォームで相談する
              </Link>
              <div>
                <p className="text-sm font-medium text-foreground">LINE公式</p>
                <div>
                  <LineAddFriendButton />
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                このページのフォームからも送信いただけます。
              </p>
            </nav>
          </FadeInSection>
          <FadeInSection disabled className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    className={`${inputClass} min-h-[120px] resize-y`}
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
                  className="inline-flex min-h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "送信中…" : "送信する"}
                </button>
                {status === "success" ? (
                  <p className="text-sm font-medium text-foreground" role="status">
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
