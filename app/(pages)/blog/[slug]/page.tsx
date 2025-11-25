import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  ArrowRight,
  List,
} from "lucide-react";
import blogImage from "@/assets/image_one.jpg";
import articlesData from "@/src/articles/articles.json";

// Funkcja do pobierania artykułu po slug
const getArticleBySlug = (slug: string) => {
  return articlesData.find((article) => article.slug === slug);
};

// Funkcja do pobierania powiązanych artykułów (wykluczając aktualny)
const getRelatedArticles = (currentSlug: string, limit: number = 3) => {
  return articlesData
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit)
    .map((article) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      date: article.date,
    }));
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Funkcja do generowania slugów z nagłówków
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Komponent spisu treści
function TableOfContents({ sections }: { sections: any[] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="mb-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <List className="w-5 h-5 text-white" />
        <span className="text-xl font-bold text-white">Spis treści</span>
      </div>
      <nav className="space-y-2">
        {sections.map((section, index) => {
          const slug = generateSlug(section.heading);
          return (
            <a
              key={index}
              href={`#${slug}`}
              className="block text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-zinc-800/50 group"
            >
              <span className="flex items-start gap-3">
                <span className="text-zinc-500 group-hover:text-white text-sm font-mono shrink-0 mt-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="leading-relaxed">{section.heading}</span>
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default async function BlogSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // Jeśli artykuł nie istnieje, zwróć 404
  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artykuł nie znaleziony</h1>
          <Link
            href="/blog"
            className="text-zinc-400 hover:text-white underline"
          >
            Wróć do bloga
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(slug);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={blogImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm mb-4">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-zinc-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} czytania</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="prose prose-invert prose-lg max-w-none">
                {/* Intro */}

                {/* Table of Contents */}
                <TableOfContents sections={article.content.sections} />
                <div className="mb-12 p-6 bg-zinc-900/50 border-l-4 border-white rounded-r-lg article-intro">
                  <p
                    className="text-xl text-zinc-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content.intro }}
                  />
                </div>
                {/* Content Sections */}
                {article.content.sections.map((section: any, index: number) => {
                  const sectionSlug = generateSlug(section.heading);
                  return (
                    <div
                      key={index}
                      className="mb-12 scroll-mt-24"
                      id={sectionSlug}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-12 first:mt-0 group">
                        <a
                          href={`#${sectionSlug}`}
                          className="flex items-center gap-3 no-underline hover:underline"
                        >
                          <span>{section.heading}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-zinc-600 text-2xl transition-opacity">
                            #
                          </span>
                        </a>
                      </h2>
                      <div
                        className="text-zinc-300 leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                  );
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Articles */}
                <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Powiązane artykuły
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold group-hover:text-zinc-300 transition-colors mb-2 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-zinc-500 text-sm">
                              {formatDate(post.date)}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Related Articles */}
                <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Przeczytaj także
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h4 className="text-white font-semibold group-hover:text-zinc-300 transition-colors mb-2 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-zinc-500 text-sm">
                              {formatDate(post.date)}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-white mr-2" />
                  Najczęściej zadawane pytania
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Masz pytania?
                </h2>
                <p className="text-zinc-400">
                  Oto odpowiedzi na najczęstsze pytania dotyczące tego tematu
                </p>
              </div>

              <div className="space-y-4">
                {article.faq.map((faq: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                  >
                    <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-zinc-300 ml-9 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
