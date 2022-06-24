// Reset form
const resetForm = () => {
  document.getElementById("idAccount").value = " ";
  document.getElementById("idAccount").disabled = false;
  document.getElementById("idUserName").value = " ";
  document.getElementById("idPassword").value = " ";
  document.getElementById("idEmail").value = " ";
  document.getElementById("idType").value = " ";
  document.getElementById("idLanguage").value = " ";
  document.getElementById("idDesc").value = " ";
  document.getElementById("idAvatar").value = " ";
  document.getElementById("accountNoti").innerHTML = " ";
  document.getElementById("userNameNoti").innerHTML = " ";
  document.getElementById("passwordNoti").innerHTML = " ";
  document.getElementById("emailNoti").innerHTML = " ";
  document.getElementById("typeNoti").innerHTML = " ";
  document.getElementById("languageNoti").innerHTML = " ";
  document.getElementById("avatarNoti").innerHTML = " ";
  document.getElementById("descNoti").innerHTML = " ";
  //Đóng modal
  $("#myModal").modal("hide");
};
