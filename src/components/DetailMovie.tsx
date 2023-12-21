import React, { Component } from "react";
import Layout from "./Layout";
import data from "@/lib/dummy-movie/mock-data.json";

export default class DetailMovie extends Component {
  render() {
    return (
      <Layout>
        <div className="container font-ubuntu">
          <video width="100%" height="100%" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex gap-x-4 bg-[#131722] p-4 text-white">
            <img src={data[2].image} alt="image" className="rounded-lg" />
            <div className="flex flex-col flex-grow   gap-y-10">
              <h2 className="font-semibold">{data[2].title}</h2>
              <p>{data[2].overview}</p>
              <div className="flex flex-col gap-y-4">
                <span>Genre : {data[2].genre}</span>
                <span>Director : {data[2].director}</span>
                <span>
                  Actors : {data[2].actor_1},{data[2].actor_3},{data[2].actor_2}
                </span>
                <span>Country : {data[2].language}</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
