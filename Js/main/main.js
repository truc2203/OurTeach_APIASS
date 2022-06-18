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
        <td>${list.id}</td>
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
  avatar,
  id
) => {
  account = document.getElementById("idAccount").value;
  userName = document.getElementById("idUserName").value;
  password = document.getElementById("idPassword").value;
  email = document.getElementById("idEmail").value;
  type = document.getElementById("idType").value;
  language = document.getElementById("idLanguage").value;
  desc = document.getElementById("idDesc").value;
  avatar = document.getElementById("idAvatar").value;
  id = document.getElementById("idNumber").value;
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
  let isValid = validation(list)
    if(!isValid)
    {
      return
    }
    apiAddList(list)
    .then(function (result) {
      init();
      resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
};

const handleAction = (event) => {
  let type = event.target.getAttribute("data-type");
  let id = event.target.getAttribute("data-id");

  switch (type) {
    case "delete":
      delUser(id); // Nhân vào id của user cần xóa
    case "update":
      showDetailUser(id);
      break;

    default:
      break;
  }
};

document.getElementById("tblDanhSach").addEventListener("click", handleAction);

//Xóa người dùng
const delUser = (listId) => {
  apiDelList(listId).then(function () {
    init();
  });
};

//Cập nhật thông tin
const updateUser = () => {
  let account = document.getElementById("idAccount").value;
  let userName = document.getElementById("idUserName").value;
  let password = document.getElementById("idPassword").value;
  let email = document.getElementById("idEmail").value;
  let type = document.getElementById("idType").value;
  let language = document.getElementById("idLanguage").value;
  let desc = document.getElementById("idDesc").value;
  let avatar = document.getElementById("idAvatar").value;
  let id = document.getElementById("idNumber").value;
  let list = new Lists(
    account,
    userName,
    password,
    email,
    type,
    language,
    desc,
    avatar,
    id
  );
  //  console.log(list.id)
  apiUpdateList(list)
    .then(function (result) {
      init();
      resetForm();
    })
    .catch(function (error) {
      console.log(error);
    });
};

//Hiển thị thông tin chi tiết user khi nhấn nút Update
const showDetailUser = (listId) => {
  document.querySelector(".modal-title").innerHTML = "Cập nhật thông tin";
  document.querySelector(".modal-footer").innerHTML = `
  <button class="btn btn-success" data-type="update">Cập nhật</button>
  <button class="btn btn-danger" data-dismiss="modal" data-target="#myModal">Huỷ </button>
  `;
  apiShowDetail(listId)
    .then(function (result) {
      let list = result.data;
      document.getElementById("idAccount").value = list.account;
      document.getElementById("idUserName").value = list.userName;
      document.getElementById("idPassword").value = list.password;
      document.getElementById("idEmail").value = list.email;
      document.getElementById("idType").value = list.type;
      document.getElementById("idLanguage").value = list.language;
      document.getElementById("idDesc").value = list.desc;
      document.getElementById("idAvatar").value = list.avatar;
      document.getElementById("idNumber").value = list.id;
    })
    .catch(function (error) {
      console.log(error);
    });
};

//Tìm kiếm user theo tài khoản
const handleSearch = (event) => {
  console.log(event);
  if (event.key !== "Enter") {
    return;
  }
  let value = event.target.value;
  console.log(value);
  apiSearchGetList(value).then(function (result) {
    let lists = result.data;
    for (let i in lists) {
      let list = lists[i];
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
};
document.getElementById("txtSearch").addEventListener("keypress", handleSearch);

