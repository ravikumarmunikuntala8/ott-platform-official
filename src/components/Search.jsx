function Search() {
  return (
    <div className="search-bar mt-8 lg:mt-14 mb-8">
      <h2 className="mb-6 text-xl lg:text-3xl font-bold">
        Choose the OTT Platform
      </h2>
      <input
        type="text"
        placeholder="Search..."
        className="border border-1 block w-full indent-4 leading-10"
        style={{ borderRadius: "0.5rem" }}
      />
    </div>
  );
}

export default Search;
