module.exports = {
  menuBar(role) {
    let option = []
    switch (role) {
      case 'admin':
        option = [{
          'menuName': 'All Transaction',
          'link': '/transaction/all',
          'icon': ''
        }, {
          'menuName': 'This Month Transaction',
          'link': '/transaction/this-month',
          'icon': ''
        }]
        return option
        break;
      default:
        option = [{
          'menuName': 'All Transaction',
          'link': '/transaction/all',
          'icon': ''
        }, {
          'menuName': 'This Month Transaction',
          'link': '/transaction/this-month',
          'icon': ''
        }]
        return option
    }
  },

  getMonthYear(date) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var trueMonth = month[date.getMonth()];

    var trueYear = date.getFullYear();
    return `${trueMonth} ${trueYear}`
  },

  getDay(date){
    return getDay(date)
  }
}
