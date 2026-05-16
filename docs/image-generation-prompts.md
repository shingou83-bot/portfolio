# ポートフォリオカード用・画像生成プロンプト

講師フィードバック向け。ChatGPT の画像生成などでカードサムネイルを作る際のたたき台です。**実在の患者・特定の施設名・診断名の断定**は避け、**デモ・UI モックアップ寄り**のトーンにしてください。生成後は [`src/content/site.ts`](../src/content/site.ts) の各 `portfolioItems` に `imageSrc`（`public/` からのパス）と `imageAlt` を追加します。

## 共通（全カードに追記してよいスタイル）

- Flat vector or soft 3D illustration, professional tech portfolio thumbnail, navy blue #0f172a and gold #d4a94a accent, clean white background, no text in image, no logos, no recognizable real persons, abstract UI shapes and medical-friendly icons only

## 1. 口腔×全身リスク問診AI

- Wide banner thumbnail, abstract friendly dental plus heart-rate line motif, clipboard and speech bubble shapes suggesting pre-visit questionnaire chat, calm healthcare tech aesthetic, minimal detail

## 2. 看護SOAP記録自動生成システム

- Abstract nurse workflow illustration, document with structured sections labeled subtly as generic blocks (no readable PHI), soft clipboard and keyboard hints, efficiency and automation mood

## 3. 医療スタッフ向けプロンプト講座

- Presentation slide stack or projector screen silhouette, teaching and workshop mood, diverse generic silhouettes in soft blur, education technology style

## 4. 汎用チャットボットデモ

- Chat interface mockup with generic message bubbles and sparkle icon suggesting AI, customer support desk abstract, omnichannel neutral business setting

## 5. 病院・クリニック向けプロモーションサイト

- Modern minimal hospital website hero mockup on a laptop frame, abstract building facade, trustworthy medical web design, plenty of whitespace

## ファイル保存の例

- `public/portfolio/dental-interview.jpg`
- `public/portfolio/soap-demo.jpg`
- `public/portfolio/prompt-course.jpg`
- `public/portfolio/chatbot-generic.jpg`
- `public/portfolio/clinic-promo-site.jpg`
