import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className="background-image flex h-full lg:h-[100vh]">
          <div className="flex h-full flex-col p-6 pt-[72px] lg:grid lg:grid-cols-2">
            <div className="relative h-full items-center justify-center p-4 pt-8 text-center text-white">
              <h1>
                <strong className="text-shadow text-5xl italic">
                  Welcome!
                </strong>
              </h1>

              <p className="text-shadow relative m-10 text-3xl sm:text-4xl">
                Dead Drift Flycasters is a team of passionate anglers who travel
                around the US exploring various waterways.
              </p>
            </div>
            <div className="relative m-auto h-full w-full">
              <div className="video-container p-8">
                <iframe
                  className="relative aspect-video h-full w-full max-w-4xl rounded-xl bg-black "
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/808878641?h=722da046f4"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
