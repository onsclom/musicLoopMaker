let checkboxes = [...document.querySelectorAll(".checkboxMain"), ...document.querySelectorAll(".checkbox")];

kickRow = [];
snareRow = [];
closedRow = [];
openRow = [];

for (let row of [kickRow, snareRow, closedRow, openRow]) {
    for (let i = 0; i<16; i++)
    {
        row.push(false);
    }
}

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

checkboxes.forEach((curBox) => {
  curBox.addEventListener("mousedown", drumClicked);
  curBox.addEventListener("mouseover", drumHovered);
});

function drumHovered(hovered) {
    if (mouseIsDown)
    {
        if (hovered.target.classList.contains('checkboxSelected'))
        {
            removeBeat(hovered.target);
        }
        else
        {
            addBeat(hovered.target);
        }
    }
}

function drumClicked(clicked) {
    if (clicked.target.classList.contains('checkboxSelected'))
    {
        removeBeat(clicked.target);
    }
    else
    {
        addBeat(clicked.target);
    }
}

function addBeat(element) {
    element.classList.add("checkboxSelected");
    let row = element.parentNode.id;
    let beat = element.id;

    if (row == "kickRow")
    {
        kickRow[beat-1] = true;
    }
    else if (row == "snareRow")
    {
        snareRow[beat-1] = true;
    }
    else if (row == "closedRow")
    {
        snareRow[beat-1] = true;
    }
    else if (row == "openRow")
    {
        snareRow[beat-1] = true;
    }
}

function removeBeat(element) {
    element.classList.remove("checkboxSelected");
    let row = element.parentNode.id;
    let beat = element.id;
    
    if (row == "kickRow")
    {
        kickRow[beat-1] = false;
    }
    else if (row == "snareRow")
    {
        snareRow[beat-1] = false;
    }
    else if (row == "closedRow")
    {
        snareRow[beat-1] = false;
    }
    else if (row == "openRow")
    {
        snareRow[beat-1] = false;
    }
}

let playing = false;
function togglePlay(element) {
    if (playing) {
        element.src = "svgs/play.svg";
    }
    else {
        element.src = "svgs/pause.svg";
    }
    playing = !playing;
}