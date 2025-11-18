const btnSearch = document.getElementById("btn-sider");
const searchBox = document.getElementById("search-box");


btnSearch.onclick = () => {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
          btnSearch.classList.replace("fa-search","fa-search-minus");
       
    }
    else {
         btnSearch.classList.replace("fa-search-minus","fa-search");
    }
}
