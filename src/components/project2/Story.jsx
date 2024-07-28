import Head from "next/head";

export default function Story() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Webflow Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4 px-4 md:px-10 lg:px-20 flex justify-between items-center border-b border-gray-800">
        <div className="text-lg font-bold">Webflow</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Solutions
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
          <a href="#" className="hover:underline">
            Enterprise
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
        </nav>
        <div className="space-x-4">
          <button className="hover:underline">Log in</button>
          <button className="bg-blue-500 px-4 py-2 rounded text-white">
            Get started — It's free
          </button>
        </div>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2">
            <h1 className="text-5xl font-bold">SEO</h1>
            <h2 className="text-4xl font-light mt-4">
              Keep your SEO controls, under control.
            </h2>
            <p className="mt-4">
              Optimize your website SEO with fine-tuned controls,
              high-performance hosting, and flexible content management tools.
            </p>
            <button className="bg-blue-500 px-4 py-2 rounded mt-4">
              Contact Sales
            </button>
          </section>
          <section>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold">Search Result Preview</h3>
                <div className="mt-2">
                  <a href="#" className="text-blue-400 underline">
                    Lighting techniques for your plant photography | Invictos™
                  </a>
                  <p>
                    Explore Invictos' strategies, and how we are staying ahead.
                    Deep dive on what the future of learning and education will
                    be.
                  </p>
                </div>
                <div className="mt-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded">
                    Post title
                  </span>{" "}
                  | Invictos®
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold">Title tag</h3>
                <div className="mt-2 flex space-x-2">
                  <button className="bg-gray-700 px-4 py-2 rounded">H1</button>
                  <button className="bg-gray-700 px-4 py-2 rounded">H2</button>
                  <button className="bg-gray-700 px-4 py-2 rounded">H3</button>
                  <button className="bg-gray-700 px-4 py-2 rounded">H4</button>
                  <button className="bg-gray-700 px-4 py-2 rounded">H5</button>
                  <button className="bg-gray-700 px-4 py-2 rounded">H6</button>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold">Google Lighthouse</h3>
                <div className="mt-2 flex justify-center items-center">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full">
                    100/100
                  </div>
                </div>
                <p className="mt-2 text-center">SEO</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
