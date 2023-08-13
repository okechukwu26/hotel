import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";

class FeatureRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, FeaturedRooms: rooms } = this.context;
    

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="Featured-rooms">
        <Title title="Featured Room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeatureRooms;
