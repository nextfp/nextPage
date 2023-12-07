const powerTrainList = [
  {
    title: "吸気",
    white: false,
    element: [
      {
        name: "流体解析",
        description:
          "サージタンク内の流れの解析を行いエンジンの出力を最大限引き出すことができる理想の形状を決定する。\n \n 自由度の高い設計 \n \n 材質に樹脂を使用することで形状の自由度が増えサージタンクの最適化を図る。",
        imgSrc: "/powerTrain/intakeCad.webp",
        imgAlt: "Intake Cad Image",
      },
    ],
  },
  {
    title: "排気",
    white: true,
    element: [
      {
        name: "最小化とフラットな特性を目指して",
        description:
          "排気では、HeaderからMufflerまでの管長の変更によりエンジンの特性をよりフラットなものを目指して計算を行っています。流体解析を行うことで、取付位置の違いからなる損失の差を減らし、排気内の負圧の差が大きくならないことを目標として排気機構のレイアウトの決定をしています。また、学生フォーミュラの特徴として車検に「騒音試験」があることからMufflerでの消音性能の向上を図り、軽量かつ最小の設計でありながら特性と高い消音性の実現を目指しています。",
        imgSrc: "/powerTrain/exhaustCad.webp",
        imgAlt: "Exhaust Cad Image",
      },
    ],
  },
  {
    title: "電装",
    white: false,
    element: [
      {
        name: "データロギング",
        description:
          "走行の度にエンジン回転数・水温・スロットル開閉度・GPSセンサー・空燃比を計測して、エンジンの燃調セッティングなどを煮詰めていく。\n \n エンジンの最適化 \n \n 取得したデータをフィードバックにより、エンジンのポテンシャルを最大限に引き出すことができるとともに、エンジンの味付けをドライバーに最適化することができる。",
        imgSrc: "/powerTrain/MoteCLog.webp",
        imgAlt: "MoteC Log Image",
      },
    ],
  },
  {
    title: "燃料",
    white: true,
    element: [
      {
        name: "燃料タンクの最適化",
        description:
          "旋回時でも安定した燃料の供給を目標として3DCADでのシミュレーションを重ね、燃料タンクの形状を最適化していく。また、燃料タンクの小型化を目指している。",
        imgSrc: "/powerTrain/FuelCad.gif",
        imgAlt: "Fuel Tank Image",
      },
    ],
  },
  {
    title: "冷却",
    white: false,
    element: [
      {
        name: "冷却系とは",
        description:
          "冷却系は、エンジンの温度を適切に管理する事で、熱害による故障を防ぎ、高効率なパワートレインを目指しています。ノッキングやパーコレーション、ベーパ―ロックといった熱害を防止し、安定した燃焼を提供します。水冷システムを、放熱量、重量、消費電力、空気抵抗などの観点で見直し、マシンの性能向上に寄与します。",
        imgSrc: "/powerTrain/radiatorThermo.webp",
        imgAlt: "radiator Thermo Image",
      },
      {
        name: "冷却効率の向上のために",
        description: "シミュレーションｘ測定でVプロセスの達成を目指します",
        imgSrc: "/powerTrain/radiatorGraph.webp",
        imgAlt: "radiator Graph Image",
      },
    ],
  },
  {
    title: "駆動",
    white: "false",
    element: [
      {
        name: "駆動系とは",
        description:
          "エンジンのスプロケットから伝達される動力をデファレンシャルギヤなどを介しつつ、タイヤまで伝達する部品装置のことです。",
        imgSrc: "/powerTrain/differentialMountBefore.webp",
        imgAlt: "diffential Mount Analysis",
      },
      {
        name: "形状の最適化",
        description:
          "デファレンシャルを支えるデフマウントは重量もかかる力も大きいため、軟弱だと上の写真のように曲がってしまいます。強固でなければなりませんが、同時に車体の軽量化のために軽くならなければなりません。そのため解析を重ね最適化していきます。",
        imgSrc: "/powerTrain/differentialMountAfter.webp",
        imgAlt: "diffential Mount Analysis",
      },
    ],
  },
];

export default powerTrainList;
