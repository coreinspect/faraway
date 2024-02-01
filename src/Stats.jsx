/* eslint-disable react/prop-types */
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Items to your Packing List</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPackedPercent === 100
          ? "You got everything! Good to go!!! 🎉"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${numPackedPercent}%)`}
      </em>
    </footer>
  );
}
export default Stats;
