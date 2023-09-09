    let favListInDom = document.querySelector('#favList');
    let favList = JSON.parse(localStorage.getItem('favHeros'));
    console.log(favList);

    function addFavToDom(heroDetails) {
        let li = document.createElement('li');
        li.innerHTML =
            `
        <img src="${heroDetails.thumbnail.path+"."+heroDetails.thumbnail.extension}" id = "poster"  >
        <h2 id="heroTitle"  data-id=${heroDetails.id}>${heroDetails.name}</h2>
        <button id="details" data-id="${heroDetails.id}"> details </button>
        <button id="delete" data-id="${heroDetails.id}"> delete </button>
        `;
        favListInDom.append(li);


    }

    // function deleteHero(e){

    //     let newList = favList.filter((id)=>{
    //         return favList.id != e.target.value.dataset.id
    //     })

    // }

    async function renderList() {
        favListInDom.innerHTML = "";
        let heroDetails = [];
        console.log('test');
        if (favList === 0) {
            return
        }
        if (favList.length != 0) {

            for (i = 0; i < favList.length; i++) {
                let id = favList[i];
                let response = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`);
                let heroDetails = (await response.json()).data.results[0];

                addFavToDom(heroDetails);

            }
        }



    }

    function handleKeyandClick(e) {
        console.log('favList');
        if (e.target.value.id == 'delete') {


            let newList = [];
            for (i of favList) {
                if (i != e.target.dataset.id) {
                    newList.push(i);
                }
            }
            // let newList =  favList.filter((id)=>{
            //     return favList[i] !== e.target.dataset.id;
            // })
            favList = [...newList];
            console.log(favList);
            localStorage.setItem("favHeros", JSON.stringify(favList));
            let ele = document.getElementById(e.target.dataset.id);
            e.target.parentElement.style.display = "none";
            renderList();

        }
        if (e.target.id == 'details') {
            let heroId = e.target.dataset.id;
            localStorage.setItem("heroId", JSON.stringify(heroId));
            window.open("hero_detail/detail.html");
        }


    }


    document.addEventListener('click', handleKeyandClick);
    renderList();