import PackingItem from "./PackingItem";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
