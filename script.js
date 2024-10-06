const btn = document.querySelector(".load-items");
const itemContainer = document.querySelector(".main-content");

btn.addEventListener("click",()=>{
    for(i=0;i<10;i++){
        const item = document.createElement("div");
        item.innerHTML = "<h2>Заголовок</h2>";
        item.classList.add("flag");
        itemContainer.appendChild(item);
    }

    

})