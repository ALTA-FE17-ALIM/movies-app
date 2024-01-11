import Layout from "../components/Layout";
import NewRelease from "@/components/NewRelease";
import NowPlaying from "@/components/NowPlaying";

const index = () => {
  return (
    <Layout>
      <section id="new-release">
        <NewRelease />
      </section>
      <section id="now-playing" className="py-16">
        <NowPlaying />
      </section>
    </Layout>
  );
};

export default index;
