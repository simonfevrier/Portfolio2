import MenuItem from '../MenuItem';
<ImageList
    sx={{ width: 500, height: 450 }}
    variant="quilted"
    cols={4}
    rowHeight={121}
>
export default function Menu({ menuName, menuItems }) {
    return (
        <div>
            <h1>{menuName}</h1>
            {
                menuItems.map((item, index) =>
                    <MenuItem key={index} {...item} ></MenuItem>)
                < ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ))
}
</ImageList >
            }
        </div>
    )
}