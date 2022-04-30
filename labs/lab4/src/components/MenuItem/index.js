export default function MenuItem({ itemId, itemPrice, itemName, ItemDescription }) {
    return (
        <View style={styles.container}>
            <Text style={repStyles.reps}>{count}</Text>
            <Button
                buttonStyle={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
        <div className="menu-item" id={`menu-item-${itemId}`}>
            <span>${itemPrice}</span>
            <h2>{itemName}</h2>
            <p>{ItemDescription}</p>
            <button>Add to Cart</button>
        </div>
    </View>
    );
}