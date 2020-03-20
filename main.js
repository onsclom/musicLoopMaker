let checkboxes = [...document.querySelectorAll(".checkboxMain"), ...document.querySelectorAll(".checkbox")];

let mouseIsDown = false;

document.onmousedown = docOnMousedown;
document.onmouseup = docOnMouseup;
function docOnMousedown(e)
{
  mouseIsDown = true;
}
function docOnMouseup(e)
{
  mouseIsDown = false;
}

checkboxes.forEach(function(curBox) {
  curBox.addEventListener("mousedown", drumClicked);
  curBox.addEventListener("mouseover", drumHovered);
});

function drumHovered(clicked) {
    if (mouseIsDown)
    {
        if (clicked.target.classList.contains('checkboxSelected'))
        {
            clicked.target.classList.remove("checkboxSelected");
        }
        else
        {
            clicked.target.classList.add("checkboxSelected");;
        }
    }
}

function drumClicked(clicked) {
    if (clicked.target.classList.contains('checkboxSelected'))
    {
        clicked.target.classList.remove("checkboxSelected");
    }
    else
    {
        clicked.target.classList.add("checkboxSelected");;
    }
}