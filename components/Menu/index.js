import MenuItem from '../MenuItem';

export default function Menu({ menuName, menuItems }) {
    return (
        <div>
            <h1>{menuName}</h1>
            {
                menuItems.map((item, index) =>
                    <MenuItem key={index} {...item} ></MenuItem>)
            }
        </div>
    )
}