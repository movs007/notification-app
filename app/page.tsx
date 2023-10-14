"use client";
import Notification from "@/components/Notification";

export default function Home() {
  return (
    <>
      <main className="bg-white w-full px-4 py-6 lg:w-2/4 lg:rounded-lg lg:mt-16">
        <section>
          <Notification />
        </section>
      </main>
    </>
  );
}
