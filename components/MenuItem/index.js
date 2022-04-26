export default function MenuItem({ itemId, itemPrice, itemName, ItemDescription }) {
    return (
        <div className="menu-item" id={`menu-item-${itemId}`}>
            <span>${itemPrice}</span>
            <h2>{itemName}</h2>
            <p>{ItemDescription}</p>
            <button>Add to Cart</button>
        </div>
    );
}