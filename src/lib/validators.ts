import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください").max(120),
  organization: z.string().min(1, "医療機関名を入力してください").max(200),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "ご相談内容は10文字以上で入力してください").max(4000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
