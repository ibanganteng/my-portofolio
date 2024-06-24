export default function Contact() {
  return (
    <section id="contact" className="bg-[#2E2E5C] py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Contact</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Send</button>
        </form>
      </div>
    </section>
  );
}
