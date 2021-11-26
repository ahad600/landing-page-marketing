window.onload = function(){
    const c_nav = document.querySelector(".c-nav");

    window.onscroll = (e)=>{
        win_h = window.innerWidth;
        win_y = window.pageYOffset;

        if(win_y < 30){
            c_nav.classList.remove("c-nav-sticy");
            
        }else{
            c_nav.classList.add("c-nav-sticy");
        };

    };


};
