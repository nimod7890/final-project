const activities = [
  {
    id: 1,
    subtitle: "Club / 2023.12 - 2024.2",
    title: "Client Developer - React Native",
    description: "Central Makeus Challenge(CMC) - Profitable App Development Club",
  },
  {
    id: 2,
    subtitle: "Club / 2022.3 - 2022.9",
    title: "Server Developer - Nest.js",
    description: "SKKUDING - Online Code Judge Project Team",
  },
];

const script = document.createElement("script");
script.src = "/components/card/card.js";
document.body.appendChild(script);

script.onload = function () {
  loadCardList(activities, "activity-area");
};
