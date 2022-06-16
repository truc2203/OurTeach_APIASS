//Call API
init();

function init() {
  apiGetList().then(function (reponse) {
    let lists = reponse.data;
    for (let i in lists) {
      var list = lists[i];
      lists[i] = new Lists(
        list.account,
        list.userName,
        list.password,
        list.email,
        list.type,
        list.language,
        list.desc,
        list.avatar,
        list.id
      );
    }
    display(lists);
  });
}

// Hiển thị ra table quản lý GV/HV
const display = (lists) => {
  let html = "";
  for (let i in lists) {
    let list = lists[i];
    html += `<tr>
        <td>${i}</td>
        <td>${list.account}</td>
        <td>${list.userName}</td>
        <td>${list.password}</td>
        <td>${list.email}</td>
        <td>${list.type}</td>
        <td>${list.language}</td>
        <td>${list.desc}</td>
        <td>
            <img src="${list.avatar}" width="70px" height="70px" />
        </td>
        <td>
            <button class="btn btn-primary" 
             data-toggle="modal"
             data-target="#myModal" 
             data-type="update" 
             data-id="${list.id}">Update</button>
            <button class="btn btn-danger" data-type="delete" data-id="${list.id}">Delete</button>
        </td>
    </tr>
    `;
  }
  //DOM
  document.getElementById("tblDanhSach").innerHTML = html;
};

// Hiển thị modal thêm người dùng khi nhấn button
const showModalAdd = () => {
  document.querySelector(".modal-title").innerHTML = "Thêm mới";
  document.querySelector(".modal-footer").innerHTML = `
        <button class="btn btn-info" data-type="add">Thêm</button>
        <button class="btn btn-danger" data-toggle="modal" data-target="#myModal">Huỷ </button>
    `;
};
document.getElementById("btnThem").addEventListener("click", showModalAdd);

// Xử lý chức năng thêm hoặc cập nhật thôn tin người dùng
const handleSubmit = (event) => {
  let handleStyle = event.target.getAttribute("data-type");
  switch (handleStyle) {
    case "add":
      addNewUser();
      break;
    case "update":
      updateUser();
    default:
      break;
  }
};
document.querySelector(".modal-footer").addEventListener("click", handleSubmit);

// Thêm người dùng
const addNewUser = (
  account,
  userName,
  password,
  email,
  type,
  language,
  desc,
  avatar
) => {
  account = document.getElementById("idAccount").value;
  userName = document.getElementById("idUserName").value;
  password = document.getElementById("idPassword").value;
  email = document.getElementById("idEmail").value;
  type = document.getElementById("idType").value;
  language = document.getElementById("idLanguage").value;
  desc = document.getElementById("idDesc").value;
  avatar = document.getElementById("idAvatar").value;

  let list = new Lists(
    account,
    userName,
    password,
    email,
    type,
    language,
    desc,
    avatar
  );

  apiAddList(list)
    .then(function (result) {
      init();
      resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Reset form
 const resetForm = () => {
  document.getElementById("idAccount").value = " "
  document.getElementById("idUserName").value = " "
  document.getElementById("idPassword").value = " "
  document.getElementById("idEmail").value = " "
  document.getElementById("idType").value = " "
  document.getElementById("idLanguage").value = " "
  document.getElementById("idDesc").value = " "
  document.getElementById("idAvatar").value = " "
  //Đóng modal
  $("#myModal").modal("hide")
 }