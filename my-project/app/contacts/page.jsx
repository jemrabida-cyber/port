export default function Contact() {
  return (
    <section className="min-h-screen bg-pink-100 text-black p-10">
      <div className="md:col-span-2"></div>
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4 text-slate-700">You can reach me at:</p>

        <div className="space-y-2">
          <div>Email: <strong>jrabida@gbox.ncf.edu.ph</strong></div>
          <div>Phone: <strong>09090655845</strong></div>
          <div>GitHub: <a href="#" className="underline">github.com/jemcrud</a></div>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Hello!" />
          </div>
          <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded">Send</button>
        <a className="inline-block px-4 py-2 bg-slate-900 text-white rounded" href="/">Home</a>
        </form><br/><br/><br/>

      </div>
    </section>
  );
}