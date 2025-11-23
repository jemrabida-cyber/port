export default function About() {
  return (
      <section className="min-h-screen bg-pink-100 text-black p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-black font-bold mb-2">About Me</h2>
          <p className="mb-4 text-black-700">
          I'm Jemarie Rabida. I'm beginner creating web that are performant,
          accessible, and delightful to use. I enjoy learning new tools and improving
          my workflow.
        </p>

        <h3 className="text-xl font-semibold mt-2">Skills</h3>
        <ul className="list-disc ml-6 mt-2 text-black-700">
          <li>Hardworking</li>
          <li>Flexibility</li>
          <li>JavaScript / TypeScript</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
        </ul>
        <div className="space-x-3">
          <a className="inline-block px-4 py-2 bg-slate-900 text-white rounded" href="/">Home</a>
        </div>
        </div>
      </section>
  );
}