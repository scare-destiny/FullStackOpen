const Search = ({ searchInput, handleSearchChange }) => {
  return (
    <>
			search<input
				value={searchInput}
				onChange={handleSearchChange}
				placeholder='enter country'
			/>
    </>
  );
};
export default Search;
