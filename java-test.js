const click = document.querySelector(".click");
const click2 = document.querySelector(".click2");

let cada_card = document.querySelectorAll(".slide-card");
let idJunto = [];
for (let i = 0; i < cada_card.length; i++) {
	let idElem = cada_card[i].id;
	idCortado = idElem.split("_");
	idCortado.pop();
	let arraySolo = idCortado.shift();
	idJunto.push(arraySolo)
}

let ciruloBigAni = document.querySelectorAll(".animation_big");
let ciruloMidAni = document.querySelectorAll(".animation_mid");
let ciruloSmallAni = document.querySelectorAll(".animation_small");

let textoMasInfo = document.querySelectorAll(".info_btn_todos");
let textoTodos = document.querySelectorAll(".texto_todos");

let btnInfoBack = document.querySelectorAll(".info-btn-back");
let todaInfoRegion = document.querySelectorAll(".toda_info_region");






let btnDireccion = document.querySelectorAll(".items_direccion");
btnDireccion.forEach((el,index1) =>{
	el.addEventListener("click", (e) =>{

        const regionesContainerHover = document.querySelector(".donde_direccion_hover");
        regionesContainerHover.classList.remove("donde_direccion_hover");

        setTimeout(() =>{
            regionesContainerHover.classList.add("donde_direccion_hover");
        },2000);

		if(e.target.id == idJunto[index1]){
			cada_card.forEach((elemento,index) =>{
                if(elemento.classList.contains("mostrado")){
					elemento.classList.remove("mostrado");
					elemento.classList.add("semi_oculto1");

					setTimeout(() =>{
						elemento.style.zIndex = "10";
						elemento.classList.add("oculto");
						elemento.classList.remove("semi_oculto1");
					},1830)
				}
				if (index == index1) {
					elemento.style.zIndex = "30";
					elemento.classList.remove("oculto");
					elemento.classList.add("semi_oculto2");
					setTimeout(() =>{
						elemento.classList.remove("semi_oculto2");
						elemento.classList.add("mostrado");
						elemento.style.zIndex = "20";
					},1830);
				}
			});
            textoMasInfo.forEach((elTexto,indTexto) =>{
                if(elTexto.parentNode.classList.contains("mostrado")){
					elTexto.parentNode.classList.remove("mostrado");
					elTexto.parentNode.classList.add("semi_oculto1");
                    elTexto.style.display = "none";
					setTimeout(() =>{
						elTexto.parentNode.classList.add("oculto");
						elTexto.parentNode.classList.remove("semi_oculto1");
					},1830)
				}
				if (indTexto == index1) {
                    elTexto.style.display = "inline-block";
					elTexto.parentNode.classList.remove("oculto");
					elTexto.parentNode.classList.add("semi_oculto2");
					setTimeout(() =>{
						elTexto.parentNode.classList.remove("semi_oculto2");
						elTexto.parentNode.classList.add("mostrado");
					},1830);
				}
            });
            textoTodos.forEach((elTexto,indTexto) =>{
                if(elTexto.parentNode.classList.contains("semi_oculto1")){
                    elTexto.style.animation = "hide-text 0.6s .5s ease-in-out forwards";
                    setTimeout(() =>{
                        elTexto.classList.toggle(`titulo-${idJunto[indTexto]}-show`);
                        elTexto.classList.toggle(`titulo-${idJunto[indTexto]}`);
                    },1850);
                }
                if(elTexto.parentNode.classList.contains("semi_oculto2")){
                    elTexto.style.animation = "show-text 0.6s 1.2s ease-in-out forwards";
                    setTimeout(() =>{
                        elTexto.classList.toggle(`titulo-${idJunto[indTexto]}-show`);
                        elTexto.classList.toggle(`titulo-${idJunto[indTexto]}`);
                    },1850);
                }
            })
            btnInfoBack.forEach((elInfoBack,indInfoBack) =>{
                if(elInfoBack.classList.contains("mostrado")){
                    elInfoBack.classList.toggle("info_btn_show");
                    elInfoBack.classList.toggle("info_btn_hide");
					elInfoBack.classList.remove("mostrado");
					setTimeout(() =>{                        
						elInfoBack.classList.add("oculto");
					},1830)
				}
				if (indInfoBack == index1) {
                    elInfoBack.classList.toggle("info_btn_show");
                    elInfoBack.classList.toggle("info_btn_hide");
					elInfoBack.classList.remove("oculto");
					setTimeout(() =>{
						elInfoBack.classList.add("mostrado");
					},1830);
				}
            });
            todaInfoRegion.forEach((elInfoRegion,indInfoRegion) =>{
                if(elInfoRegion.classList.contains("mostrado")){
                    elInfoRegion.classList.toggle("toda_info_show");
                    elInfoRegion.classList.toggle("toda_info_hide");
					elInfoRegion.classList.remove("mostrado");

                    elInfoRegion.children[3].innerHTML = ``;

					setTimeout(() =>{                        
						elInfoRegion.classList.add("oculto");
					},1830)
				}
				if (indInfoRegion == index1) {
                    elInfoRegion.classList.toggle("toda_info_show");
                    elInfoRegion.classList.toggle("toda_info_hide");
					elInfoRegion.classList.remove("oculto");

                    elInfoRegion.children[3].innerHTML = `
                        <footer class="footer_container">
                            <ul class="footer_items">
                                <li class="footer_info_item">
                                    <div class="footer_logo_item">
                                        <img src="images/logo-japan.png">
                                    </div>
                                    <p class="footer_logo_info">En esta pagina nos encargamos de recopilar la informacion sobre el mapa de 
                                        japon, la gastronomia como asi de proporcionar libros para el estudio del idioma japones.
                                    </p>
                                </li>
                                <li class="footer_info_item footer_contact">
                                    <h5 class="contact_item1">Contactanos</h5>
                                    <h5 class="contact_item2">Contact Us</h5>
                                    <div class="contact_item3">
                                        <i class="fa-regular fa-envelope"></i>
                                        <p>nicolasggg333@gmail.com</p>
                                    </div>
                                </li>
                                <li class="footer_info_item footer_media">
                                    <h5 class="contact_item1">Redes Sociales</h5>
                                    <h5 class="contact_item2">Social Media</h5>
                                    <div class="contact_item3">
                                        <a href="#" class="img_logos">
                                            <img src="images/logos/facebook_logo.png">
                                        </a>
                                        <a href="#" class="img_logos">
                                            <img src="images/logos/twitter_logo.png">
                                        </a>
                                        <a href="#" class="img_logos">
                                            <img src="images/logos/instagram_logo.png">
                                        </a>
                                    </div>
                                </li>
                                
                            </ul>
                        </footer>
        
                    `;

					setTimeout(() =>{
						elInfoRegion.classList.add("mostrado");
					},1830);
				}
            });
            ciruloSmallAni.forEach((eleCirculoSmall,indexCirculoSmall) =>{
                if(eleCirculoSmall.parentNode.parentNode.classList.contains("semi_oculto1")){
                    eleCirculoSmall.style.animation = "anillo-item-out 1.2s ease-in-out forwards";
                    setTimeout(() =>{
                        eleCirculoSmall.classList.toggle(`imagen-${idJunto[indexCirculoSmall]}-show`);
                        eleCirculoSmall.classList.toggle(`imagen-${idJunto[indexCirculoSmall]}`);
                    },1850);
                }
                if(eleCirculoSmall.parentNode.parentNode.classList.contains("semi_oculto2")){
                    eleCirculoSmall.style.animation = "anillo-item-in 1.2s ease-in-out forwards"; 
                    setTimeout(() =>{
                        eleCirculoSmall.classList.toggle(`imagen-${idJunto[indexCirculoSmall]}-show`);
                        eleCirculoSmall.classList.toggle(`imagen-${idJunto[indexCirculoSmall]}`);
                    },1850);
                }
            })
            ciruloMidAni.forEach((eleCirculoMid,indexCirculoMid) =>{
                if(eleCirculoMid.parentNode.parentNode.classList.contains("semi_oculto1")){
                    eleCirculoMid.style.animation = "anillo-item-out 1.2s .3s ease-in-out forwards";
                    setTimeout(() =>{
                        eleCirculoMid.classList.toggle(`imagen-${idJunto[indexCirculoMid]}-show`);
                        eleCirculoMid.classList.toggle(`imagen-${idJunto[indexCirculoMid]}`);
                    },1850);
                }
                if(eleCirculoMid.parentNode.parentNode.classList.contains("semi_oculto2")){
                    eleCirculoMid.style.animation = "anillo-item-in 1.2s .3s ease-in-out forwards"; 
                    setTimeout(() =>{
                        eleCirculoMid.classList.toggle(`imagen-${idJunto[indexCirculoMid]}-show`);
                        eleCirculoMid.classList.toggle(`imagen-${idJunto[indexCirculoMid]}`);
                    },1850);
                }
            })
            ciruloBigAni.forEach((eleCirculoBig,indexCirculoBig) =>{
                if(eleCirculoBig.parentNode.parentNode.classList.contains("semi_oculto1")){
                    eleCirculoBig.style.animation = "anillo-item-out 1.2s .6s ease-in-out forwards";
                    setTimeout(() =>{
                        eleCirculoBig.classList.toggle(`imagen-${idJunto[indexCirculoBig]}-show`);
                        eleCirculoBig.classList.toggle(`imagen-${idJunto[indexCirculoBig]}`);
                    },1850);
                }
                if(eleCirculoBig.parentNode.parentNode.classList.contains("semi_oculto2")){
                    eleCirculoBig.style.animation = "anillo-item-in 1.2s .6s ease-in-out forwards"; 
                    setTimeout(() =>{
                        eleCirculoBig.classList.toggle(`imagen-${idJunto[indexCirculoBig]}-show`);
                        eleCirculoBig.classList.toggle(`imagen-${idJunto[indexCirculoBig]}`);
                    },1850);
                }
            })
		}
		else{
			console.log("no es asi")
		}

	})
})


 




// info_hokkaido_container.addEventListener("mouseover", (event) => {
//     info_hokkaido_back.style.top = "-50px";
//     info_hokkaido_mov.style.top = "-3%";
// });
// info_hokkaido_container.addEventListener("mouseout", (event) => {
//     info_hokkaido_back.style.top = "-41px";
//     info_hokkaido_mov.style.top = "-2%";
// });


const arrow_info_todos = document.querySelectorAll(".container-arrow-up");
const btn_info_todos = document.querySelectorAll(".info_btn_todos");
const body_container = document.getElementById("body");







btn_info_todos.forEach((el,ind) =>{
    el.addEventListener("click", ()=> {
        body_container.style.overflowY = "visible";
        window.scrollTo({
            top: 770,
            behavior: "smooth"
        })    
    })
})
arrow_info_todos.forEach((el,ind) =>{
    el.addEventListener("click", ()=> {
        body_container.style.overflowY = "visible";
        window.scrollTo({
            top: 770,
            behavior: "smooth"
        })    
    })
})








const hanamiClick = document.getElementById("hanami_info");
const hanamiImg = document.getElementById("img_hanami_container");
const closeHanami = document.getElementById("close_hanami");

hanamiClick.addEventListener("click", ()=>{
    hanamiImg.style.display = "flex";
})
closeHanami.addEventListener("click", ()=>{
    hanamiImg.style.display = "none";
})

const estudiarClick = document.getElementById("estudiar_info");
const estudiarImg = document.getElementById("img_estudiar_container");
const closeEstudiar = document.getElementById("close_estudiar");

estudiarClick.addEventListener("click", ()=>{
    estudiarImg.style.display = "flex";
})
closeEstudiar.addEventListener("click", ()=>{
    estudiarImg.style.display = "none";
})

let btn_hacia_arriva = document.querySelector(".arrow_hacia_inicio");

btn_hacia_arriva.addEventListener("click", ()=> {
    body_container.style.overflowY = "hidden";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })    
})














