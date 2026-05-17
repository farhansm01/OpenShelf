const categories = ["All", "Story", "Tech", "Science"];

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {/* Mobile - horizontal pills */}
      <div className="flex md:hidden gap-2 overflow-x-auto pb-2 mb-2 w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-primary text-primary-content"
                : "bg-base-200 hover:bg-base-300 text-neutral"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop - vertical sidebar */}
      <div className="hidden md:block w-56 shrink-0">
        <h3 className="font-bold text-neutral mb-4 text-sm uppercase tracking-widest">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-content"
                    : "bg-base-200 hover:bg-base-300 text-neutral"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategorySidebar;
