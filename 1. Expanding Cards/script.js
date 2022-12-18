const panels = document.querySelectorAll(".panel");


panels.forEach((panel,idx)=>{
    panel.addEventListener("click",(e)=>{
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}