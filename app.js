// TODO
// Create a Grocery List
// var GroceryList = () => (
// 	<ul>
// 		<li>Bread</li>
// 		<li>Milk</li>
// 	</ul>
// );

// var GroceryList = () => (
// 	<ul>
// 		<Bread />
// 		<Milk />
// 	</ul>
// );

// var Bread = () => (
// 	<li>Bread</li>
// );

// var Milk = () => (
// 	<li>Milk</li>
// );

// var GroceryListItem = (props) => (
// 	<ul>
// 		<li>{props.groceryItems[0]}</li>
// 		<li>{props.groceryItems[1]}</li>
// 	</ul>
// );

// var GroceryList = () => (


// 		<GroceryListItem groceryItems={['Bread'],['Milk']}>
// );
 
// ReactDOM.render(<GroceryList />, document.getElementById('app'));

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['Bread', 'Milk']}/> 
//   </div>
// );

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		return (
			<li style = {style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todo}</li>
		);
	}
}

var GroceryList = (props) => (
	<ul>
		{
			props.grocery.map(todo => <GroceryListItem todo={todo}/>)
		}
	</ul>
)

ReactDOM.render(<GroceryList grocery={['Bread', 'Milk']}/>, document.getElementById('app'));




















