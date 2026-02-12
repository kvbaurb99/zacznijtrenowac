"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const TRAINERS = [
  {
    name: "Darek Sklarczyk",
    phone: "600 851 174",
    email: "darektrener@icloud.com",
  },
  {
    name: "Asia Rozmus-Sklarczyk",
    phone: "518 989 721",
    email: "asiatrener@icloud.com",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Symulacja wysyłania
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-14 bg-black text-white relative overflow-hidden"
    >
      {/* Ozdobne tło - Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Radial Gradienty */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/2 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/50 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-white mr-2" />
            Kontakt
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Rozpocznij współpracę
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
            Masz pytania? Chcesz umówić się na trening? Wypełnij formularz lub
            skontaktuj się bezpośrednio z nami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto">
          {/* Lewa kolumna - Dane kontaktowe */}
          <div className="space-y-8">
            <div className="prose prose-invert">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Bezpośredni kontakt</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
                Wybierz trenera, z którym chcesz pracować, i zadzwoń lub napisz
                bezpośrednio. Jesteśmy dostępni, aby odpowiedzieć na Twoje
                pytania i pomóc Ci dobrać odpowiedni plan treningowy.
              </p>
            </div>

            <div className="grid gap-6">
              {TRAINERS.map((trainer) => (
                <div
                  key={trainer.name}
                  className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
                >
                  <h4 className="text-lg md:text-xl font-bold text-white mb-6">
                    {trainer.name}
                  </h4>

                  <div className="space-y-4">
                    <a
                      href={`tel:${trainer.phone.replace(/\s/g, "")}`}
                      className="flex items-center group text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mr-4 border border-zinc-800 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{trainer.phone}</span>
                    </a>

                    <a
                      href={`mailto:${trainer.email}`}
                      className="flex items-center group text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mr-4 border border-zinc-800 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{trainer.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prawa kolumna - Formularz */}
          <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm h-fit">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Napisz do nas</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Imię
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                    placeholder="Twoje imię"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                    placeholder="Numer telefonu"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                  placeholder="twoj@email.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-400"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="Jak możemy Ci pomóc?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? (
                  "Wysyłanie..."
                ) : (
                  <>
                    Wyślij wiadomość
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
