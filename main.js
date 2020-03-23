let checkboxes = [...document.querySelectorAll(".checkboxMain"), ...document.querySelectorAll(".checkbox")];
let indicators = document.getElementById("indicatorRow").childNodes;

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
        closedRow[beat-1] = true;
    }
    else if (row == "openRow")
    {
        openRow[beat-1] = true;
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
        closedRow[beat-1] = false;
    }
    else if (row == "openRow")
    {
        openRow[beat-1] = false;
    }
}

let playing = false;
let bpm = 80;
let curTick = 0;
function togglePlay(element) {
    if (playing) {
        element.src = "svgs/play.svg";
        playing = false;
        for (let indicator of indicators)
        {
            if (indicator.classList && indicator.classList.contains("active"))
            {
                indicator.classList.remove("active");
            }
        }
    }
    else {
        element.src = "svgs/pause.svg";
        playing = true;
        curTick = 0;
        drumLoop();
    }
}

function drumLoop() {
    if (playing)
    {
        curTick %= 16;

        for (let indicator of indicators)
        {
            if (indicator.id == curTick+1)
            {
                console.log("Triggered!");
                indicator.classList.add("active");
            }
            else
            {
                if (indicator.classList && indicator.classList.contains("active"))
                {
                    indicator.classList.remove("active");
                }
                //indicator.classList.remove("active");
            }
        }

        console.log(curTick);

        if (kickRow[curTick] == true)
        {
            var snd = new Audio("drums/kick.wav"); // buffers automatically when created
            snd.play()
        }
        if (snareRow[curTick] == true)
        {
            var snd = new Audio("drums/snare.wav"); // buffers automatically when created
            snd.play()
        }
        if (closedRow[curTick] == true)
        {
            var snd = new Audio("drums/closed.wav"); // buffers automatically when created
            snd.play()
        }
        if (openRow[curTick] == true)
        {
            var snd = new Audio("drums/open.wav"); // buffers automatically when created
            snd.play()
        }

        curTick += 1;
        setTimeout(drumLoop, ((1/bpm)*60*1000)/4);
    }

}
