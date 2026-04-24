import type { LucideIcon } from "lucide-react";
import {
  Bot,
  GraduationCap,
  LayoutTemplate,
  Workflow,
} from "lucide-react";

export const siteMeta = {
  title:
    "内田真悟（Shingo） | 現役看護師（病棟、外来、オペ室）× AIシステム構築・Web制作",
  description:
    "中小企業・個人事業主向けに、Claude API / Dify / ChatGPT API を活用したチャットボット、業務自動化、Next.js によるホームページ・LP制作、AI活用コンサル・研修を提供。Netlify / Vercel で公開まで伴走。東京・埼玉（東村山・所沢中心）から全国対応。",
};

export const hero = {
  eyebrow: "あなたのビジネスの\"面倒\"を、AIとWebで仕組み化する",
  title: "現役看護師 × AIシステム構築・Web制作",
  subtitle:
    "中小企業・個人事業主の皆さまへ。チャットボット、業務自動化、サイト制作まで、業種を問わず伴走します。活動エリアは東京・埼玉（東村山・所沢中心）／オンラインで全国対応可能です。",
  ctaLabel: "まずは無料相談する",
};

/** サービスセクション見出し下の説明文 */
export const servicesSectionDescription =
  "課題の整理から構築、公開、運用サポートまで。ボット・自動化・Web・研修を組み合わせて、続けられる形に落とし込みます。";

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "チャットボット構築",
    description:
      "FAQ対応・予約案内・問い合わせの一次対応などを、業種を問わず設計・構築します。",
    features: [
      "Claude API / Dify / ChatGPT API を状況に応じて選定",
      "LINE や既存 Web サイトへの埋め込みにも対応",
      "ナレッジ更新しやすい会話フローを設計",
    ],
    icon: Bot,
  },
  {
    title: "業務自動化・AIエージェント開発",
    description:
      "書類作成の下書き、データ整理、メール文案など、定型に近い業務を AI で省力化します。",
    features: [
      "プロンプト設計から API 連携・社内ツール組み込みまで対応",
      "確認フローや権限設計など、誤用防止のガードレールを検討",
      "小さく始めて効果を測りながら拡張する段階導入も可能",
    ],
    icon: Workflow,
  },
  {
    title: "ホームページ・LP制作",
    description:
      "Next.js や HTML/CSS による静的サイト・ランディングページを制作します。",
    features: [
      "開業・リニューアル・ポートフォリオなど用途に合わせた構成",
      "スマホ表示や表示速度を意識したレスポンシブ設計",
      "Netlify / Vercel を想定した公開・運用のしやすさ",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "AI活用コンサルティング・研修",
    description:
      "経営者・スタッフ向けに、AI を「使える状態」にするための伴走支援を行います。",
    features: [
      "ツール選定、プロンプト設計、社内ルール整備のすり合わせ",
      "職種・ITリテラシーに合わせたハンズオン研修",
      "導入初期の不安を減らすケーススタディ中心の内容",
    ],
    icon: GraduationCap,
  },
];

export const stats = [
  {
    label: "コンサル・制作の相談",
    value: "受付中",
    note: "無料相談から範囲をすり合わせます",
  },
  {
    label: "研修・講座の設計規模",
    value: "15+",
    note: "セッション単位での設計・制作実績",
  },
  {
    label: "反復改善の代表例",
    value: "v5 まで",
    note: "記録支援系など、プロトタイプを重ねた開発経験",
  },
];

export const caseStudies = [
  {
    industry: "歯科クリニック",
    challenge: "問診・全身リスク説明に時間がかかり、スタッフ負担が大きい",
    outcome:
      "来院前AI問診デモ（サンプル歯科・公開）で対話型ガイドを検証。来院前の情報整理と説明の平準化に向けた設計",
  },
  {
    industry: "病院（地域包括ケア等）",
    challenge: "多職種連携の文書が多く、看護記録の質と効率の両立が課題",
    outcome:
      "週間SOAP自動生成デモ（公開）で経過データからの下書き生成を実証。匿名化と確認フローを組み込んだ運用イメージを共有",
  },
  {
    industry: "病院・診療所（職員研修）",
    challenge:
      "生成AI導入後も指示の出し方が職員ごとにばらつき、患者説明や記録補助を安全に使い切れていない",
    outcome:
      "医療職員向けプロンプト基礎講座（公開スライド教材）と同じ構成で、役割明示・フォーマット指定・出力確認の原則を多職種向けに体系化。15セッション超の設計知見を反映",
  },
  {
    industry: "個人事業主（オンライン講師・架空シナリオ）",
    challenge:
      "問い合わせ対応に時間がかかりすぎ、本来のコンテンツ制作に集中できない",
    outcome:
      "FAQ を整理したうえでチャットボットを構築し、LINE からも同じナレッジで案内。繰り返し質問をボットに任せ、個別対応は必要な案件に絞った運用イメージ",
  },
  {
    industry: "小売・サービス業（地域店舗・架空シナリオ）",
    challenge: "既存サイトが古く、スマホ表示が崩れ来店導線も分かりにくい",
    outcome:
      "Next.js でレスポンシブ対応の LP を制作。キャッチコピー・料金・予約導線を一画面に整理し、更新しやすい構成でリニューアル",
  },
];

export type PortfolioItem = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  gradient: string;
  demoUrl: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "口腔×全身リスク問診AI",
    subtitle: "サンプル歯科・来院前問診（公開デモ）",
    summary:
      "お口の症状と全身状態を把握する来院前問診を、対話形式で整理する匿名サンプルです。医療ドメインでの会話設計の参考例として掲載しています。",
    tags: ["Next.js", "Claude API", "Netlify"],
    gradient: "from-gold-600 to-navy-900",
    demoUrl: "https://dental-interview.netlify.app/",
  },
  {
    title: "看護SOAP記録自動生成システム",
    subtitle: "反復開発 v1〜v5 の知見を反映",
    summary:
      "週間の経過から SOAP 記録の下書きを生成する検証デモ。反復改善と現場向けガードレールの考え方を反映しています。",
    tags: ["Next.js", "API", "Netlify"],
    gradient: "from-navy-800 to-gold-600",
    demoUrl: "https://soap-demo-v5.netlify.app/",
  },
  {
    title: "医療スタッフ向けプロンプト講座",
    subtitle: "15セッション以上の設計実績",
    summary:
      "役割明示・フォーマット指定・出力確認を軸にした公開スライド教材。多職種向け研修の構成イメージとしてご覧いただけます。",
    tags: ["研修設計", "プロンプト", "公開教材"],
    gradient: "from-gold-500 to-navy-950",
    demoUrl: "https://medicalpromptslides.netlify.app/",
  },
  {
    title: "汎用チャットボットデモ",
    subtitle: "業種不問・FAQ 対応型（Dify 公開チャット）",
    summary:
      "Dify で公開している対話デモです。FAQ や案内の一次対応イメージとして、業種を問わず参考にご覧いただけます。",
    tags: ["Dify", "チャットボット", "FAQ対応"],
    gradient: "from-navy-700 to-navy-950",
    demoUrl: "https://udify.app/chat/Ll5d2LmJaL47xTrL",
  },
  {
    title: "ホームページ制作サンプル",
    subtitle: "手打ちうどん店 LP（架空店舗・公開デモ）",
    summary:
      "飲食店の開業・店舗サイトを想定した1ページ構成。こだわり・メニュー・アクセスなど来店導線を整理したサンプルです。",
    tags: ["Netlify", "LP", "レスポンシブ"],
    gradient: "from-gold-600 to-navy-800",
    demoUrl: "https://udondemo.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "現場の記録の流れを理解したうえで、AIの落とし所を一緒に考えてくれた。机上の空論ではない提案だった。",
    name: "診療所 管理者",
    role: "協力パートナー（匿名）",
  },
  {
    quote:
      "歯科向け問診デモは、スタッフがイメージしやすく、院内向け説明にそのまま使えた。",
    name: "歯科クリニック 関係者",
    role: "デモ検証協力",
  },
  {
    quote:
      "研修コンテンツは職種別に噛み砕かれており、導入初期の不安を減らしてくれた。",
    name: "病院 教育担当",
    role: "講座フィードバックより",
  },
];

export const processSteps = [
  { title: "無料相談", description: "課題・規模・希望時期をヒアリング" },
  { title: "詳細ヒアリング", description: "業務フロー・システム環境を確認" },
  { title: "デモ提供", description: "イメージに近いプロトタイプで共有" },
  { title: "契約", description: "範囲・スケジュール・保守を明文化" },
  { title: "構築・導入", description: "開発・連携・テストを実施" },
  { title: "サポート", description: "運用フォローと改善サイクル" },
];

export const faqItems = [
  {
    q: "どんな業種でも対応できますか？",
    a: "はい。医療・飲食・小売・士業・個人事業主など、業種を問わずご相談いただけます。まずは課題と既存の仕組みを伺い、無理のない範囲からご提案します。お気軽にご連絡ください。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "チャットボット構築・LP 制作・コンサルティングのいずれも、規模・要件により変動します。無料相談のうえでおおまかなお見積りと、段階的な進め方をご提案します。",
  },
  {
    q: "ITに詳しくなくても大丈夫ですか？",
    a: "はい。操作説明・マニュアル・簡易サポートをセットにしており、非エンジニアの方でも運用しやすい設計を心がけています。",
  },
  {
    q: "導入までどのくらいかかりますか？",
    a: "検証（PoC）で数週間から、本番連携やサイト一式まで含む場合は要件により数ヶ月となることもあります。業種・チーム規模にかかわらず、優先度の高い機能から段階リリースすることも可能です。",
  },
];

export const profile = {
  name: "内田真悟（Shingo Uchida）",
  handle: "@dharmataishou",
  xUrl: "https://x.com/dharmataishou",
  roles: "現役看護師（病棟、外来、オペ室）× AIシステム構築・Web制作",
  story: [
    "病棟・外来・オペ室で看護師として勤務し、記録・連携・コミュニケーションの現場を日々担っています。",
    "副業として AI システム構築・Web 制作・チャットボット開発に取り組み、Claude API / Dify / ChatGPT API・Next.js・Netlify / Vercel を用いた実装と公開までを行っています。",
    "中小企業・個人事業主の皆さまへ、業種を問わず「続けられる仕組み」づくりをサポートしています。",
  ],
  tools: [
    "Claude API",
    "Dify",
    "ChatGPT API",
    "Next.js",
    "Netlify",
    "Vercel",
  ],
  mission:
    "現場で培った「ちゃんと使われるか」の視点と、実装のスピードを両立させたい。AI と Web で、経営者・スタッフの負担を減らし、本業に集中できる時間を増やすお手伝いをします。",
};

export const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#stats", label: "実績" },
  { href: "#cases", label: "導入事例" },
  { href: "#portfolio", label: "制作実績" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#process", label: "導入の流れ" },
  { href: "#faq", label: "FAQ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];
