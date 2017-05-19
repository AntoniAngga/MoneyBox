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
  }

}
