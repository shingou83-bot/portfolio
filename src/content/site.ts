import type { LucideIcon } from "lucide-react";
import { Activity, BookOpen, Globe, MessagesSquare } from "lucide-react";

export const siteMeta = {
  title:
    "Vital Lab — 医療・介護向けAI・Web（現役看護師）",
  description:
    "医療・介護・クリニック周りの問い合わせ対応や記録業務の効率化。Claude API / Dify / ChatGPT API と Next.js でチャットボット・業務アプリを設計・公開まで伴走。",
};

export const hero = {
  eyebrow: "現役看護師 × AIシステム構築・Web制作 / Vital Lab",
  title: "医療・介護・クリニックの業務を、AIで軽くします。",
  subtitle:
    "窓口の一次対応から記録まわりまで、現役看護師として現場の流れを踏まえて設計します。同じ仕組みは他業種にも応用できます。",
  ctaLabel: "まずは無料相談する",
  demoCtaLabel: "実際に触れるデモはこちら",
  demoCtaHref: "#live-demos",
};

/** デモ統合ブロック（ヒーロー直下） */
export const liveDemosSection = {
  eyebrow: "Live demos",
  title: "実際に触れるデモはこちら",
  description:
    "ブラウザで開ける公開デモ・制作物です。会場ではまずここからどうぞ。",
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
    title: "問い合わせ対応をAIで自動化（チャットボット構築）",
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
    title: "医療・介護の記録・問診をAIで効率化",
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
    title: "AIアシスタント付きWebサイト制作",
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
    title: "医療スタッフ向けAI活用研修の設計",
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
    label: "現役看護師としての臨床歴",
    value: "10年+",
    note: "急性期病院で臨床を継続（2013年〜）",
  },
  {
    label: "研修・講座の設計",
    value: "15+",
    note: "多職種向けにセッション単位で設計・制作",
  },
  {
    label: "自組織での業務改善（実測）",
    value: "月10h",
    note: "術前説明の動画化で削減（年約120時間）",
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
    subtitle: "現場の声を重ねて改善したデモ",
    summary:
      "週間経過からSOAP記録の下書きを自動生成。現場のフィードバックを重ねて改善してきた、記録業務の時間短縮を目指すシステムのデモです。",
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
    subtitle: "電話の一次対応を自動化（Dify・公開デモ）",
    summary:
      "「持ち物は？」「今日やってる？」という定型の問い合わせに自動応答するクリニック受診案内チャットボット。Difyで構築した、電話の一次対応を自動化する公開デモです。",
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
    title: "外来の術前説明を動画化し、看護師工数を月約10時間削減",
    client: "自身の勤務先（ある医療機関の外来）／現役看護師としての実践事例",
    clientNote:
      "所属医療機関・患者が特定される情報は非公開。収益目的ではない自組織での業務改善事例として記載しています。",
    backgroundIntro:
      "外来で手術を受ける患者への術前説明（オペオリエンテーション）を、看護師が毎回対面で実施していました。内容はほぼ定型でありながら、看護師の時間を継続的に消費していました。",
    needs: [
      "手術予定患者へ、術前の注意点を漏れなく・分かりやすく伝えたい",
      "説明の質を担当者によらず均一にしたい",
      "看護師の対面説明の負担を軽くしたい",
    ],
    painPoints: [
      "1回5人・1人30分・週1回で、週2.5時間を対面説明に消費",
      "毎回ほぼ同じ内容を口頭で繰り返していた",
      "説明者による内容・伝わり方のばらつき",
    ],
    approachSections: [
      {
        heading: "1. 説明内容の棚卸しと台本設計",
        bullets: [
          "対面で毎回話していた術前説明の要点を洗い出し",
          "AIを用いて、患者にわかりやすい説明台本を作成",
          "専門用語をやさしい表現に調整",
        ],
      },
      {
        heading: "2. 動画案内化と現場導入",
        bullets: [
          "台本をもとに動画案内を制作",
          "待合・患者のスマートフォンで視聴できる導線を用意",
          "対面説明を動画視聴に置き換える運用へ",
        ],
      },
    ],
    outcomes: [
      "看護師の対面説明工数を 週2.5時間 → 実質0（月約10時間・年約120時間の削減）",
      "説明品質の標準化（誰が対応しても同一の正確な情報）",
      "患者は繰り返し視聴が可能になり、理解・安心が向上",
    ],
    followUpNote:
      "検査前説明・他科の術前説明など、繰り返し説明業務全般へ同方式で横展開が可能です。",
    confidentialityNote:
      "現役看護師として、自組織の繰り返し業務をAIで改善した実践事例です。所属先・患者が特定される情報は含みません。",
  },
  {
    title: "クリニック受診案内AIで、電話の定型一次対応を自動化",
    client: "クリニックの受診案内を想定した自主制作の公開デモ（Difyで構築）",
    clientNote:
      "実在の患者・施設が特定される情報は含みません。医療現場の問い合わせ導線を踏まえた実装例として掲載しています。",
    backgroundIntro:
      "クリニックには「持ち物は？」「今日は診療している？」「予約は必要？」といった定型の問い合わせ電話が毎日繰り返し入ります。その都度スタッフが対応するため、受付業務が中断され、本来の窓口対応や事務作業を圧迫していました。",
    needs: [
      "毎日繰り返す定型問い合わせへの対応負担を減らしたい",
      "営業時間外でも患者が必要な情報にアクセスできるようにしたい",
      "診療体制が変わってもスタッフ自身で回答を更新できる形にしたい",
    ],
    painPoints: [
      "定型質問のたびに受付業務が中断される",
      "電話対応は営業時間内に限られ、時間外の問い合わせに応えられない",
    ],
    approachSections: [
      {
        heading: "1. よくある問い合わせの整理",
        bullets: [
          "「診療時間」「持ち物」「予約要否」など頻出質問を洗い出し",
          "回答をナレッジとして整理",
        ],
      },
      {
        heading: "2. Difyでチャットボットを構築",
        bullets: [
          "患者からの質問に自動応答するチャットフローを構築",
          "24時間・待ち時間ゼロで一次対応できる導線を設計",
          "ナレッジ更新型の構成で、体制変更にスタッフが追従可能に",
        ],
      },
    ],
    outcomes: [
      "定型問い合わせの一次対応を自動化し、スタッフが電話に取られる回数を削減できる状態を実現",
      "患者は営業時間外でも必要な情報にアクセス可能に",
      "ナレッジ更新型のため、診療体制の変更にもスタッフ自身で追従可能",
    ],
    followUpNote:
      "予約受付・問診の事前整理など、他の定型対応にも同方式で横展開が可能です。",
    confidentialityNote:
      "現役看護師として医療現場の問い合わせ導線を踏まえて設計した、AIによる一次対応自動化の実装例です。実在の患者・施設が特定される情報は含みません。",
  },
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
  {
    title: "看護師・訪問看護師向け情報コンテンツ（現場知見アンケート協力）",
    client:
      "クラウドワークス経由・医院開業／経営支援・看護師向け情報サイト運営クライアント様",
    clientNote:
      "クライアント名・回答内容の詳細・公開記事URLは非公開としています。依頼時に、作成コンテンツ内で個人が特定される執筆は行わない旨が明示されていました。",
    backgroundIntro:
      "看護師・訪問看護師向けの情報コンテンツを制作するクライアントが、現場経験に裏打ちされた一次情報を収集するため、看護師経験者向けのアンケート回答者を募集していました。一般的な志望動機ではなく、医療現場でしか書けない用語・処置・申し送りの知見が求められていました。",
    needs: [
      "看護師経験3年以上の方による、医療現場特有の用語・経験に基づくアンケート回答",
      "経験年数・診療科など、専門性が伝わるプロフィール記載",
      "Googleフォームによる全問回答と、必要に応じた追加質問への対応",
      "契約から数日以内の回答完了",
    ],
    painPoints: [
      "想像で書ける一般論では、読者（看護師）の信頼を得られない",
      "看護師経験のない応募者を弾き、コミュニケーションコストを抑えたい",
      "コンテンツ制作の素材として、現場感のある回答が必要",
    ],
    approachSections: [
      {
        heading: "1. 応募・プロフィール記載",
        bullets: [
          "公開プロフィールの範囲（2013年〜現役看護師・急性期病院勤務など）で経歴を記載し応募",
          "募集要項の「医療現場にいないと書けない内容」の基準に沿い、専門性が伝わる記載を心がける",
          "看護師経験のない方からの応募を防ぐため、経験年数と現場の具体性を明示",
        ],
      },
      {
        heading: "2. アンケート回答",
        bullets: [
          "クライアント提供のGoogleフォームに沿って全問回答",
          "現場の業務・申し送り・処置補助など、一般化した範囲で経験を構造化して記載",
          "個人特定につながる情報は記載しない方針を遵守",
        ],
      },
      {
        heading: "3. 追加確認・納品",
        bullets: [
          "回答内容の不備・深掘りについて、クライアントからの追加質問に対応",
          "クラウドワークス上で回答完了を報告し、検収後に支払い手続き",
        ],
      },
    ],
    outcomes: [
      "看護師・訪問看護師向けコンテンツ制作の一次情報として、現場知見を提供",
      "期限内にアンケート回答および追加質問への対応を完了",
      "現役看護師としての臨床経験を、執筆以外の形（知見提供）でも活かした実績",
    ],
    confidentialityNote:
      "看護師経験に基づく知見提供・アンケート協力・現場ヒアリング対応も承っています。クラウドワークス契約URLの掲載は行いません。",
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
    q: "看護師を続けながら、依頼にきちんと対応してもらえますか？",
    a: "はい。2026年4月にVital Labとして開業し、AI・Web制作を正式な事業として運営しています。臨床を続けているからこそ、現場の実情を踏まえた設計ができるのが強みです。ご連絡には24時間以内の返信を目安に対応しています。",
  },
];

export const profile = {
  name: "Vital Lab（バイタルラボ）",
  imageSrc: "",
  imageAlt: "",
  tradeName: "Vital Lab（バイタルラボ）",
  email: "dharmaplus83@gmail.com",
  handle: "@dharmaplus83",
  xUrl: "https://x.com/dharmaplus83",
  lineUrl: "https://lin.ee/XA7fgSa",
  lineAddFriendButtonSrc:
    "https://scdn.line-apps.com/n/line_add_friends/btn/ja.png",
  roles: "現役看護師 × AIシステム構築・Web制作 / Vital Lab",
  story: [
    "2013年から現役看護師として臨床に立ち続ける、医療現場出身のAI開発者です。「現場を知る人間がつくるAI」を軸に、医療・介護・クリニックの業務効率化を支援しています。",
    "問診・記録・問い合わせ対応など“現場が本当に困っているところ”を、チャットボットやAIで軽くするのが専門です。術前説明の動画化では月10時間（年約120時間）の削減を実現しました。ツール導入だけでなく、医療スタッフが使いこなせるところまで研修（15セッション以上）で伴走します。",
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
  { href: "#portfolio", label: "制作実績" },
  { href: "#services", label: "サービス" },
  { href: "#stats", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#process", label: "導入の流れ" },
  { href: "#faq", label: "FAQ" },
  { href: "#profile", label: "プロフィール" },
  { href: "#contact", label: "お問い合わせ" },
];
