import type { LucideIcon } from "lucide-react";
import { Activity, BookOpen, Globe, MessagesSquare } from "lucide-react";

export const siteMeta = {
  title:
    "内田真悟（Shingo Uchida）| Vital Lab — 医療・介護向けAI・Web（現役看護師）",
  description:
    "医療・介護・クリニック周りの問い合わせ対応や記録業務の効率化。Claude API / Dify / ChatGPT API と Next.js でチャットボット・業務アプリを設計・公開まで伴走。",
};

export const hero = {
  eyebrow: "現役看護師 × AIシステム構築・Web制作 / Vital Lab",
  title: "医療・介護・クリニックの業務を、AIで軽くします。",
  subtitle:
    "窓口の一次対応から記録まわりまで、現場の流れを踏まえて設計します。チャットボット開発からWeb公開まで業種を問わず伴走します。",
  ctaLabel: "まずは無料相談する",
  demoCtaLabel: "実際に触れるデモはこちら",
  demoCtaHref: "#live-demos",
};

/** デモ統合ブロック（ヒーロー直下） */
export const liveDemosSection = {
  eyebrow: "Live demos",
  title: "実際に触れるデモはこちら",
  description:
    "チャットで試せるサンプルと、ブラウザで開ける公開デモです。会場ではまずここからどうぞ。",
  casesSubheading: "対話デモ（業種別サンプル）",
  casesLead: "すぐに操作できるチャット形式のイメージです。",
  portfolioSubheading: "公開サイト・アプリ・教材",
  portfolioLead: "公開中の制作物です。",
};

/** サービスセクション見出し下の説明文 */
export const servicesSectionDescription =
  "現役看護師として医療現場を知るからこそ、「実際に使われる」仕組みを設計できます。";

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "SERVICE 01：AIチャットボット構築",
    description:
      "問い合わせ対応・受付・案内の自動化。「持ち物は？」「今日やってる？」など毎日繰り返す対応をAIに任せ、スタッフが本来の業務に集中できる環境をつくります。",
    features: [
      "クリニック・施設の窓口、ECサイトの問い合わせなど業種問わず対応",
      "電話・チャット・Web の一次対応フローを設計",
      "Claude API / Dify を用いたナレッジ更新しやすい構成",
    ],
    icon: MessagesSquare,
  },
  {
    title: "SERVICE 02：医療・介護向けAIシステム",
    description:
      "記録支援・問診・業務フロー設計など、医療現場の「めんどくさい業務」をAIで解消します。看護師として日々の業務を知っているからこそ、実際に使われる設計が可能です。",
    features: [
      "SOAP記録の下書き自動生成・来院前問診の対話形式整理",
      "現場の運用フローを踏まえたガードレール設計",
      "介護施設・訪問看護・クリニックなど各形態に対応",
    ],
    icon: Activity,
  },
  {
    title: "SERVICE 03：Webサイト制作",
    description:
      "クリニック・施設・個人事業主向けのLP・プロモーションサイトを制作します。AIアシスタント統合による一次対応の自動化にも対応。",
    features: [
      "Next.js / Vercel を用いた高速・SEO対応のサイト構築",
      "AIチャットボットを組み込んだ問い合わせ自動化サイトも対応",
      "公開後の運用サポートも承ります",
    ],
    icon: Globe,
  },
  {
    title: "SERVICE 04：研修・講座設計",
    description:
      "医療スタッフ向けのプロンプト研修・AI導入支援。15セッション以上の設計実績をもとに、多職種が無理なく使えるAI活用研修を構築します。",
    features: [
      "役割明示・フォーマット指定・出力確認を軸にしたプロンプト設計研修",
      "看護師・介護士・事務など多職種向けカリキュラム対応",
      "公開スライド教材・マニュアル制作もセットで対応可能",
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
  /** public/ 配下のパス（例: /portfolio/dental-interview.jpg）。未指定時はグラデーション枠 */
  imageSrc?: string;
  imageAlt?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "口腔×全身リスク問診AI",
    subtitle: "歯科クリニック向け・来院前問診（公開デモ）",
    summary:
      "来院前問診を対話形式で整理。口腔内リスクと全身疾患の関連を考慮した設計で、患者の状態をスムーズに把握できる歯科クリニック向け匿名デモです。",
    tags: ["Next.js", "Claude API", "Netlify"],
    gradient: "from-gold-600 to-navy-900",
    demoUrl: "https://dental-interview.netlify.app/",
  },
  {
    title: "看護SOAP記録自動生成システム",
    subtitle: "反復開発 v1〜v5 の知見を反映",
    summary:
      "週間経過からSOAP記録の下書きを自動生成。v5まで現場フィードバックを重ねた反復改善の過程を反映した、記録業務の時間短縮を目指すシステムです。",
    tags: ["Next.js", "Claude API", "Netlify"],
    gradient: "from-navy-800 to-gold-600",
    demoUrl: "https://soap-demo-v5.netlify.app/",
  },
  {
    title: "医療スタッフ向けプロンプト講座",
    subtitle: "15セッション以上の設計実績・多職種対応",
    summary:
      "15セッション以上の設計実績をもとにした公開スライド教材。役割明示・フォーマット指定・出力確認を軸に、看護師・介護士など多職種がAIを業務に活かせる研修教材です。",
    tags: ["研修設計", "プロンプト", "公開教材"],
    gradient: "from-gold-500 to-navy-950",
    demoUrl: "https://medicalpromptslides.netlify.app/",
  },
  {
    title: "病院・クリニック向けWebサイト（AIアシスタント付き）",
    subtitle: "AIアシスタントで問い合わせ一次対応まで対応",
    summary:
      "サービス紹介・事例・料金・FAQ に加え、画面右下のAIアシスタントで訪問者の問い合わせに一次対応できる構成。医療ドメイン向けの本番公開サイトです。",
    tags: ["Next.js", "Vercel", "Claude API"],
    gradient: "from-navy-800 to-gold-600",
    demoUrl: "https://my-hp-plum.vercel.app/",
  },
  {
    title: "クリニック受診案内AI",
    subtitle: "電話対応3〜4割削減のデモ実績（Dify）",
    summary:
      "「持ち物は？」「今日やってる？」という問い合わせに自動応答するクリニック受診案内チャットボット。Difyを活用し、電話対応を大幅に削減するデモです。",
    tags: ["Dify", "Claude API"],
    gradient: "from-navy-700 to-navy-950",
    demoUrl: "https://udify.app/chat/kR538Rnv0ttQbiy4",
  },
];

export type WorkCaseStudy = {
  title: string;
  client: string;
  clientNote?: string;
  backgroundIntro: string;
  needs: string[];
  painPoints: string[];
  approachSections: { heading: string; bullets: string[] }[];
  outcomes: string[];
  followUpNote?: string;
  confidentialityNote: string;
};

export const workCaseStudies: WorkCaseStudy[] = [
  {
    title: "医療系クライアント向けプレゼン資料制作（動画統合付き）",
    client: "医療関連クライアント様（医師向け発表）",
    clientNote:
      "守秘義務の関係で、クライアント名・具体的な数値・詳細なスライド内容は非公開としています。",
    backgroundIntro:
      "医師向けの学会発表・勉強会において、限られた発表時間の中で専門性を保ちつつ要点を簡潔に伝えたいというご要望をいただきました。",
    needs: [
      "想定聴衆は医師（専門的関心は高いが、時間は限られている）",
      "発表時間は約6〜7分（うち動画50秒を含む）",
      "過度な煽りや比喩は避けつつ、一定の熱量は保ちたい",
      "費用対効果については「攻めすぎない」バランスの良い表現にしたい",
    ],
    painPoints: [
      "伝えたい情報が多く、スライドが増えがち",
      "どこまで費用対効果に踏み込んで良いか判断が難しい",
    ],
    approachSections: [
      {
        heading: "1. 事前ヒアリングと方針設計",
        bullets: [
          "発表の目的、想定聴衆（医師）の前提知識、望ましいトーン（専門性・中立性と熱量のバランス）、費用対効果をどの程度まで表現するかを整理",
          "「要点1枚で結論を提示」＋「必要な場合のみ背景スライドで補足」の構成を提案し合意",
          "約50秒の動画を、直感的な理解を助ける補強要素として使用する方針",
          "トーンは「専門性と中立性を意識しつつ、熱量も伝わるレベル」に調整",
          "費用対効果の数字は、過度に詳細に踏み込みすぎない範囲にとどめる",
        ],
      },
      {
        heading: "2. スライド構成・テキスト設計",
        bullets: [
          "要点スライドと背景スライドの構成を設計",
          "メッセージの優先順位付け（限られた時間内で確実に伝えるべき内容を整理）",
          "医師向けにふさわしい専門性・表現レベルに調整",
          "費用対効果の見せ方や表現の強さをチューニング（強い否定的表現はトーンダウン、代替案は「将来検討のオプション」として穏やかに言及）",
        ],
      },
      {
        heading: "3. 動画統合と最終調整",
        bullets: [
          "依頼元から支給された約50秒の編集済み動画を受領・再生確認",
          "空スライドに動画を埋め込み、ドラッグ＆ドロップで配置",
          "会場での使用を想定し、レイアウトと再生テストまで実施",
          "中間ミーティングで構成案・トーンをすり合わせ",
          "最終版は対面で確認し、その場で軽微な修正を反映",
          "動画埋め込み済みPPTとして、現場でそのまま使える状態で納品",
        ],
      },
    ],
    outcomes: [
      "発表時間（6〜7分）の中に収まるスライド構成を実現",
      "医師向けに適切な「専門性」と「中立的で落ち着いたトーン」の両立",
      "「要点1枚＋必要最小限の背景スライド＋動画」という構成で、聴衆にとっても理解しやすい発表資料に仕上げ",
      "動画とスライドを統合した一体型のプレゼンファイルとして納品し、クライアント側でそのまま現場利用が可能な状態に",
    ],
    followUpNote:
      "納品時には、実際の使用後のフィードバックに応じた微調整や、今後の発表・関連資料への展開にも対応可能である旨をお伝えしました。",
    confidentialityNote:
      "医療系・専門職向けのプレゼン資料制作（構成設計〜トーン調整〜動画統合）まで一貫して対応可能です。",
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
  name: "内田真悟（Uchida Shingo）",
  imageSrc: "/profile/shingo.jpg",
  imageAlt: "内田真悟（Uchida Shingo）のプロフィール写真",
  tradeName: "Vital Lab（バイタルラボ）",
  email: "dharmaplus83@gmail.com",
  handle: "@dharmaplus83",
  xUrl: "https://x.com/dharmaplus83",
  lineUrl: "https://lin.ee/XA7fgSa",
  lineAddFriendButtonSrc:
    "https://scdn.line-apps.com/n/line_add_friends/btn/ja.png",
  roles: "現役看護師 × AIシステム構築・Web制作 / Vital Lab",
  story: [
    "現役看護師として勤務しながら、医療・介護向けのAIシステム構築とWeb制作を行っています。",
    "「現場を知っている人間が作るAI」が強みです。チャットボット開発からWeb公開まで、業種を問わず伴走します。",
    "🏥 看護師（2013年〜現在）　|　🚀 Vital Lab 開業（2026年4月〜）AIコンサルティング・システム構築業",
  ],
  tools: [
    "Claude API",
    "ChatGPT API",
    "Dify",
    "Next.js",
    "React",
    "Netlify",
    "Vercel",
    "Google Forms",
    "Notion",
  ],
  mission:
    "医療現場の「めんどくさい業務」をAIで解消することが目標です。記録・問い合わせ・問診など、現場の流れを踏まえた設計ができるのが強みです。AI導入を検討しているクリニック・医療施設の最初の相談相手になれたら嬉しいです。",
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
  sectionDescription:
    "「こんなことできる？」という相談だけでも大歓迎です。夜勤明け・休日を中心に対応しており、返信は24時間以内を目安にしています。",
  intro:
    "最後までご覧いただきありがとうございます。まずは雑談レベルで構いません。現状の業務フローを聞かせていただければ、AIで楽にできる部分を無料で整理します。無理な売り込みは一切しません。X（@dharmaplus83）のDMが一番早く返信できます。",
  googleFormUrl: "https://forms.gle/F9xi3FaUGRFjdiUg7",
};

/** ヘッダー（営業・交流会向けに絞り込み） */
export const headerNavLinks = [
  { href: "#live-demos", label: "デモ" },
  { href: "#services", label: "サービス" },
  { href: "#pricing", label: "料金" },
  { href: "#profile", label: "プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];

/** フッター（ページ内の全アンカー） */
export const footerLinks = [
  { href: "#live-demos", label: "デモ一覧" },
  { href: "#cases", label: "対話デモ" },
  { href: "#portfolio", label: "制作実績" },
  { href: "#services", label: "サービス" },
  { href: "#stats", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#process", label: "導入の流れ" },
  { href: "#faq", label: "FAQ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];
