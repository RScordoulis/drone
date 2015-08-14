function init() {
    tracker = initTracker("#droneView");
    //tracking.track("#example .drone", tracker);
    droneConnection/streamImage(tracker, "#droneView.drone");
}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();

    TrackerUtils.addTrackingColor("#A94A45", "red", tracker);
    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
    TrackerUtils.addTrackingColor("#CB7F84", "magenta", tracker);

    TrackerUtils.addTrackingColor("#296F47", "g1", tracker);
    TrackerUtils.addTrackingColor("#358E5E", "g2", tracker);
    TrackerUtils.addTrackingColor("#237A50", "g3", tracker);
    TrackerUtils.addTrackingColor("#226C4B", "g4", tracker);
    TrackerUtils.addTrackingColor("#42A586", "g5", tracker);
    TrackerUtils.addTrackingColor("#518958", "g6", tracker);
    TrackerUtils.addTrackingColor("#4F8C53", "g7", tracker);
    TrackerUtils.addTrackingColor("#4A8451", "g8", tracker);
    TrackerUtils.addTrackingColor("#3B7543", "g9", tracker);
    TrackerUtils.addTrackingColor("#34693D", "g10", tracker);
    TrackerUtils.addTrackingColor("#368F59", "g11", tracker);
    TrackerUtils.addTrackingColor("#1F6D3D", "g12", tracker);

    TrackerUtils.addTrackingColor("#E13232", "r1", tracker);
    TrackerUtils.addTrackingColor("#F04C50", "r2", tracker);
    TrackerUtils.addTrackingColor("#EB3434", "r3", tracker);
    TrackerUtils.addTrackingColor("#F54245", "r4", tracker);
    TrackerUtils.addTrackingColor("#F54146", "r5", tracker);
    TrackerUtils.addTrackingColor("#FD6663", "r6", tracker);
    TrackerUtils.addTrackingColor("#F74A43", "r7", tracker);
    TrackerUtils.addTrackingColor("#E83D3B", "r8", tracker);
    TrackerUtils.addTrackingColor("#D63936", "r9", tracker);
    TrackerUtils.addTrackingColor("#E44A48", "r10", tracker);
    TrackerUtils.addTrackingColor("#F94941", "r11", tracker);
    TrackerUtils.addTrackingColor("#F24350", "r12", tracker);

    TrackerUtils.startTrackingColors(tracker);

    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
        markColors(event.data, element);
    });

    return tracker;
}
function markColors(colors,element) {
    //do the marking
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);
    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
        writeRectangle(colors[i], element + " .output");
    }
}

function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}

function writeRectangle(rect, element) {
    $(element)
        .append("<p>")
        .append(rect.color + ": " + rect.width + "X" + rect.height)
        .append(" @ " + rect.x + ":" + rect.y)
}

window.addEventListener("load", init);
