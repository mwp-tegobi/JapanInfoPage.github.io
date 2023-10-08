const container_inicio_jpn = document.querySelector(".container_inicio_jpn");
const inicio_item_animation_display = document.querySelector(".inicio_item_animation_display");
const inicio_item_animation_left = document.querySelector(".inicio_item_animation_left");
const inicio_item_animation_right = document.querySelector(".inicio_item_animation_right");




let items_inicio_direccion = document.querySelectorAll(".items_inicio_direccion");
let items_inicio_map = document.querySelectorAll(".items_inicio_map");
let titulos_regiones = document.querySelectorAll(".titulos-regiones");

let animation_big = document.querySelectorAll(".animation_big");
let animation_mid = document.querySelectorAll(".animation_mid");
let animation_small = document.querySelectorAll(".animation_small");


items_inicio_direccion.forEach((elemento,index) =>{
    elemento.addEventListener("mouseenter", (e)=>{
        items_inicio_map.forEach((elementoCambia,indexCambia) =>{
            if(index === indexCambia){
                elementoCambia.style.transition = `2s`;
                elementoCambia.style.display = "inline";

                elemento.addEventListener("mouseleave", ()=>{
                    elementoCambia.style.display = "none";
                })
            }
        })
    })
    elemento.addEventListener("click", ()=>{
        
        inicio_item_animation_display.style.animation = `animation_inicio_jpn_opacity .5s ease-in forwards`;

        setTimeout(() =>{
            inicio_item_animation_display.style.display = `none`;
            if(container_inicio_jpn.clientWidth <= 600){
                inicio_item_animation_left.style.animation = `animation_inicio_jpn_out1_resolution 1.2s ease-in forwards`;
                inicio_item_animation_right.style.animation = `animation_inicio_jpn_out2_resolution 1.2s ease-in forwards`;
                setTimeout(() =>{container_inicio_jpn.style.display = `none`;},1250)
            }
            else{
                inicio_item_animation_left.style.animation = `animation_inicio_jpn_out1 1.2s ease-in forwards`;
                inicio_item_animation_right.style.animation = `animation_inicio_jpn_out2 1.2s ease-in forwards`;
                setTimeout(() =>{container_inicio_jpn.style.display = `none`;},1250)
            }
        },750)





        cada_card.forEach((elemento_card,index_card) =>{
            if(index === index_card){
                elemento_card.classList.add("mostrado");
                elemento_card.style.zIndex = "20";
            }
            else{
                elemento_card.classList.add("oculto");
                elemento_card.style.zIndex = "10";
            }
        })
        titulos_regiones.forEach((elmento_titulo,index_titulo) =>{
            if(index === index_titulo)  elmento_titulo.classList.add("mostrado");
            else    elmento_titulo.classList.add("oculto");
        })
        animation_big.forEach((el,ind) =>{
            let elID = el.id.split("_")[0];
            if(ind === index)   el.classList.add(`imagen-${elID}-show`);
            else    el.classList.add(`imagen-${elID}`);
        })
        animation_mid.forEach((el,ind) =>{
            let elID = el.id.split("_")[0];
            if(ind === index)   el.classList.add(`imagen-${elID}-show`);
            else    el.classList.add(`imagen-${elID}`);
        })
        animation_small.forEach((el,ind) =>{
            let elID = el.id.split("_")[0];
            if(ind === index){
                el.classList.add(`imagen-${elID}-show`);
            }
            else{
                el.classList.add(`imagen-${elID}`);
            }
        })
        textoTodos.forEach((el,ind) =>{
            let elID2 = el.innerText.toLowerCase();
            if(ind === index)   el.classList.add(`titulo-${elID2}-show`);
            else    el.classList.add(`titulo-${elID2}`);
        });

        textoMasInfo.forEach((el,ind) =>{
            if(ind === index)   el.style.display = `inline`;
            else    el.style.display = `none`;
        });

        btnInfoBack.forEach((el,ind) =>{
            if(ind === index)   el.classList.add(`info_btn_show`,`mostrado`);
            else    el.classList.add(`info_btn_hide`,`oculto`);
        });

        todaInfoRegion.forEach((el,ind) =>{
            if(ind === index)   el.classList.add(`toda_info_show`,`mostrado`);
            else    el.classList.add(`toda_info_hide`,`oculto`);

            // console.log(el.clientHeight)
            if(ind === index){
                // console.log(el.children)

                el.children[3].innerHTML = `
                        <footer class="footer_container">
                            <ul class="footer_items">
                                <li class="footer_info_item">
                                    <div class="footer_logo_item">
                                        <img loading="lazy" src="images/logo-japan.png">
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
                                            <img loading="lazy" src="images/logos/facebook_logo.png">
                                        </a>
                                        <a href="#" class="img_logos">
                                            <img loading="lazy" src="images/logos/twitter_logo.png">
                                        </a>
                                        <a href="#" class="img_logos">
                                            <img loading="lazy" src="images/logos/instagram_logo.png">
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </footer>
                    
                    
                    
                    
                    `;


            //     const footer_container = document.querySelector(".footer_container");
            //     footer_container.style.top = `calc(${el.clientHeight}px + 740px)`;

            }





        })

        



    })
})


