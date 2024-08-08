import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-full overflow-x-hidden">
        <Hero />

        <AboutMe />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
