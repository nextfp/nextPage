import type { partType } from "@/type/partType";

const chassisList: partType[] = [
  {
    title: "サスペンション",
    white: false,
    element: [
      {
        name: "シミュレーションによる解析",
        description:
          "サスペンション設計ソフトでジオメトリーを計算。\n ロールや転舵時のキャンバー角やトー角の変化を最適化することで優れたサスペンションシステムを実現。",
        imgSrc: "/chassis/susprog.webp",
        imgAlt: "susprog",
      },
      {
        name: "車両運動の向上",
        description:
          "高い運動性能を実現するために、ダブルウィッシュボーン式サスペンションを採用。更に、アンチロールバーを搭載することでコーナリング中のロールの抑制を図っている。",
        imgSrc: "/chassis/suspensionBlack.webp",
        imgAlt: "suspension Image",
      },
    ],
  },
  {
    title: "フレーム",
    white: true,
    element: [
      {
        name: "フレームデザインの最適化",
        description:
          "フレームでは昨年度フレームとのねじり剛性比較や、目標マシンスペックから算出した剛性目標を目指してフレームの最適化を行っています。また製作のし易さにも着目し、工期の負担を削減するように形状を工夫しています。",
        imgSrc: "/chassis/frameCadImage1.webp",
        imgAlt: "frame Cad Image",
      },
      {
        name: "",
        description:
          "試走においてはセンサを導入し、設定した剛性目標が妥当なものであるかを評価するとともに、来年度設計に向けた目標値の検討に役立てています。",
        imgSrc: "/chassis/frameCadImage2.webp",
        imgAlt: "frame Cad Image2",
      },
    ],
  },
  {
    title: "ステアリング",
    white: false,
    element: [
      {
        name: "さらなるハンドリング性能の向上へ",
        description:
          "扱いやすい操舵を目指して、\n ドライバーの手に馴染むステアリングの設計や軽くガタの少ないギア周りの設計。",
        imgSrc: "/chassis/SteeringCadImage.webp",
        imgAlt: "steering Cad Image",
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
        imgSrc: "/chassis/pedalGraph.webp",
        imgAlt: "pedalGraph",
      },
    ],
  },
  {
    title: "エアロ",
    white: false,
    element: [
      {
        name: "コーナリング性能の向上",
        description:
          "マシンの旋回性能を向上させるために、本マシンには以下のエアロデバイスが搭載されている。\n ・フロントウィング \n ・リアウィング \n ・フロア \n これらにより、安定したダウンフォースを獲得できる。",
        imgSrc: "/chassis/AeroCadImage.webp",
        imgAlt: "Aero Cad Image",
      },
    ],
  },
  {
    title: "コックピット",
    white: true,
    element: [
      {
        name: "操作性の向上",
        description:
          "ドライバーの快適さと安全性を向上させるため、シート、ヘッドレスト、シフト、クラッチ等の位置を調整して適切なドライビングポジションを作り上げていく。\n これにより、ドライバーが直感的な操作をしやすくなり、高い運転パフォーマンスだけではなく安全性も向上させることができる。",
        imgSrc: "/chassis/cockPitCadImage.webp",
        imgAlt: "cockpit Cad Image",
      },
    ],
  },
];

export default chassisList;
