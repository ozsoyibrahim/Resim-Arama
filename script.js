const search = document.querySelector(".search-box input"),
images = document.querySelectorAll(".image-box");

search.addEventListener('keyup', function(e) {
    const searchString = e.target.value.toLowerCase();
  
    images.forEach(function(image) {
      const searchAttribute = image.getAttribute('data-name').toLowerCase();
      if (searchAttribute.indexOf(searchString) > -1) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });