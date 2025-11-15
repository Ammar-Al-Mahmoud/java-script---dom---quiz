const btnSider = document.getElementById("btn-sider");
const sider = document.getElementById("sider");

btnSider.onclick=()=>{
            sider.classList.toggle("show");

    if(btnSider.classList.contains("fa-eye-slash")){
        btnSider.classList.replace("fa-eye-slash","fa-eye");
    }
    else{
        btnSider.classList.replace("fa-eye","fa-eye-slash");

    }
}

document.onclick=(event)=>{
    if(event.target.id !== "btn-sider" ){
        sider.classList.remove("show");
        btnSider.classList.replace("fa-eye","fa-eye-slash");

    }
}