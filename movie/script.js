// video trailer
const luong = document.querySelector('.luong');
const trailer = document.querySelector('.trailer');
const close = document.querySelector('.close');
const videoPlayer = document.querySelector('video');

let isVideoPlaying = false; // Biến kiểm tra trạng thái phát video

luong.addEventListener('click', () => {
    trailer.style.display = 'block'; // Hiển thị cửa sổ video
    if (!isVideoPlaying) {
        videoPlayer.play(); // Phát video nếu chưa phát
        isVideoPlaying = true; // Cập nhật trạng thái phát video
    }
});

close.addEventListener('click', () => {
    trailer.style.display = 'none'; // Ẩn cửa sổ video
    videoPlayer.pause(); // Tạm dừng video
    videoPlayer.currentTime = 0; // Đặt thời gian video về ban đầu
    isVideoPlaying = false; // Đặt trạng thái phát về false
});

// Tắt tự động phát video khi trang web được tải
videoPlayer.autoplay = false;


// booking
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");

// Khởi tạo giá vé mặc định là 50
let ticketPrice = 50;

// Lưu trữ thông tin về phim và giá vé đã chọn (không cần phần movieSelect)
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Cập nhật tổng số ghế và tổng giá
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  // Loại bỏ mã phim liên quan, vì chúng ta không thay đổi ticketPrice
}

// Loại bỏ mã phim liên quan, vì chúng ta không thay đổi ticketPrice

// Sự kiện khi click chọn ghế
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Thiết lập số ghế ban đầu và tổng giá ban đầu
updateSelectedCount();


// Thiết lập cách vận hành của đặt vé....
const booking = document.querySelector('.booking');
const buttonDay = document.querySelectorAll('.button_day1');

// Lấy tham chiếu đến button có id là "button_booking" và div có class là "day"
const buttonBooking = document.getElementById('button_booking');
const day = document.querySelector('.day');

// Thêm sự kiện click cho button
buttonBooking.addEventListener('click', () => {
      // Hiển thị div có class "day" bằng cách thay đổi thuộc tính style.display
      day.style.display = 'block';
    // Tính toán vị trí X của div mục tiêu
    const tagX = day.offsetTop + day.offsetHeight / 2 - window.innerHeight / 2;
        // Cuộn trang web xuống vị trí giữa của div mục tiêu
        window.scrollTo({
          top: tagX,
          behavior: 'smooth' // Cuộn mềm
        });
});

//Thêm sự kiện click cho từng button_day
buttonDay.forEach(button => {
    button.addEventListener('click', () => {
        booking.style.display = 'block';
        // Tính toán vị trí X của div mục tiêu
        const tagY = booking.offsetTop + booking.offsetHeight / 2 - window.innerHeight / 2;
            // Cuộn trang web xuống vị trí giữa của div mục tiêu
            window.scrollTo({
              top: tagY,
              behavior: 'smooth' // Cuộn mềm
            });
    });
});
// thank you
const thanks = document.querySelector('.booked');
const img = document.querySelector('.thank_you');
const menu =document.querySelector('nav');
const header = document.querySelector('header');
thanks.addEventListener('click', () => {
  // Hiển thị ảnh
  img.style.display = 'block';
  //Cho thanh menu  và phần đầu biến mất để ảnh cảm ơn toàn màn hình
  menu.style.display='none';
  header.style.display='none';
  //Tính toán vị trí Z mục tiêu
  const tagZ=img.offsetTop+img.offsetHeight/2-window.innerHeight/2;
  window.scrollTo({
    top:tagZ,
    behavior:'instant'
  });
  // Thêm sự kiện click cho ảnh để tắt chế độ toàn màn hình
  img.addEventListener('click', () => {
      // Loại bỏ lớp và ẩn ảnh
      img.style.display = 'none';
      //bỏ ảnh và đưa lại thanh menu và phần header
      menu.style.display='flex';
      header.style.display='flex';
  });
});
// login
const loginChange = document.getElementById("login");
const storedUsername = localStorage.getItem("username");
if (storedUsername) {
    loginChange.textContent = storedUsername;
}

