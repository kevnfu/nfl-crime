let params = new URLSearchParams(window.location.search);
let player = params.get("name");
// console.log(player);

$(document).ready(function() {

    let nameElem = $(`<h5 class="section">${player} Crimes</h5>`);
    $("#crimes").prepend(nameElem);

    AJAX.arrestDetails(player, function(response) {
        // console.log(response);
        response.forEach(e => {
            let elem = $(`
                <div class="col s12 m6" style="display">
                    <div class="card small">
                        <div class="card-content">
                            <span class="card-title">${e.Crime_category}</span>
                            <p><b>${e.Date}</b></p>
                            <p>
                            ${e.Description}<br>
                            <i>${e.Outcome}</i>
                            </p>
                        </div>
                    </div>
                </div>
            `);
            $("#crimes").append(elem);
            
        })
    });

    AJAX.searchNews(player, function(response) {
        // console.log(response);
        response.articles.forEach(e => {
            let elem = $(`
                <div class="row">
                    <div class="col s12">
                        <div class="card large">
                            <div class="card-image">
                                <img src="${e.urlToImage}">
                                <span class="card-title">${e.title}</span>
                            </div>
                            <div class="card-content">
                                <p><b>${e.publishedAt.split("T")[0]}</b></p>
                                <p>${e.description}</p>
                            </div>
                            <div class="card-action">
                                <a href="${e.url}">See article</a>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            $("#news").append(elem);
        });
    });
})