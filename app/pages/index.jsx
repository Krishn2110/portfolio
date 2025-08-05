import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 font-medium font-sans">
        <section id="certificates" className="min-h-screen p-10">
          <h2 className="text-3xl font-bold">Certificates</h2>
        </section>

        <section id="projects" className="min-h-screen p-10 bg-gray-50">
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>

        <section id="contact" className="min-h-screen p-10">
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}
