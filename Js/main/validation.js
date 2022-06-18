const isRequired = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

const validation = (list) => {
  let isValid = true;
  let namePattern = new RegExp("^[A-Za-z$]");
  let passwordPatern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,8}$");
    let emailPattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    let descPatern = new RegExp("^[A-Za-z0-9]{0,60}$")
  if (!isRequired(list.account)) {
    isValid = false;
    document.getElementById("accountNoti").innerHTML =
      "Tài khoản không được để trống";
  } else {
    document.getElementById("accountNoti").innerHTML = " ";
  }

  if (!isRequired(list.userName)) {
    isValid = false;
    document.getElementById("userNameNoti").innerHTML =
      "Tên không được để trống";
  } else if (!namePattern.test(list.userName)) {
    isValid = false;
    document.getElementById("userNameNoti").innerHTML =
      "Tài khoản không được chứa số vào ký tự đặt biệt";
  }
  else{
    document.getElementById("userNameNoti").innerHTML = " "
  }

  if(!isRequired(list.password))
  {
    isValid = false
    document.getElementById('passwordNoti').innerHTML = " Mật khẩu không được để trống"
  }
//   else if(!passwordPatern.test(list.password))
//   {
//     isValid = false
//     document.getElementById('passwordNoti').innerHTML = " Mật khẩu không đúng định dạng"
//   }
  else{
    document.getElementById('passwordNoti').innerHTML = " "
  }

  if (!isRequired(list.email)) {
    isValid = false;
    document.getElementById("emailNoti").innerHTML =
      "Email không được để trống";
  } else if (!emailPattern.test(list.email)) {
    isValid = false;
    document.getElementById("emailNoti").innerHTML =
      "Email không đúng định dạng";
  }
  else{
    document.getElementById("emailNoti").innerHTML = " "
  }

  if(!isRequired(list.type))
  {
    isValid = false
    document.getElementById("typeNoti").innerHTML = "Vui lòng chọn loại người dùng" 
  }
  else{
    document.getElementById("typeNoti").innerHTML = " " 
  }

  if(!isRequired(list.language))
  {
    isValid = false
    document.getElementById("languageNoti").innerHTML = "Vui lòng chọn ngôn ngữ" 
  }
  else{
    document.getElementById("languageNoti").innerHTML = " "
};

if(!isRequired(list.avatar))
{
    isValid = false
    document.getElementById("avatarNoti").innerHTML = "Hình ảnh không được để trống"
}
else{
    document.getElementById("avatarNoti").innerHTML = " "
}

if(!isRequired(list.desc))
{
    isValid = false
    document.getElementById("descNoti").innerHTML = "Vui lòng nhập vào mô tả"
}
// else if(!descPatern.test(list.desc)){
//     isValid = false
//     document.getElementById("descNoti").innerHTML = "Mô tả không được vượt quá 60 ký tự"
// }
else{
    document.getElementById("descNoti").innerHTML = " "
}

return isValid
}
