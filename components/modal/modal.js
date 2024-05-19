function initializeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";

  var span = document.getElementsByClassName("close")[0];

  // 모달 열기 함수
  window.showModal = function (title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    modal.style.display = "block";
  };

  // 닫기 버튼 클릭 이벤트
  span.onclick = function () {
    modal.style.display = "none";
  };

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
