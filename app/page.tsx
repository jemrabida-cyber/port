import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-pink-100 text-black p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-extrabold mb-4">Hello, I'm Jemarie👋</h1>
        <p className="text-lg text--700 mb-6">
          I'm a frontend developer focused on building accessible, responsive web applications.
          I build with Next.js, React Framework and ShadCN TailwindCSS.
        </p>

        <div className="space-x-3">
          <a className="inline-block px-4 py-2 border rounded" href="/about">About me</a>
          <a className="inline-block px-4 py-2 bg-blue-900 text-white rounded" href="/hobbies">Hobbies</a>
          <a className="inline-block px-4 py-2 bg-blue-900 text-white rounded" href="/education">Education</a>
          <a className="inline-block px-4 py-2 bg-blue-900 text-white rounded" href="/contacts">Contact</a>
        </div>
      </div>

      <div className="flex justify-center">
        <Image src="/jem.jpg" alt="Jemarie profile picture" width={200} height={200} className="rounded-xl shadow"/>
      </div>
    </section>
  );
}