/* module.exports = getDate;

function getDate() {
    let options = { weekday: "long", day: "numeric", month: "long" };
    let today = new Date();
    let day = today.toLocaleDateString("en-us", options);
    return day;
} */

// or use the anonymous function to use the object property
module.exports.getDate = function() {
    let options = { weekday: "long", day: "numeric", month: "long" };
    let today = new Date();
    let day = today.toLocaleDateString("en-us", options);
    return day;
}

module.exports.getDay = function() {
    let options = { day: "numeric" };
    let today = new Date();
    let day = today.toLocaleDateString("en-us", options);
    return day;
}