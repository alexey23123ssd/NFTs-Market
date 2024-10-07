const btn = document.querySelector(".load-items");
const itemContainer = document.querySelector(".main-content");
let count = 3;
    btn.addEventListener("click",()=>{
    count -= 1;
    if(count>0){
    for(i=0;i<8;i++){
      btn.insertAdjacentHTML('beforebegin',`<figure class="item">
                    <img src="img/card-photo.png"                  alt="item-card">
                    <figcaption>
                        <h2>Sun-Glass</h2>
                        <p>Current bid</p>
                        <img src="img/card-romb.svg" alt="romb">
                        <p>1.75</p>
                        <button>PLACE BID</button>
                        <div>07h 09m 012s</div>
                    </figcaption>
                </figure>
                `)        
    }
   }
   else{
    btn.diabled = true;
    btn.textContent = 'No more cards'
}
})