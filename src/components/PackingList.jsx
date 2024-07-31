import PackingItem from "./PackingItem";

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
