const Stats = ({ items }) => {
  const numItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;

  const percentagePacked = Math.round((numOfPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      🧳
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {percentagePacked} %
      </em>
    </footer>
  );
};

export default Stats;
