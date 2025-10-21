function navigate(page){
    const content= document.getElementById("content");
    const template=document.getElementById(page);
    const clone=template.content.cloneNode(true);
    content.innerHTML='';
    content.appendChild(clone);
    if((page=='signup') || (page== 'login')){
        content.className='enter';
    }else{
        content.className=page;
    }
}
navigate('login');