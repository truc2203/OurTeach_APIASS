const baseUrl = "https://62aa993a371180affbd7ccc8.mockapi.io/api/Tabula";
// Lấy danh sách
const apiGetList = (search) =>
  axios({
    url: baseUrl,
    method: "GET",
  });
// Thêm
const apiAddList = (list) =>
  axios({
    url: baseUrl,
    data: list,
    method: "POST",
  });
// Xóa
const apiDelList = (listId) =>
  axios({
    url: `${baseUrl}/${listId}`,
    method: "DELETE",
  });

// Cập nhật
const apiUpdateList = (list) =>
  axios({
    url: `${baseUrl}/${list.id}`,
    data: list,
    method: "PUT",
  });

//Hiển thị chi tiết
const apiShowDetail = (listId) =>
  axios({
    url: `${baseUrl}/${listId}`,
    method: "GET",
  });

// Tìm kiếm user theo tài khoản
const apiSearchGetList = (search) =>
  axios({
    url: `${baseUrl}/?account=${search}`,
    method: "GET",
  });
