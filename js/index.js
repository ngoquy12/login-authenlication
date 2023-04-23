// lấy phần tử button
let btnSubmitRegister = document.getElementById("btn-submit");
let btnSubmitLogin = document.getElementById("btn-submit");
// hàm đăng kí
// addEventListener có 2 tham số:
// tham sóo 1: là tên sự kiện nhưng k có tiền tóo là on
btnSubmitRegister.addEventListener("click", function (e) {
  e.preventDefault();
  // Lấy gía trị từ ô input email
  let emailValue = document.getElementById("email").value;
  // Lấy gía trị từ ô input password
  let passwordValue = document.getElementById("password").value;

  // xử lý dữ liệu đầu vào
  if (!emailValue) {
    alert("Email không được để trống");
    return;
  } else if (!passwordValue) {
    alert("passwordValue không được để trống");
    return;
  }
  let getUsers = JSON.parse(localStorage.getItem("listUser"));
  let isNull = getUsers != null ? getUsers : [];
  // Thêm phần tử vào cuối mảng
  localStorage.setItem(
    "listUser",
    JSON.stringify([...isNull, { email: emailValue, password: passwordValue }]) // Bảo lưu giá trị cux và thêm giá trị mới vào
  );
  // Chuyển hướng sang trang đăng nhập
  //   window.location = "http://127.0.0.1:5500/login.html";
  alert("Đăng kí thành công.");
});

// Hàm đăng nhập
btnSubmitLogin.addEventListener("click", function (e) {
  e.preventDefault();
  let getUsers = JSON.parse(localStorage.getItem("listUser"));
  let emailLogin = document.getElementById("email-login").value;
  let passwordlLogin = document.getElementById("password-login").value;
  // dùng vòng lặp để duyệt qua các phần tử của mảng trên local
  for (let i = 0; i < getUsers.length; i++) {
    if (
      emailLogin == getUsers[i].email &&
      passwordlLogin == getUsers[i].password
    ) {
      alert("đăng nhập thành công");
      window.location = "http://127.0.0.1:5500/admin.html";
      break;
    } else {
      window.location = "http://127.0.0.1:5500/login.html";
    }
  }
});
