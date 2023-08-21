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
  
    // Kiểm tra trạng thái hiện tại của SVG và thay đổi nội dung tương ứng
    if (svg1.style.display === 'block') {
      svg1.style.display = 'none';
      svg2.style.display = 'block';
    } else {
      svg1.style.display = 'block';
      svg2.style.display = 'none';
    }
  }
  
  
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
    var firstButton = document.querySelector('.btn');
    toggleFAQChange(firstButton, 0);
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
  
  var currentIndex = 0; // Biến lưu chỉ số hiện tại của ảnh
  
  function showImage(index) {
    var largeImage = document.getElementById("large-image");
    var thumbnails = document.getElementsByClassName("thumbnail");
  
    // Remove active class from all thumbnails
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove("active");
    }
  
    // Add active class to the clicked thumbnail
    thumbnails[index].classList.add("active");
  
    // Update the large image source
    largeImage.src = thumbnails[index].src;
  
    currentIndex = index; // Cập nhật chỉ số hiện tại của ảnh
  }
  
  function nextImage() {
    var thumbnails = document.getElementsByClassName("thumbnail");
  
    // Tăng chỉ số hiện tại lên 1 (nếu không vượt quá số lượng ảnh)
    currentIndex = (currentIndex + 1) % thumbnails.length;
  
    // Hiển thị ảnh tiếp theo
    showImage(currentIndex);
  }
  
  function previousImage() {
    var thumbnails = document.getElementsByClassName("thumbnail");
  
    // Giảm chỉ số hiện tại xuống 1 (nếu không nhỏ hơn 0)
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  
    // Hiển thị ảnh trước đó
    showImage(currentIndex);
  }
  
  
  function decreaseQuantity(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  
    var quantityInput = document.querySelector(".quantity-input");
    var quantity = parseInt(quantityInput.value);
  
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  }
  
  function increaseQuantity(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  
    var quantityInput = document.querySelector(".quantity-input");
    var quantity = parseInt(quantityInput.value);
  
    quantityInput.value = quantity + 1;
  }
  
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
  
  
  function translateWebsite(language) {
    // Gửi yêu cầu dịch qua API
    var apiKey = 'YOUR_API_KEY';
    var endpoint = 'https://translation.googleapis.com/language/translate/v2';
    var targetElements = $('[data-translate]'); // Chọn tất cả các phần tử có thuộc tính "data-translate"
  
    $.each(targetElements, function(index, element) {
        var textToTranslate = $(element).text();
  
        $.ajax({
            url: endpoint,
            type: 'POST',
            dataType: 'json',
            data: {
                q: textToTranslate,
                target: language,
                key: apiKey
            },
            success: function(response) {
                if (response.data && response.data.translations && response.data.translations.length > 0) {
                    var translatedText = response.data.translations[0].translatedText;
                    $(element).text(translatedText);
                }
            },
            error: function(xhr, status, error) {
                console.error('Translation request failed:', error);
            }
        });
    });
  }
  
   document.addEventListener("DOMContentLoaded", function() {
          var classToCheck = document.querySelectorAll(".d-flex");
          for (var i = 0; i < classToCheck.length; i++) {
              classToCheck[i].addEventListener("click", function() {
                  var checkbox = this.querySelector("input[type='checkbox']");
                  checkbox.checked = !checkbox.checked;
              });
          }
      });
  
  
  
  
  
  
  