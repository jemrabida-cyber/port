export default function Education() {
  return (
    <section className="min-h-screen bg-pink-100 text-black p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
    
    <div>
      <h2 className="text-black font-bold mb-2">Education</h2>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="text-slate-600">Naga College Foundation (2024 - present)</p>
          <p className="mt-2 text-slate-700">Focus on Web Development, Algorithms, and Systems.</p>
        </div>

        <div>
          <h3 className="font-semibold">High School Diploma</h3>
          <p className="text-slate-600">Tinago National High School (2018 - 2024)</p>
        </div>
          <a className="inline-block px-4 py-2 bg-slate-900 text-white rounded" href="/">Home</a>
      </div>
    </div>
    </div>
  </section>
  );
}