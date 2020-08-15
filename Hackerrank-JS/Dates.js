function getDayName(dateString) {
    let dayName;
    var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    dayName = new Date(dateString).getDay();

    
    return weekdays[dayName];
}