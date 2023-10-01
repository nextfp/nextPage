const chassisList = [
  {
    title: "サスペンション",
    white: false,
    element: [
      {
        name: "シミュレーションによる解析",
        description:
          "サスペンション設計ソフトでジオメトリーを計算。\n ロールや転舵時のキャンバー角やトー角の変化を最適化することで優れたサスペンションシステムを実現。",
        imgSrc: "/chassis/susprog.png",
        imgAlt: "susprog",
      },
      {
        name: "車両運動の向上",
        description:
          "高い運動性能を実現するために、ダブルウィッシュボーン式サスペンションを採用。更に、アンチロールバーを搭載することでコーナリング中のロールの抑制を図っている。",
        imgSrc: "/chassis/suspensionBlack.png",
        imgAlt: "suspension Image",
      },
    ],
  },
  {
    title: "ペダル",
    white: true,
    element: [
      {
        name: "計算された制動力",
        description:
          "車重やドライバーの体重、路面μ、マスターシリンダーの断面積など様々な数値から必要な制動力を計算をして理論値を出す。\n また理論値を出す際にペダルの長さを探し、適切な長さ、完全に車体が止まる際の踏力を考えることで設計時にも深く考えることができ、より良いペダルを作りつつしっかり止まることができるものになる",
        imgSrc: "/chassis/pedalGraph.png",
        imgAlt: "pedalGraph",
      },
    ],
  },
];

export default chassisList;
