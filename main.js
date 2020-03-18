var checkboxes = [...document.querySelectorAll(".checkboxMain"), ...document.querySelectorAll(".checkbox")];

checkboxes.forEach(function(curBox) {
  curBox.addEventListener("click", toggle);
});

function toggle(clicked) {
    if (clicked.target.classList.contains('checkboxSelected'))
    {
        clicked.target.classList.remove("checkboxSelected");
    }
    else
    {
        clicked.target.classList.add("checkboxSelected");;
    }
}