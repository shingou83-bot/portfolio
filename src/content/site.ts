import type { LucideIcon } from "lucide-react";
import {
  Bot,
  FileText,
  GraduationCap,
  LineChart,
} from "lucide-react";

export const siteMeta = {
  title: "Shingo | 現役看護師（病棟、外来、オペ室）× 医療AIエンジニア",
  description:
    "現役看護師が臨床現場の課題を理解したうえで、Dify・Claude API 等を活用した院内向けAIチャットボット、看護記録の自動化、研修・コンサルティングを提供します。",
};

export const hero = {
  eyebrow: "医療現場の業務負荷を減らし、患者ケアの質を高める",
  title: "現役看護師が作る、現場で使えるAI",
  subtitle:
    "クリニック・病院向けに、使える・続けられるAIシステムを設計・構築します。東村山・所沢エリアを中心にアウトリーチ活動中。",
  ctaLabel: "まずは無料相談する",
};

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "医療AIチャットボット構築",
    description:
      "Dify / Claude API を活用し、院内マニュアルやFAQに基づく院内向けチャットボットを構築します。",
    features: [
      "歯科クリニック向けデモなど実装経験あり",
      "業務フローに沿った会話設計",
      "運用しやすいナレッジ更新の設計",
    ],
    icon: Bot,
  },
  {
    title: "看護記録・文書AI自動化",
    description:
      "SOAP 記録や看護サマリーの下書き生成、テンプレート化で記録負担を軽減します。",
    features: [
      "看護記録AIを v5 まで反復開発した知見",
      "現場の記録様式に合わせた調整",
      "誤用防止のためのガードレール設計",
    ],
    icon: FileText,
  },
  {
    title: "プロンプトエンジニアリング研修",
    description:
      "医療スタッフ向けのAI活用研修・講座を、職種・レベルに合わせて設計します。",
    features: [
      "15セッション以上の講座設計・制作実績",
      "ケーススタディ中心の実践型",
      "院内ルール・倫理に配慮した内容",
    ],
    icon: GraduationCap,
  },
  {
    title: "医療AIコンサルティング",
    description:
      "導入相談からツール選定、業務フロー設計まで伴走します。",
    features: [
      "セキュリティ・ガバナンスの観点を含む提案",
      "小規模クリニックから中小病院まで対応",
      "PoCから本番運用までのロードマップ",
    ],
    icon: LineChart,
  },
];

/** 導入検討クリニック数は実数に合わせて更新してください */
export const stats = [
  { label: "導入検討中のクリニック", value: "複数施設", note: "※東村山・所沢エリア中心" },
  { label: "看護記録AI 開発バージョン", value: "v5", note: "反復改善の実績" },
  { label: "プロンプト講座セッション", value: "15+", note: "設計・制作" },
];

export const caseStudies = [
  {
    industry: "歯科クリニック",
    challenge: "問診・全身リスク説明に時間がかかり、スタッフ負担が大きい",
    outcome:
      "口腔×全身リスク問診AI（公開デモ）で対話型ガイドを検証。来院前の情報整理と説明の平準化に向けた設計",
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
];

export const portfolioItems = [
  {
    title: "口腔×全身リスク問診AI",
    subtitle: "歯科クリニック向けデモ",
    gradient: "from-gold-600 to-navy-900",
    demoUrl: "https://amano-dental-interview.netlify.app/",
  },
  {
    title: "看護SOAP記録自動生成システム",
    subtitle: "反復開発 v1〜v5 の知見を反映",
    gradient: "from-navy-800 to-gold-600",
    demoUrl: "https://soap-demo-v5.netlify.app/",
  },
  {
    title: "医療スタッフ向けプロンプト講座",
    subtitle: "15セッション以上の設計実績",
    gradient: "from-gold-500 to-navy-950",
    demoUrl: "https://medicalpromptslides.netlify.app/",
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
    q: "医療情報のセキュリティは大丈夫ですか？",
    a: "取り扱うデータ区分に応じて、オンプレミス寄りの構成・APIの選択・アクセス制御・ログ方針などを設計します。個人情報を含む運用では、院内規程・個人情報保護法に沿った扱いを前提に、必要に応じて匿名化・マスキング・契約範囲の明確化を行います。詳細は個別にご相談ください。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "チャットボット構築、記録自動化、研修、コンサルのいずれも、規模・連携範囲・運用人数によって変動します。無料相談のうえでおおまかな見積りと段階的なプランをご提案します。",
  },
  {
    q: "ITに詳しくなくても使えますか？",
    a: "はい。操作画面の簡素化・マニュアル・簡易トレーニングをセットにし、現場スタッフが日常業務の延長で使えることを重視しています。",
  },
  {
    q: "導入までどのくらいかかりますか？",
    a: "PoCで数週間から、本番連携を含む場合は要件により数ヶ月となることがあります。優先度の高い機能から段階リリースすることも可能です。",
  },
];

export const profile = {
  name: "Shingo",
  handle: "@dharmataishou",
  xUrl: "https://x.com/dharmataishou",
  roles: "現役看護師（病棟、外来、オペ室）× 医療AIエンジニア",
  story: [
    "看護師として病棟、外来、オペ室で勤務し、記録・連携・多職種コミュニケーションの現場課題を日々実感しています。",
    "副業でAI・開発に取り組み、看護記録AIを v5 まで反復改善。臨床とエンジニアリングの両方の言語で話せるようになりました。",
    "現在は医療機関向けに、使える・続けられるAIシステムと研修・コンサルティングを提供しています。",
  ],
  tools: ["Dify", "Claude API", "ChatGPT", "Next.js"],
  mission:
    "AIは現場の人を置き去りにしては意味がない。信頼と安全を守りながら、スタッフが少し楽になり、患者さんにより良い時間を届けられるようにしたい。",
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
