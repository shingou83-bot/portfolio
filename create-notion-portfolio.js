/**
 * @deprecated scripts/sync-notion-portfolio.ts を使用してください。
 *
 *   cp .env.example .env   # NOTION_TOKEN を設定
 *   npm run sync:notion
 *
 * 既存ページへ site.ts の内容を同期します（デフォルトは全置換）。
 * 末尾に追記する場合: npm run sync:notion -- --append
 */

console.error(
  "このスクリプトは非推奨です。代わりに npm run sync:notion を実行してください。"
);
process.exit(1);
