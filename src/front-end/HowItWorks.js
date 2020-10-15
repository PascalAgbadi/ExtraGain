import React from "react";

class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <section id="HowItWorks">
          <div className="jumbotron bg-white">
            <div className="row">
              <div className="col-sm-5 col-md-4"></div>
              <div className="col-sm-7 col-md-8">
                <h6 className="font-weight-bold">Step 1: List Your Trip</h6>
                <p>
                  Register, login, then list your upcoming flight itinerary on
                  our platform. By doing so, you’re telling our shipping
                  partners the dates of your trip, the route that you’re taking,
                  and how many checked luggage slots you’ll have available for
                  shipments.
                </p>
              </div>
            </div>
          </div>
          <div className="jumbotron">
            <div className="row">
              <div className="col-sm-5 col-md-4"></div>
              <div className="col-sm-7 col-md-8">
                <h6 className="font-weight-bold">
                  Step 2: Pick Up Your ExtraGain Travel Box
                </h6>
                <p>
                  Pick up your luggage(s) right at your departure airport. All
                  shipped items come in a pre-packed ExtraGain Travel Box™, so
                  you don’t have to worry about finding space in your own
                  personal luggage. Each ExtraGain Travel Box™ requires one
                  entire checked luggage slot plus, all ExtraGain trips come
                  complete with a digital manifest that includes photos and
                  descriptions of every included item.
                </p>
              </div>
            </div>
          </div>
          <div className="jumbotron bg-white">
            <div className="row">
              <div className="col-sm-5 col-md-4"></div>
              <div className="col-sm-7 col-md-8">
                <h6 className="font-weight-bold">
                  Step 3: Complete The Delivery
                </h6>
                <p>
                  Once you’ve landed, head to baggage claim and retrieve your
                  luggage Travel Box™. Drop off your luggage(s) to our ExtraGain
                  staff right in the arrival airport. No extra trips.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowItWorks;
