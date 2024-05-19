document.addEventListener("DOMContentLoaded", () => {
  const contactInfo = [
    {
      svgPath:
        "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m1 17H7V4h10zm-3 3h-4v-1h4z",
      text: "+82 10-7531-4887",
    },
    {
      svgPath:
        "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z",
      text: "nimod1234@g.skku.edu",
    },
    {
      svgPath:
        "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5",
      text: "Seoul, Korea",
    },
    {
      svgPath:
        "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z",
      text: "Feb 17, 2001",
    },
  ];

  const contactInfoContainer = document.getElementById("contactInfo");

  contactInfo.forEach((item) => {
    const paragraph = document.createElement("p");
    const svg = `<svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
          <path d="${item.svgPath}"></path>
      </svg>`;
    paragraph.innerHTML = `${svg} ${item.text}`;
    contactInfoContainer.appendChild(paragraph);
  });
});
