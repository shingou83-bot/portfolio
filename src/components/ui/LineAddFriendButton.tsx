import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/site";

/** LINE 公式アカウント「友だち追加」ボタン（LINE 提供画像） */
export function LineAddFriendButton() {
  return (
    <Link
      href={profile.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label="LINE公式アカウントを友だち追加"
    >
      <Image
        src={profile.lineAddFriendButtonSrc}
        alt="友だち追加"
        width={116}
        height={36}
        className="h-9 w-auto"
      />
    </Link>
  );
}
