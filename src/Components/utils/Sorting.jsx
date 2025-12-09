import { useState } from "react";

const Sorting = ({ onSortChange, onOrderChange }) => {
  const handleSelect = (sort, order) => {
    onSortChange(sort);
    onOrderChange(order);
  };

  return (
    <div className="sorting-dropdown">
      <button className="dropbtn">Sort By ↓</button>
      <div className="dropdown-content">
        <button
          onClick={() => handleSelect("votes", "desc")}
          className="sorting-button"
        >
          Votes High To Low
        </button>
        <button
          onClick={() => handleSelect("votes", "asc")}
          className="sorting-button"
        >
          Votes Low To High
        </button>

        <button
          onClick={() => handleSelect("date", "desc")}
          className="sorting-button"
        >
          Date Newest To Oldest
        </button>
        <button
          onClick={() => handleSelect("date", "asc")}
          className="sorting-button"
        >
          Date Oldest To Newest
        </button>

        <button
          onClick={() => handleSelect("comments", "desc")}
          className="sorting-button"
        >
          Comments High To Low
        </button>
        <button
          onClick={() => handleSelect("comments", "asc")}
          className="sorting-button"
        >
          Comments Low To High
        </button>
      </div>
    </div>
  );
};

// return (
//   <section className="sorting-list">
//     <fieldset>
//       <legend>Sort By</legend>
//       <section className="sorting-options">
//         <input
//           type="radio"
//           id="sort-by-date"
//           name="sort-by-date"
//           value="date"
//           checked={sorting === "date"}
//           onChange={handleChange}
//         />
//         Date
//         <br />
//         <input
//           type="radio"
//           name="sort-by-votes"
//           id="sort-by-votes"
//           value="votes"
//           checked={sorting === "votes"}
//           onChange={handleChange}
//         />
//         Votes
//         <br />
//         <input
//           type="radio"
//           name="sort-by-comments"
//           id="sort-by-comments"
//           value="comments"
//           checked={sorting === "comments"}
//           onChange={handleChange}
//         />
//         Comments
//       </section>
//       <section className="order-options">
//         <input
//           type="radio"
//           id="ascending"
//           name="sort-by-ascending"
//           value="asc"
//           checked={order === "asc"}
//           onChange={handleSorting}
//         />
//         Ascending
//         <br />
//         <input
//           type="radio"
//           name="sort-by-descending"
//           id="sort-by-descending"
//           value="desc"
//           checked={order === "desc"}
//           onChange={handleSorting}
//         />
//         Descending
//       </section>
//     </fieldset>
//   </section>
// );

export default Sorting;
