import Menu from '../Menu';

export default function MenuApp({ data }) {
    return (
        <div className="App">
            {data.map((item, index) => <Menu {...item} key={index} ></Menu>)}
        </div>
    )
}
