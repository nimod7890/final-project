const techIcons = [
  { src: "/assets/tech/html.svg", alt: "HTML", title: "HTML" },
  { src: "/assets/tech/css.svg", alt: "CSS", title: "CSS" },
  { src: "/assets/tech/js.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "/assets/tech/ts.svg", alt: "Typescript", title: "Typescript" },
  { src: "/assets/tech/react.svg", alt: "React", title: "React" },
  { src: "/assets/tech/react-native.svg", alt: "React Native", title: "React Native" },
  { src: "/assets/tech/python.svg", alt: "Python", title: "Python" },
];

const ulElement = document.querySelector(".tech-icons");

techIcons.forEach((icon) => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");

  imgElement.src = icon.src;
  imgElement.alt = icon.alt;
  imgElement.title = icon.title;

  liElement.appendChild(imgElement);
  ulElement.appendChild(liElement);
});
