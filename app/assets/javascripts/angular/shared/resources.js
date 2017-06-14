app.factory('Flight', function($resource) {
  return $resource('/flights/:id.json',{}, {
    getFlights: {
      url: '/flights/get_flights',
      method: 'GET'
    },
    get: {
      method: 'GET',
      isArray: true,
      responseType: 'json'
    }
  });
});





