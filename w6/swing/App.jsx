import LikeButton from './LikeButton.jsx'

class Post extends React.Component {
   render() {
      return (<div>
         <h1>{this.props.title}</h1>
         <div>{this.props.content}</div>
         <LikeButton></LikeButton>
      </div>)
   }
}
let contentArray = [
   { title: "Favorite Television Show", content: "My favorite television show is Euphoria." }
	{ title: "Favorite Movie", content: "My favorite movie is the Batman." }
	{ title: "My favorite color", content: "My favorite color is red." }
]
// React Functional Component
export default class App extends React.Component {
   render() {
      let element = contentArray.map(post =>
         <Post title={post.title}
            content={post.content}></Post>)
      return element;
   } //let element = React.createElement("div", {}, "Hello World!")
}
document.body.style.backgroundColor = "beige";
