var Cylon = require('cylon');


// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);


var bot;
function fly(robot) {
    bot = robot;
    bot.drone.config('general:navdata_demo', 'TRUE');

    bot.nav.on("navdata", function(data) {
        // console.log(data);
    });

    bot.nav.on("altitudeChange", function(data) {
        console.log("Altitude:", data);
        // Drone is higher than 1.5 meters up
        if (altitude > 1.5) {
            bot.drone.land();
        }
    });

    bot.nav.on("batteryChange", function(data) {
        console.log("Battery level:", data);
    });
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    bot.drone.right(0.2);
    after(3*1000, function() {
        bot.drone.right(0);
    });
    after(8*1000, function() {
        bot.drone.right(0);
    });
    after(12*1000, function() {
        bot.drone.right(0);
    });
    after(20*1000, function() {
        bot.drone.right(0);
    });

    after(21*1000, function() {
        bot.drone.land();
    });
    after(25*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();
