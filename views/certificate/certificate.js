const certificates = [
  {
    id: 1,
    subtitle: "취득일: 2022.9.23 (유효 기간 없음)",
    title: "ADsP : Advanced Data Analytics Semi-Professional",
    description: "제 34회 데이터분석 준전문가",
    link: "https://www.dataq.or.kr/www/sub/a_06.do",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCardList(certificates, "certificate-area");
};
