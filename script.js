$(document).ready(function () {
  const $nextButton = $(".nextButton");
  const $backButton = $(".backButton");
  const $mountainImage = $("#listGunung");
  const $judulGunung = $(".judulGunung");
  const $isiGunung = $(".table-2 p");

  let gunungInfo = [];
  let currentMountainIndex = 0;

  function loadGunungInfo() {
    $.getJSON("gunungInfo.json", function (data) {
      gunungInfo = data;
      updateMountain();
    });
  }

  function updateMountain() {
    if (gunungInfo.length > 0) {
      $mountainImage.attr("src", gunungInfo[currentMountainIndex].imageSrc);
      $judulGunung.text(gunungInfo[currentMountainIndex].judul);
      $isiGunung.html(gunungInfo[currentMountainIndex].isi);
    }
  }

  $nextButton.on("click", function () {
    if (currentMountainIndex < gunungInfo.length - 1) {
      currentMountainIndex++;
      updateMountain();
      $backButton.prop("disabled", false);
    }
  });

  $backButton.on("click", function () {
    if (currentMountainIndex > 0) {
      currentMountainIndex--;
      updateMountain();
    }
    if (currentMountainIndex === 0) {
      $backButton.prop("disabled", true);
    }
  });

  $backButton.prop("disabled", true);
  loadGunungInfo();
});
