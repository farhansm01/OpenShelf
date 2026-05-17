const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search books by title..."
        className="input input-bordered w-full bg-base-100 text-neutral"
      />
    </div>
  );
};

export default SearchBar;
