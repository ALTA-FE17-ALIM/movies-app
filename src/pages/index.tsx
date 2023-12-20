import { Component } from "react";
import Layout from "../components/Layout";
import NewRelease from "@/components/NewRelease";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <section id="new-release">
          <NewRelease />
        </section>
      </Layout>
    );
  }
}
