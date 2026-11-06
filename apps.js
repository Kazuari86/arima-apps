// =====================================================================
// 午前三時の発明所 — アプリ一覧データ
//
// アプリを増やすときは、このファイルに1件足すだけ。index.html は触らない。
//   icons/ にアイコン画像（512×512 の jpg/png）
//   shots/ に画面写真（App Store のスクショそのまま。縦長）
// を置いて、下の配列に追加する。
//
// status:
//   "released" … 公開中（App Store のボタンが出る）
//   "coming"   … 近日公開（薄く表示され、ボタンは出ない）
//   "hidden"   … 載せない（一時的に外したいとき）
//
// 並び順 = この配列の順番。
// =====================================================================

window.SITE = {
  name: "午前三時の発明所",
  tagline: "3 a.m. inventions",
  email: "arima.app.support@gmail.com",
  // 「つくっている人」の文章。勤務先や地名が分かる言葉は入れない
  about:
    "昼夜交替の勤務をしながら、ひとりでアプリをつくっています。" +
    "自分や家族の暮らしの中で「これ、困るな」と感じたことを、ひとつずつ形にしてきました。" +
    "アカウント登録なし、記録は端末の中だけ、お支払いは買い切りが中心。" +
    "ご意見は、アプリの中のサポートから作り手に直接届きます。"
};

window.APPS = [
  {
    id: "yoteika",
    name: "よてい家",
    status: "released",
    category: "夜勤の家族",
    accent: "#4A5BCF",
    line: "「今日って夜勤？」を、家族に聞かなくていい暮らしへ。",
    desc: "「夜勤」を選んで日付を指でなぞるだけ。家族の今日と「空き・対応中」がホームでわかります。招待された家族は無料。",
    tag: "iPhone · 招待された家族は無料",
    icon: "icons/yoteika.jpg",
    shot: "shots/yoteika.jpg",
    store: "https://apps.apple.com/jp/app/id6803232841",
    support: "familyshare/"
  },
  {
    id: "karioki",
    name: "仮置きカメラ",
    status: "released",
    category: "現場の仕事",
    accent: "#D98A3C",
    line: "仕事の写真が、家族の写真に混ざらない。",
    desc: "開いたらすぐ撮れて、写真は案件ごとの箱にひとりでにまとまる。終わったら箱ごと片付け。",
    tag: "iPhone · 買い切り",
    icon: "icons/karioki.jpg",
    shot: "shots/karioki.jpg",
    store: "https://apps.apple.com/jp/app/id6807511824",
    support: "jobshotbox/"
  },
  {
    id: "minamo",
    name: "みなも",
    status: "released",
    category: "釣り",
    accent: "#E4572E",
    line: "潮見表を見なくても、行きどきを知らせてくれる。",
    desc: "まん中のボタンを押すだけで、時間・ルート・潮・天気が残る。渓流のダム放流・遊漁券・解禁日も、行く前にボタン1つ。",
    tag: "iPhone · 買い切り",
    icon: "icons/minamo.jpg",
    shot: "shots/minamo.jpg",
    store: "https://apps.apple.com/jp/app/id6803208983",
    support: "catchnote/"
  },
  {
    id: "kokedama",
    name: "こけだま日和",
    status: "released",
    category: "癒し",
    accent: "#5C7A4B",
    line: "急がせない。減らない。縁側で苔玉と、のんびり。",
    desc: "ふわふわの苔玉を育てる放置ゲーム。スタミナも時限イベントも広告もありません。何日か開かなくても、何も減りません。",
    tag: "iPhone · 買い切り",
    icon: "icons/kokedama.jpg",
    shot: "shots/kokedama.jpg",
    store: "https://apps.apple.com/jp/app/id6820950382",
    support: "kokedama/"
  },
  {
    id: "kyujitsu",
    name: "休日コンパス",
    status: "released",
    category: "休み",
    accent: "#C9607A",
    line: "休みの前に予想して、あとで答え合わせ。",
    desc: "予想より良かった過ごし方がたまっていきます。お金をかけた休みと、かけない休み、本当に満足したのはどっち？",
    tag: "iPhone · 買い切り",
    icon: "icons/kyujitsu.jpg",
    shot: "shots/kyujitsu.jpg",
    store: "https://apps.apple.com/jp/app/id6825105470",
    support: "holidayhindsight/"
  },
  {
    id: "kesa",
    name: "けさの手札",
    status: "released",
    category: "朝",
    accent: "#4A4A5A",
    line: "朝ひとつの豆知識を、話すところまで。",
    desc: "出典つきの話が毎朝ひとつ。読むのは30秒、そのまま口に出せる一言つき。",
    tag: "iPhone · 買い切り",
    icon: "icons/kesa.jpg",
    shot: "shots/kesa.jpg",
    store: "https://apps.apple.com/jp/app/id6806539228",
    support: "talkcard/"
  },
  {
    id: "shiftsleep",
    name: "夜勤睡眠スコア",
    status: "coming",
    category: "夜勤の家族",
    accent: "#1F3A5F",
    line: "交替勤務の眠りを、点数で。",
    desc: "近日公開。",
    tag: "準備中",
    icon: "",
    shot: "",
    store: "",
    support: "shiftsleep/"
  }
];

// 記事。まだ無いときは空のままでよい（サイトに「記事」欄が出ない）
// 例: { title: "夜勤の家族の予定共有で困った話", url: "notes/yakin-family.html", date: "2026-12-01" }
window.NOTES = [];
