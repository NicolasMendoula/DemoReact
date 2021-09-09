const currentSection = () =>{
    let scrollTop = document.querySelector('html').scrollTop;
    document.querySelectorAll('section').forEach((section)=>{
        if(scrollTop >= section.offsetTop && scrollTop < (section.offsetTop + section.clientHeight)){
            document.getElementById('menu_'+section.id).classList.add('current');
        }else{
            document.getElementById('menu_'+section.id).classList.remove('current');
        }
    });
}

export default currentSection;