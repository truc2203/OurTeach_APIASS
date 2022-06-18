// Reset form
const resetForm = () => {
    document.getElementById("idAccount").value = " ";
    document.getElementById("idUserName").value = " ";
    document.getElementById("idPassword").value = " ";
    document.getElementById("idEmail").value = " ";
    document.getElementById("idType").value = " ";
    document.getElementById("idLanguage").value = " ";
    document.getElementById("idDesc").value = " ";
    document.getElementById("idAvatar").value = " ";
    //Đóng modal
    $("#myModal").modal("hide");
  };
  