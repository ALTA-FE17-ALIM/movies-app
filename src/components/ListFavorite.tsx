import { Component } from "react";
import data from "@/lib/dummy-movie/mock-data.json";
import Layout from "./Layout";

export default class ListFavorite extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="grid grid-cols-4 py-10">
            <div className="bg-slate-800 space-y-3 p-4 rounded-xl">
              <img src={data[2].image} className="w-full" alt="image" />
              <div className="flex flex-col gap-y-2 text-[#E8EAED]  text-center">
                <h4 className="whitespace-nowrap overflow-clip text-lg font-semibold tracking-tight">
                  {data[2].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
