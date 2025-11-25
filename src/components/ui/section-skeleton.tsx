export default function SectionSkeleton() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="h-6 w-32 bg-zinc-800 rounded-full mb-4 animate-pulse" />
          <div className="h-12 w-80 bg-zinc-800 rounded-lg mb-6 animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-zinc-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
