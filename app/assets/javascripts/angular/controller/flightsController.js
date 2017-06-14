app.controller("flightsController", function($scope, $location, $window, $location, $timeout, Flight) {

  $scope.travels = ['Economy', 'Businesss', 'First', 'Premium']
  $scope.showPrice =true;
  $scope.showStops =true;
  $scope.showDepart =true;
  $scope.showAirline =true;
  $scope.showTrip =false;
  $scope.showLayover =false;

  $('#tripDuration').hide();
	$('#layoverDuration').hide();

  $scope.airlines = [
  	{'name' : 'Air Asia' , 'price' : '9,399'},
  	{'name' : 'Air India' , 'price' : '8,628'},
  	{'name' : 'Indigo' , 'price' : '10,145'},
  	{'name' : 'GoAir' , 'price' : '9,587'},
  	{'name' : 'Jet Airways' , 'price' : '10,150'},
  	{'name' : 'Spice Jet' , 'price' : '9,857'},
  	{'name' : 'Vistara' , 'price' : '10,124'}

  ]


   $scope.priceRange = {
    value: 5000,
    options: {
      floor: 0,
      ceil: 5000,
      step: 200
    }
  };

  $scope.tripDuration = {
    minValue: 2,
    maxValue: 25,
    options: {
      floor: 2,
      ceil: 25,
      step: 1,
      translate: function(value) {
	      return value + ' hours';
	    }
    }
  };

  $scope.layoverDuration = {
    minValue: 0,
    maxValue: 22,
    options: {
      floor: 0,
      ceil: 22,
      step: 1,
      translate: function(value) {
	      return value + ' hours';
	    }
    }
  };

  $scope.refreshSlider = function () {
    $timeout(function () {
      $scope.$broadcast('rzSliderForceRender');
    });
  };

  $scope.stops = function(event) {
  	$(event.target).toggleClass('active');
  }

  $scope.searchFlights = function() {
  	$scope.refreshSlider();
    $scope.data = $location.search();
    console.log($scope.data)
    Flight.getFlights($scope.data, function(response) {
        $scope.prices = [];
        $scope.flightDetails = [];
        $scope.flights = response.flights;
        for (var i = 0; i < $scope.flights.length; i++) {
            $scope.prices.push(($scope.data.adultCount * $scope.flights[i].adult_price) +
                ($scope.data.childCount * $scope.flights[i].child_price) +
                ($scope.data.infantCount * $scope.flights[i].infant_price));
            var depart = $scope.flights[i].depart_time;
            var time1 = depart.split('T');
            $scope.depart_time = time1[1].split(':');
            $scope.departTime = $scope.depart_time[0] + ":" + $scope.depart_time[1];
            var arrival = $scope.flights[i].arrival_time;
            var time2 = arrival.split('T');
            $scope.arrival_time = time2[1].split(':');
            $scope.arrivalTime = $scope.arrival_time[0] + ":" + $scope.arrival_time[1];
            $scope.flightDetails.push({ 'flight': $scope.flights[i], 'price': $scope.prices[i], 'depart_time': $scope.departTime, 'arrival_time': $scope.arrivalTime });
        }
        console.log($scope.flightDetails);
    });
  }

  $scope.showDiv = function(event) {
  	console.log(event.target.id)
  	if(event.target.id == "price") {
  		$(event.target).toggleClass('rightArrow');
  		$scope.showPrice = !$scope.showPrice;
  	}
  	else if(event.target.id == "stops") {
  		$(event.target).toggleClass('rightArrow');
  		$scope.showStops = !$scope.showStops;
  	}
  	else if(event.target.id == "departTime") {
  		$(event.target).toggleClass('rightArrow');
  		$scope.showDepart = !$scope.showDepart;
  	}
  	else if(event.target.id == "airline") {
  		$(event.target).toggleClass('rightArrow');
  		$scope.showAirline = !$scope.showAirline;
  	}
  	else if(event.target.id == "trip") {
  		$(event.target).toggleClass('downArrow');
  		// $scope.showTrip = !$scope.showTrip;
  		$('#tripDuration').toggle();
  	}
  	else if(event.target.id == "layover") {
  		$(event.target).toggleClass('downArrow');
  		$('#layoverDuration').toggle();
  		// $scope.showLayover = !$scope.showLayover;
  	}
  	

  }

});
