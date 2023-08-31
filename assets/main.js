//Toggle and submenu 
function togglebar() {
    var navResponsiveElements = document.getElementsByClassName('dropdown-menu');
    var togglebarElements = document.getElementsByClassName('toggle');
    var svg1 = document.querySelector('#togglebar .svg1');
    var svg2 = document.querySelector('#togglebar .svg2');
  
    for (var i = 0; i < navResponsiveElements.length; i++) {
      navResponsiveElements[i].classList.toggle('active');
    }
  
    for (var j = 0; j < togglebarElements.length; j++) {
      togglebarElements[j].classList.toggle('change');
    }
    if (svg1.style.display === 'block') {
      svg1.style.display = 'none';
      svg2.style.display = 'block';
    } else {
      svg1.style.display = 'block';
      svg2.style.display = 'none';
    }
  }
  


  // SlideShow
  document.addEventListener("DOMContentLoaded", function() {
    const prevButtons = document.querySelectorAll(".btn-prev");
    const nextButtons = document.querySelectorAll(".btn-next");
    const bannerImages = document.querySelector(".banner-images");
    const imageWidth = 100; // Độ rộng của mỗi ảnh trong slideshow, tính bằng phần trăm
    let currentPosition = 0;
    prevButtons.forEach(function(prevButton) {
      prevButton.addEventListener("click", () => {
        currentPosition -= imageWidth;
        if (currentPosition < 0) {
          currentPosition = imageWidth * (bannerImages.childElementCount - 1);
        }
        bannerImages.style.transform = `translateX(-${currentPosition}%)`;
      });
    });
    nextButtons.forEach(function(nextButton) {
      nextButton.addEventListener("click", () => {
        currentPosition += imageWidth;
        if (currentPosition > imageWidth * (bannerImages.childElementCount - 1)) {
          currentPosition = 0;
        }
        bannerImages.style.transform = `translateX(-${currentPosition}%)`;
      });
    });
  });


  function toggleDropdown(element) {
    var dropdownMenu = element.querySelector('.dropdown');
    var toggleSvg = element.querySelector('.toggle-svg');
    
    dropdownMenu.classList.toggle("show");
    toggleSvg.classList.toggle("clicked");
    
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
    } else {
      dropdownMenu.style.maxHeight = "0";
    }
  }

  
  window.addEventListener('DOMContentLoaded', (event) => {
    var firstButton = document.querySelector('.firstButton');
    toggleFAQChange(firstButton, 0); // Đặt trạng thái active cho tab đầu tiên
  });
  
  function toggleFAQChange(button, faqNumber) {
    var faqChanges = document.getElementsByClassName("FAQ-change");
    for (var i = 0; i < faqChanges.length; i++) {
      if (faqChanges[i].getAttribute("data-faq") == faqNumber) {
        faqChanges[i].style.display = "block";
      } else {
        faqChanges[i].style.display = "none";
      }
    }
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active-btn");
    }
    button.classList.add("active-btn");
  }
  

  //Image thumbnail product
  var currentIndex = 0; 
  function showImage(index) {
    var largeImage = document.getElementById("large-image");
    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove("active");
    }
    thumbnails[index].classList.add("active");
    largeImage.src = thumbnails[index].src;
  
    currentIndex = index;
  }
  
  function nextImage() {
    var thumbnails = document.getElementsByClassName("thumbnail");
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
  }
  function previousImage() {
    var thumbnails = document.getElementsByClassName("thumbnail");
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    showImage(currentIndex);
  }
  


  //Btn tăng giảm số lượng
  function decreaseQuantity(event) {
    event.preventDefault();
    var quantityInput = document.querySelector(".quantity-input");
    var quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  }
  function increaseQuantity(event) {
    event.preventDefault();
    var quantityInput = document.querySelector(".quantity-input");
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
  }




  //video play
  function playVideo() {
    var videoOverlay = document.getElementById('videoOverlay');
    var videoPlayer = document.getElementById('videoPlayer');
    
    videoOverlay.classList.remove('hide');
    videoPlayer.play();
  }
  function closeVideo() {
    var videoOverlay = document.getElementById('videoOverlay');
    var videoPlayer = document.getElementById('videoPlayer');
    
    videoOverlay.classList.add('hide');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
  
  
  
  
  