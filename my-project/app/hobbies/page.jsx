export default function Hobbies() {
  return (
    <section className="min-h-screen bg-pink-100 text-black p-10">
      <div className="md:col-span-2"></div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Hobbies</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>Pet lover</li>
          <li>Play Music & Instrument</li>
          <li>Photography</li>
          <li>Travel & Food</li>
          <li>Reading Bible</li>
          <li>Coding projects</li>
        </ul>
        <a className="inline-block px-4 py-2 bg-slate-900 text-white rounded" href="/">Home</a>
      </div>
    </section>
  );
}