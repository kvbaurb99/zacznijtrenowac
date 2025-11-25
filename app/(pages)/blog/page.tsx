import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import blogImage from "@/assets/image_one.jpg";
import articlesData from "@/src/articles/articles.json";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  // Mapujemy tylko podstawowe dane do wyświetlenia na liście
  const blogPosts = articlesData.map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    date: article.date,
    slug: article.slug,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-zinc-950 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-zinc-900/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-white mr-2" />
              Blog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Aktualności <span className="text-zinc-400">Treningowe</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Odkryj praktyczne porady, wskazówki i inspiracje od doświadczonych
              trenerów personalnych. Dowiedz się, jak osiągnąć swoje cele
              treningowe.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 pt-10 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blogImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <span className="text-white text-sm font-semibold group-hover:underline inline-flex items-center gap-2">
                      Czytaj więcej
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
