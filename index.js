
$( document ).ready(async function () {

    await fetch("https://breakingbadapi.com/api/characters")
        .then(response => {
            return response.json()
        })
        .then(data => {
            for (ele of data) {

                let items = document.querySelector(".row");
                let card = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 " >
    <div class="card m-3 p-1 text-center "  style="width: 14rem">
    <img src="${ele.img}" class="card-img"  alt="404">
    <div class="card-body"  >
    <h3 class="card-title">${ele.name}</h3>
<!--    <div class="hide-dec" >-->
    <p  class="card-text">${ele.occupation}</p>
<!--    </div>-->
    
    </div>
    </div>
</div>`
                items.innerHTML += card
            }
        })


    // hover accept two parameters one when hover the other when out of hover 
    $('.card').hover(
        function () {
            let card = $(this)[0].children[1];
            $(card).show();
        },
        //when out 
        function () {
            let card = $(this)[0].children[1];
            $(card).toggle();
        }
    );
});