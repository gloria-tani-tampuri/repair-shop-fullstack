import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center min-h-screen" >
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl">Tani's Computer <br/> Repair Shop</h1>
          <address>
            555 Parko Estate <br/>
            Tanis, CA 12345
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:233209102541" className="hover:underline">020 910 2541</Link>
        </div>
      </main>
    </div>
  );
}