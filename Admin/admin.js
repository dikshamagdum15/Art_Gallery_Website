// Load artworks on page load
document.addEventListener("DOMContentLoaded", loadArtworks);

function addArtwork() {
  const title = document.getElementById("artTitle").value;
  const imageInput = document.getElementById("artImage");

  if (title === "" || imageInput.files.length === 0) {
    alert("Please add title and image");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const artwork = {
      title: title,
      image: e.target.result
    };

    const artworks = JSON.parse(localStorage.getItem("artworks")) || [];
    artworks.push(artwork);
    localStorage.setItem("artworks", JSON.stringify(artworks));

    displayArtwork(artwork);
  };

  reader.readAsDataURL(imageInput.files[0]);

  document.getElementById("artTitle").value = "";
  document.getElementById("artImage").value = "";
}

function loadArtworks() {
  const artworks = JSON.parse(localStorage.getItem("artworks")) || [];
  artworks.forEach(displayArtwork);
}

function displayArtwork(artwork) {
  const gallery = document.getElementById("galleryGrid");

  const card = document.createElement("div");
  card.className = "gallery-card";

  card.innerHTML = `
    <img src="${artwork.image}">
    <h4>${artwork.title}</h4>
  `;

  gallery.appendChild(card);
}
