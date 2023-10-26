const images = [
    "https://simg.zalopay.com.vn/zlp-website/assets/phim_chieu_rap_Viet_Nam_moi_nhat_co_gai_tu_qua_khu_995a16d6a7.jpg",
    "https://static.vieon.vn/vieplay-image/carousel_web_v4/2021/02/24/dzen4qoi_1920x1080loto.jpg",
    "https://tincuaban.com/wp-content/uploads/2020/07/Phim-Hanh-Dong-Vo-Thuat-Thanh-Bai-Xao-Quyet.jpg",
];

let currentIndex = 0;
const mainImage = document.getElementById("main-image");

function showImage(index) {
    mainImage.src = images[index]; 
}

function autoChangeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);

setInterval(autoChangeImage, 2500);

// Hiệu ứng 
const headings = document.querySelectorAll(".text");

let isZoomed = false; 
const minFontSize = 2;
const maxFontSize = 3; 

function zoomText() {
  headings.forEach((heading) => {
    if (isZoomed) {
      heading.style.fontSize = `${minFontSize}vw`;
    } else {
      heading.style.fontSize = `${maxFontSize}vw`;
    }
  });
  isZoomed = !isZoomed;
}

function toggleZoom() {
  zoomText();
  setTimeout(toggleZoom, 350);
}

toggleZoom();   
// login
let isLogin = false;
const loginButton = document.getElementById("login");
const storedUsername = localStorage.getItem("username");

if (storedUsername) {
    isLogin = true;
    const icon = document.createElement("i");
    icon.className = "fi fi-rr-user";
    const usernameText = document.createTextNode(storedUsername);
    loginButton.textContent = ''; 
    loginButton.appendChild(icon);
    // loginButton.appendChild(' ');
    loginButton.appendChild(usernameText); 
}

loginButton.addEventListener("click", function (){
    if (!isLogin) {
        window.location.href = "login/login.html";
    }
});






