class FlightsController < ApplicationController
  
	def index
		@flight = Flight.all
	end

	def get_flights
		depart = Time.zone.parse(params['departDate']).localtime
		flights = Flight.where(:trip_type => params['tripCategory'], :from_place => params['fromLocation'], :to_place => params['toLocation'], :date => depart).all
		render json: {flights: flights}
	end

end
