const baseUrl = "https://62aa993a371180affbd7ccc8.mockapi.io/api/Tabula";

const apiGetList = () =>
  axios({
    url: baseUrl,
    method: "GET",
  });

const apiAddList = (list) =>
  axios({
    url: baseUrl,
    data: list,
    method: "POST",
  });
