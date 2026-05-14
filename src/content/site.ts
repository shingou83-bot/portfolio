import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarClock, MessagesSquare } from "lucide-react";

export const siteMeta = {
  title:
    "内田真悟（Shingo Uchida）| Vital Lab — AIシステム構築・Web制作（現役看護師）",
  description:
    "中小企業経営者・個人事業主・小規模事業者向け。Claude API / Dify / ChatGPT API によるチャットボット、業務自動化、Next.js の Web 制作まで業種を問わず伴走。Netlify / Vercel で公開まで対応。",
};

export const hero = {
  eyebrow: "現役看護師 × AIシステム構築・Web制作",
  title: "AIという『文句を言わない即戦力』を採用しませんか？",
  subtitle:
    "あなたのビジネスの\"面倒\"を、AIとWebで仕組み化する。中小企業・個人事業主の皆さまへ、チャットボットからサイト制作まで業種を問わず伴走します。",
  ctaLabel: "まずは無料相談する",
};

/** サービスセクション見出し下の説明文 */
export const servicesSectionDescription =
  "窓口案内から24時間受付、独自ナレッジ学習まで。課題に合わせて設計し、運用しやすい形でお渡しします。";

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "SERVICE 01：窓口・案内係AI（FAQ・問い合わせ自動化）",
    description:
      "「持ち物は？」「送料は？」など毎日同じ質問に自動回答。スタッフの電話対応時間を削減し、本来の業務に集中できる環境を構築します。",
    features: [
      "クリニック・施設の窓口、ECサイトの問い合わせなど幅広い業種で活用可能",
      "電話・チャット・Web の一次対応を設計",
      "ナレッジ更新しやすい会話フローを整備",
    ],
    icon: MessagesSquare,
  },
  {
    title: "SERVICE 02：24時間自動受付AI（予約・問い合わせ対応）",
    description:
      "深夜・休日でも予約や問い合わせに即レス。「電話に出られなくて他社にお客様を取られた」という機会損失を減らす設計が可能です。",
    features: [
      "不動産・美容室・飲食店など、予約導線に合わせたシナリオ設計",
      "営業時間外も見込み客を逃さない一次対応",
      "既存の予約・CRM 連携は要件に応じて検討",
    ],
    icon: CalendarClock,
  },
  {
    title: "SERVICE 03：専属コンシェルジュAI（RAGによる独自情報学習）",
    description:
      "御社のHP・パンフレット・料金表・規約をAIに学習させ、御社のルールに沿った回答のみを返すコンシェルジュ型を構築します。",
    features: [
      "社内向け（新人教育・マニュアル検索・総務QA）にも応用可能",
      "出典・確認フローを意識したガードレール設計",
      "更新された資料の再学習フローを整備",
    ],
    icon: BookOpen,
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

export type CaseStudy = {
  industry: string;
  challenge: string;
  /** 医療事例など、課題と成果を2ブロックで示す場合に使用 */
  outcome?: string;
  /** 架空事例など、取り組みを明示する場合 */
  approach?: string;
  /** 効果・結果 */
  result?: string;
  /** 対話デモURL（未確定時は "#"） */
  demoUrl: string;
  /** デモボタン文言（省略時は既定） */
  demoLabel?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    industry: "クリニック受診案内AI",
    challenge:
      "「持ち物は？」「今日やってる？」という電話が鳴り止まず、窓口が常に多忙だった",
    result: "窓口の電話が3〜4割減り、スタッフの負担が激減",
    demoUrl: "https://udify.app/chat/kR538Rnv0ttQbiy4",
  },
  {
    industry: "不動産内見予約AI",
    challenge: "営業時間外の問い合わせを他社に取られ、機会損失が続いていた",
    result: "夜間の予約数が約20%アップ",
    demoUrl: "https://udify.app/chat/H3Dp8wV3fzJLUAnX",
  },
  {
    industry: "ヘアサロン予約・接客AI",
    challenge: "シャンプー中に電話に出られず、予約や問い合わせを取りこぼしていた",
    result: "電話対応を月60時間削減し、新規予約率も向上",
    demoUrl: "https://udify.app/chat/XLSfg62SSFQxzbWT",
  },
  {
    industry: "ECサイト24時間接客AI",
    challenge:
      "送料・返品ルールの確認が面倒で、購入をやめるお客様が多かった",
    result: "購入率（CVR）が5%向上し、CS担当の負担も大幅に削減",
    demoUrl: "https://udify.app/chat/Ll5d2LmJaL47xTrL",
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
    tags: ["Claude API", "Dify"],
    gradient: "from-navy-700 to-navy-950",
    demoUrl: "https://udify.app/chat/Ll5d2LmJaL47xTrL",
  },
  {
    title: "病院・クリニック向けプロモーションサイト",
    subtitle: "チャットボット（AIアシスタント）付き・公開中",
    summary:
      "サービス紹介・事例・料金・FAQ に加え、画面右下の AI アシスタントで訪問者からの質問に一次対応できる構成です。医療ドメイン向けの本番公開サイトとしてご覧いただけます。",
    tags: ["Next.js", "Vercel", "Claude API"],
    gradient: "from-navy-800 to-gold-600",
    demoUrl: "https://my-hp-plum.vercel.app/",
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
    a: "はい。医療・不動産・美容・飲食・EC・士業・個人事業主など業種問わず対応します。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "基本プラン50,000円〜、モニタープラン30,000円〜です。無料相談のうえでお見積りします。",
  },
  {
    q: "ITに詳しくなくても大丈夫ですか？",
    a: "はい。操作説明・マニュアル・簡易サポートをセットにしており、非エンジニアの方でも運用できる設計を心がけています。",
  },
  {
    q: "現役看護師が副業でやっているのですか？",
    a: "はい。本業の臨床経験を活かしながら、AIとWebの力で業務課題を解決することを使命としています。",
  },
];

export const profile = {
  name: "内田真悟（Shingo Uchida）",
  tradeName: "Vital Lab（バイタルラボ）",
  email: "shingo.u83@gmail.com",
  handle: "@dharmataishou",
  xUrl: "https://x.com/dharmataishou",
  roles: "現役看護師 × AIシステム構築・Web制作",
  story: [
    "現役看護師として臨床に立ち、記録・連携・コミュニケーションの現場を日々担っています。",
    "副業として AI システム構築・Web 制作・チャットボット開発・AI研修に取り組み、Claude API / Dify / ChatGPT API・Next.js・Netlify / Vercel を用いた実装と公開までを行っています。",
    "中小企業経営者・個人事業主・小規模事業者の皆さまへ、業種を問わず「続けられる仕組み」づくりをサポートしています。",
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

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  bullets: string[];
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "基本プラン",
    price: "50,000円〜",
    description: "AIエージェントの作成からマニュアル学習、公開設定まで一式を含みます。",
    bullets: ["納期目安：最短5日〜2週間"],
  },
  {
    name: "モニタープラン",
    price: "30,000円〜",
    description:
      "制作したAIを実績として公開させていただける場合の特別価格です。",
    bullets: ["毎月3社限定"],
    badge: "モニター募集",
  },
  {
    name: "継続サポート",
    price: "月額15,000円〜",
    description: "運用を支えるオプションです。",
    bullets: [
      "回答チェック",
      "新資料の追加学習",
      "運用サポート",
    ],
    badge: "オプション",
  },
  {
    name: "カスタマイズ",
    price: "別途お見積もり",
    description: "要件に応じた個別開発・連携・大規模ナレッジ設計など。",
    bullets: ["無料相談のうえで範囲とスケジュールをご提案します"],
  },
];

export const contact = {
  intro:
    "まずは『こんなことできる？』という雑談レベルで構いません。現状の業務フローを聞かせていただければ、AIで楽にできる部分を無料で診断いたします。無理な売り込みは一切しません。お気軽にご連絡ください。",
  googleFormUrl: "https://forms.gle/F9xi3FaUGRFjdiUg7",
};

export const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#stats", label: "実績" },
  { href: "#cases", label: "導入事例" },
  { href: "#pricing", label: "料金" },
  { href: "#portfolio", label: "制作実績" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#process", label: "導入の流れ" },
  { href: "#faq", label: "FAQ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];
