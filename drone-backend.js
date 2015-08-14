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

   /* bot.nav.on("navdata", function(data) {
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
    });*/

    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after(8*1000, function() {
        bot.drone.right(0.1);
    });
    after(9*1000, function(){
        bot.drone.hover();
    });
    after(10*1000, function() {
        bot.drone.forward(0.1);
    });
    after(11*1000, function(){
        bot.drone.hover();
    });
    after(12*1000, function() {
        bot.drone.left(0.1);
    });
    after(13*1000, function(){
        bot.drone.hover();
    });
    after(14*1000, function() {
        bot.drone.back(0.1);
    });
    after(15*1000, function(){
        bot.drone.hover();
    });
    after(16*1000, function() {
        bot.drone.right(0.1);
    });
    after(17*1000, function(){
        bot.drone.hover();
    });
    after(18*1000, function() {
        bot.drone.land();
    });
    after(22*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();
