document.addEventListener("DOMContentLoaded", function () {
  const body = document.getElementsByTagName("body")[0];
  const header = document.createElement("div");

  body.prepend(header);

  fetch("/components/header/header.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
      loadMobile();
      startTitleAnimation(); // 헤더 로드 후 애니메이션 시작
    });

  function loadMobile() {
    var menuButton = document.getElementsByClassName("menu-button")[0];
    var panel = document.getElementsByClassName("panel")[0];

    menuButton.addEventListener("click", function () {
      var isDisplayed = panel.style.display;
      panel.style.display = isDisplayed === "block" ? "none" : "block";
    });
  }

  function startTitleAnimation() {
    const words = ["kim_bomin", "fe_developer", "@nim_od", "frontend_dev"];
    const titleElement = document.getElementById("animated-title");
    let wordIndex = 0;
    const interval = 1000; // 1초 간격
    const stepDuration = 100; // 각 스텝의 지속 시간
    const symbols = "!@#$%^&*_-=+";

    function animateWordChange(currentWord, nextWord) {
      const currentArray = currentWord.split("");
      const nextArray = nextWord.split("");
      const maxLength = Math.max(currentArray.length, nextArray.length);
      const steps = Math.floor(interval / stepDuration);
      let currentIndex = 0;

      function step() {
        let changed = false; // 변경이 일어났는지 확인

        for (let i = 0; i < maxLength; i++) {
          if (i < currentArray.length && i < nextArray.length) {
            if (currentArray[i] !== nextArray[i]) {
              changed = true; // 변경이 일어났음을 표시
              if (symbols.includes(currentArray[i])) {
                currentArray[i] = symbols[(symbols.indexOf(currentArray[i]) + 1) % symbols.length];
              } else {
                currentArray[i] = String.fromCharCode(currentArray[i].charCodeAt(0) + 1);
              }
              if (currentArray[i] > "z") currentArray[i] = "a";
              if (currentArray[i] > "Z" && currentArray[i] < "a") currentArray[i] = "A";
            }
          } else if (i >= currentArray.length && i < nextArray.length) {
            changed = true;
            currentArray.push(nextArray[i]);
          } else if (i >= nextArray.length && currentArray.length > nextArray.length) {
            changed = true;
            currentArray.pop();
          }
        }

        titleElement.textContent = currentArray.join("");

        if (changed && currentIndex < steps) {
          currentIndex++;
          setTimeout(step, stepDuration);
        } else {
          titleElement.textContent = nextWord;
          setTimeout(changeWord, interval);
        }
      }

      step();
    }

    function changeWord() {
      const currentWord = words[wordIndex];
      wordIndex = (wordIndex + 1) % words.length;
      const nextWord = words[wordIndex];
      animateWordChange(currentWord, nextWord);
    }

    titleElement.textContent = words[0];
    setTimeout(changeWord, interval);
  }
});
