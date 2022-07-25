import React from "react";
import "./ListItem.css";

function ListItem({ item, onChange, isChecked }) {
  return (
    <div className="list-item">
      <input
        id={item.id}
        value={item.id}
        checked={isChecked}
        type="checkbox"
        onChange={onChange}
      />
      <span className="span name">{item.name}</span>
      <span className="span address">{item.address}</span>
      <span className="span phone">{item.phone}</span>
      <span className="span email">{item.email}</span>
    </div>
  );
}

export default ListItem;
