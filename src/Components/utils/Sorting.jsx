import { useState } from "react";

const Sorting = ({ onSortChange, onOrderChange }) => {
  const [sorting, setSorting] = useState("");
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSorting(value);
    onSortChange(value);
  };

  const handleSorting = (event) => {
    const value = event.target.value;
    setOrder(value);
    onOrderChange(value);
  };

  return (
    <section className="sorting-list">
      <fieldset>
        <legend>Sort By</legend>
        <section className="sorting-options">
          <input
            type="radio"
            id="sort-by-date"
            name="sort-by-date"
            value="date"
            checked={sorting === "date"}
            onChange={handleChange}
          />
          Date
          <br />
          <input
            type="radio"
            name="sort-by-votes"
            id="sort-by-votes"
            value="votes"
            checked={sorting === "votes"}
            onChange={handleChange}
          />
          Votes
          <br />
          <input
            type="radio"
            name="sort-by-comments"
            id="sort-by-comments"
            value="comments"
            checked={sorting === "comments"}
            onChange={handleChange}
          />
          Comments
        </section>
        <section className="order-options">
          <input
            type="radio"
            id="ascending"
            name="sort-by-ascending"
            value="asc"
            checked={order === "asc"}
            onChange={handleSorting}
          />
          Ascending
          <br />
          <input
            type="radio"
            name="sort-by-descending"
            id="sort-by-descending"
            value="desc"
            checked={order === "desc"}
            onChange={handleSorting}
          />
          Descending
        </section>
      </fieldset>
    </section>
  );
};

export default Sorting;
