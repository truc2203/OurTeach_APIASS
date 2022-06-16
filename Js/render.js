//Call API
init()

function init(){
    apiGetList().then(function(reponse){
        var lists = reponse.data
        for(let i in lists)
        {
            var list = lists[i]
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
            )

        }
        webDisplay(lists)
    })
}

const webDisplay = ((lists) =>
{
    let web = ""
    for(let i in lists)
    {
        var list = lists[i]
        if(list.type === "GV")
        {
          web += `<div class="col-12 col-sm-6 col-lg-3 col-sm-6 col-12 px-3 pb-5">
          <div class="cards">
            <div class="card-view">
              <div class="avatar">
                <img class="w-100 scale-ava" src="${list.avatar}" alt="">
              </div>
              <div class="info text-center">
                <span class="country">${list.language}</span>
                <h4 class="name">${list.userName}</h4>
                <p class="criteria">${list.desc}</p>
              </div>
            </div>
          </div>
        </div>`
        }
    }
    //DOM
document.getElementById("webView").innerHTML = web;
})

