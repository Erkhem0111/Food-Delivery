export const FoodGridSkeleton = () => {
  return (
    <section className="mb-12 animate-pulse px-22 py-8">
      <div className="h-6 w-40 bg-gray-600 rounded" />

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-700 rounded-xl" />
        ))}
      </div>
    </section>
  );
};
