import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください").max(120),
  organization: z.string().max(200, "会社名・屋号は200文字以内で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "ご相談内容は10文字以上で入力してください").max(4000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
