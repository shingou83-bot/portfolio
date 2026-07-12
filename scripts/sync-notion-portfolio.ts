/**
 * site.ts の内容を Notion ページ本体へ同期する。
 *
 * 使い方:
 *   NOTION_TOKEN=secret_xxx npm run sync:notion
 *   NOTION_TOKEN=secret_xxx npm run sync:notion -- --append  # 既存ブロックを残して末尾に追記
 *
 * 事前準備:
 *   1. https://www.notion.so/my-integrations で Integration を作成
 *   2. 対象ページで「接続」→ Integration を追加
 *   3. .env に NOTION_TOKEN を設定（.env.example 参照）
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Client } from "@notionhq/client";
import type {
  BlockObjectRequest,
  RichTextItemRequest,
} from "@notionhq/client/build/src/api-endpoints";
import {
  contact,
  faqItems,
  hero,
  portfolioItems,
  pricingPlans,
  profile,
  services,
  siteMeta,
  workCaseStudies,
} from "../src/content/site";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile();

const PAGE_ID =
  process.env.NOTION_PAGE_ID ?? "0be3907927f0827d9adf81fa46da972e";
const TOKEN = process.env.NOTION_TOKEN;
const APPEND_MODE = process.argv.includes("--append");

const notion = new Client({ auth: TOKEN });

const txt = (content: string): RichTextItemRequest => ({
  type: "text",
  text: { content },
});

const bold = (content: string): RichTextItemRequest => ({
  type: "text",
  text: { content },
  annotations: { bold: true },
});

const link = (content: string, url: string): RichTextItemRequest => ({
  type: "text",
  text: { content, link: { url } },
  annotations: { color: "blue" },
});

const gray = (content: string): RichTextItemRequest => ({
  type: "text",
  text: { content },
  annotations: { color: "gray" },
});

const divider = (): BlockObjectRequest => ({
  object: "block",
  type: "divider",
  divider: {},
});

const h1 = (content: string): BlockObjectRequest => ({
  object: "block",
  type: "heading_1",
  heading_1: { rich_text: [txt(content)], color: "blue" },
});

const h2 = (content: string): BlockObjectRequest => ({
  object: "block",
  type: "heading_2",
  heading_2: { rich_text: [txt(content)] },
});

const h3 = (content: string): BlockObjectRequest => ({
  object: "block",
  type: "heading_3",
  heading_3: { rich_text: [txt(content)] },
});

const para = (...richText: RichTextItemRequest[]): BlockObjectRequest => ({
  object: "block",
  type: "paragraph",
  paragraph: { rich_text: richText },
});

const bullet = (...richText: RichTextItemRequest[]): BlockObjectRequest => ({
  object: "block",
  type: "bulleted_list_item",
  bulleted_list_item: { rich_text: richText },
});

function buildBlocks(): BlockObjectRequest[] {
  const blocks: BlockObjectRequest[] = [];

  blocks.push(h1(hero.title));
  blocks.push(para(txt(hero.eyebrow)));
  blocks.push(para(txt(hero.subtitle)));
  blocks.push(divider());

  blocks.push(h2("🛠️ サービス"));
  for (const service of services) {
    blocks.push(h3(service.title));
    blocks.push(para(txt(service.description)));
    for (const feature of service.features) {
      blocks.push(bullet(txt(feature)));
    }
  }
  blocks.push(divider());

  blocks.push(h2("🗂️ 制作実績"));
  for (const [i, item] of portfolioItems.entries()) {
    blocks.push(h3(`${i + 1}. ${item.title}`));
    blocks.push(para(txt(item.subtitle)));
    blocks.push(para(txt(item.summary)));
    blocks.push(
      para(
        gray(`技術: ${item.tags.join(" / ")}　`),
        bold("デモ → "),
        link(item.demoUrl, item.demoUrl)
      )
    );
  }
  blocks.push(divider());

  blocks.push(h2("📋 支援事例"));
  blocks.push(
    para(
      gray("守秘義務の範囲で掲載している支援・制作事例です。")
    )
  );
  for (const [i, study] of workCaseStudies.entries()) {
    blocks.push(h3(`${i + 1}. ${study.title}`));
    blocks.push(para(bold("クライアント："), txt(study.client)));
    if (study.clientNote) {
      blocks.push(para(gray(`※ ${study.clientNote}`)));
    }
    blocks.push(para(bold("背景・課題："), txt(study.backgroundIntro)));
    blocks.push(para(bold("ご要望")));
    for (const need of study.needs) {
      blocks.push(bullet(txt(need)));
    }
    blocks.push(para(bold("お悩み")));
    for (const pain of study.painPoints) {
      blocks.push(bullet(txt(pain)));
    }
    blocks.push(para(bold("アプローチ・対応内容")));
    for (const section of study.approachSections) {
      blocks.push(para(bold(section.heading)));
      for (const b of section.bullets) {
        blocks.push(bullet(txt(b)));
      }
    }
    blocks.push(para(bold("成果")));
    for (const outcome of study.outcomes) {
      blocks.push(bullet(txt(outcome)));
    }
    if (study.followUpNote) {
      blocks.push(para(txt(study.followUpNote)));
    }
    blocks.push(para(gray(`※ ${study.confidentialityNote}`)));
  }
  blocks.push(divider());

  blocks.push(h2("💰 料金目安"));
  for (const plan of pricingPlans) {
    const label = plan.badge ? `${plan.name}（${plan.badge}）` : plan.name;
    blocks.push(
      bullet(
        bold(`${label}　${plan.price}`),
        txt(`　— ${plan.description}`)
      )
    );
    for (const b of plan.bullets) {
      blocks.push(bullet(gray(`　${b}`)));
    }
  }
  blocks.push(
    para(
      gray("※ 規模・要件によって変動します。まずはお気軽にご相談ください。")
    )
  );
  blocks.push(divider());

  blocks.push(h2("👤 プロフィール"));
  blocks.push(para(bold(profile.name), txt(`　|　${profile.tradeName}`)));
  blocks.push(para(txt(profile.roles)));
  for (const line of profile.story) {
    blocks.push(bullet(txt(line)));
  }
  blocks.push(
    bullet(
      bold("使用ツール："),
      txt(` ${profile.tools.join(" / ")}`)
    )
  );
  blocks.push(para(txt(profile.mission)));
  blocks.push(divider());

  blocks.push(h2("❓ よくある質問"));
  for (const item of faqItems) {
    blocks.push(h3(item.q));
    blocks.push(para(txt(item.a)));
  }
  blocks.push(divider());

  blocks.push(h2("📩 お問い合わせ"));
  blocks.push(para(txt(contact.sectionDescription)));
  blocks.push(para(txt(contact.intro)));
  blocks.push(
    para(
      txt("Email："),
      link(profile.email, `mailto:${profile.email}`),
      txt("　|　X："),
      link(profile.handle, profile.xUrl),
      txt("　|　LINE："),
      link("友だち追加", profile.lineUrl)
    )
  );
  blocks.push(
    para(
      txt("Googleフォーム："),
      link(contact.googleFormUrl, contact.googleFormUrl)
    )
  );

  return blocks;
}

async function deleteAllBlocks(pageId: string) {
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    for (const block of response.results) {
      if ("type" in block && block.type !== "child_page") {
        await notion.blocks.delete({ block_id: block.id });
      }
    }

    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);
}

async function appendBlocksInChunks(
  pageId: string,
  blocks: BlockObjectRequest[]
) {
  const CHUNK = 100;
  for (let i = 0; i < blocks.length; i += CHUNK) {
    await notion.blocks.children.append({
      block_id: pageId,
      children: blocks.slice(i, i + CHUNK),
    });
  }
}

async function main() {
  if (!TOKEN) {
    console.error(
      "❌ NOTION_TOKEN が未設定です。.env に NOTION_TOKEN=secret_xxx を設定してください。"
    );
    process.exit(1);
  }

  const blocks = buildBlocks();
  console.log(`📄 対象ページ ID: ${PAGE_ID}`);
  console.log(`📝 生成ブロック数: ${blocks.length}`);
  console.log(`🔧 モード: ${APPEND_MODE ? "追記（--append）" : "全置換"}`);

  await notion.pages.update({
    page_id: PAGE_ID,
    properties: {
      title: {
        title: [{ text: { content: siteMeta.title } }],
      },
    },
  });

  if (!APPEND_MODE) {
    console.log("🗑️  既存ブロックを削除中...");
    await deleteAllBlocks(PAGE_ID);
  }

  console.log("⬆️  ブロックを書き込み中...");
  await appendBlocksInChunks(PAGE_ID, blocks);

  const page = await notion.pages.retrieve({ page_id: PAGE_ID });
  console.log("✅ Notion ページへの同期が完了しました！");
  if ("url" in page && page.url) {
    console.log("URL:", page.url);
  }
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error("❌ エラー:", message);
  if (err && typeof err === "object" && "body" in err) {
    console.error("詳細:", JSON.stringify((err as { body: unknown }).body, null, 2));
  }
  process.exit(1);
});
