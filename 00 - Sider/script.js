const btnSider = document.getElementById("btn-sider");
const sider = document.getElementById("sider");

btnSider.onclick = () => {
    sider.classList.toggle("show");
    if (btnSider.classList.contains("fa-bars")) {
        btnSider.classList.replace("fa-bars", "fa-close");
    }
    else {
        btnSider.classList.replace("fa-close", "fa-bars");
    }
}
document.onclick = (event)=> {
    if (event.target.id !== "btn-sider") {
        sider.classList.remove("show");
        btnSider.classList.replace("fa-close", "fa-bars");

    }
}