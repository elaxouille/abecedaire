function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}


function checkMot(mot) {
    var lgmot = mot.length;
    var retour = 0;
    for (var i = 0; i < lgmot; i++) {
        var tempL = "#" + mot[i].toUpperCase();
        if ($(tempL).text().indexOf(mot[i]) !== -1) {
            retour += 1;
        }
    }
    if (retour == lgmot) {
        alert("Bien joué ! Excellent ! Formidable !");
    } else {
        alert("Dommage, réessaie encore.");
    }
}

$(document).ready(function () {
    init();
    $(".btnLettre").draggable();
    $(".zoneDrop").droppable({
        accept: ".btnLettre",
        drop: function (ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({
                top: "20px",
                left: "20px"
            }).appendTo(droppedOn);
        }
    });
});
