const isRequired = (value) => {
  if (!value) {
    return false;
  }
  return true;
};
const validation = (list) => {
  let isValid = true;
  let namePattern = new RegExp(
    "(^[A-Za-z]{1,30})([ ]{0,1})([A-Za-z]{1,30})?([ ]{0,1})?([A-Za-z]{1,30})?([ ]{0,1})?([A-Za-z]{1,30}$)"
  );
  let passwordPatern = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,8}$"
  );
  let emailPattern = new RegExp("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,}$");
  let descPatern = new RegExp("^[A-Za-z0-9s].{1,60}$");
  // Duyệt mảng arrList chứa danh sách toàn bộ account xem có trùng vs account vừa tạo hay không
  const findAccount = arrList.find((account) => {
    return account.account === list.account;
  });
  // console.log(findAccount)
  // console.log(arrList)


  if (!isRequired(list.account)) {
    isValid = false;
    document.getElementById("accountNoti").innerHTML =
      "Tài khoản không được để trống";
  }
  else if(findAccount !== undefined)
  {
    isValid = false
    document.getElementById("accountNoti").innerHTML =
    "Tài khoản đã có người sử dụng";
  }
  else {
    document.getElementById("accountNoti").innerHTML = " ";
  }

  if (!isRequired(list.userName)) {
    isValid = false;
    document.getElementById("userNameNoti").innerHTML =
      "Tên không được để trống";
  } else if (!namePattern.test(list.userName)) {
    isValid = false;
    document.getElementById("userNameNoti").innerHTML =
      "Tên không được chứa số vào ký tự đặt biệt";
  } else {
    document.getElementById("userNameNoti").innerHTML = " ";
  }

  if (!isRequired(list.password)) {
    isValid = false;
    document.getElementById("passwordNoti").innerHTML =
      " Mật khẩu không được để trống";
  } else if (!passwordPatern.test(list.password)) {
    isValid = false;
    document.getElementById("passwordNoti").innerHTML =
      " Mật khẩu không đúng định dạng (Ít nhất 1 ký tự hoa, 1 ký tự đặt biệt, 1 ký tự số và dài 6-8 ký tự";
  } else {
    document.getElementById("passwordNoti").innerHTML = " ";
  }

  if (!isRequired(list.email)) {
    isValid = false;
    document.getElementById("emailNoti").innerHTML =
      "Email không được để trống";
  } else if (!emailPattern.test(list.email)) {
    isValid = false;
    document.getElementById("emailNoti").innerHTML =
      "Email không đúng định dạng";
  } else {
    document.getElementById("emailNoti").innerHTML = " ";
  }

  if (!isRequired(list.type) || list.type === "Chọn người dùng") {
    isValid = false;
    document.getElementById("typeNoti").innerHTML =
      "Vui lòng chọn loại người dùng";
  } else {
    document.getElementById("typeNoti").innerHTML = " ";
  }

  if (!isRequired(list.language) || list.language === "Chọn ngôn ngữ") {
    isValid = false;
    document.getElementById("languageNoti").innerHTML =
      "Vui lòng chọn ngôn ngữ";
  } else {
    document.getElementById("languageNoti").innerHTML = " ";
  }

  if (!isRequired(list.avatar)) {
    isValid = false;
    document.getElementById("avatarNoti").innerHTML =
      "Hình ảnh không được để trống";
  } else {
    document.getElementById("avatarNoti").innerHTML = " ";
  }

  if (!isRequired(list.desc)) {
    isValid = false;
    document.getElementById("descNoti").innerHTML = "Vui lòng nhập vào mô tả";
  } else if (!descPatern.test(list.desc)) {
    isValid = false;
    document.getElementById("descNoti").innerHTML =
      "Mô tả không được vượt quá 60 ký tự";
  } else {
    document.getElementById("descNoti").innerHTML = " ";
  }

  return isValid;
};
