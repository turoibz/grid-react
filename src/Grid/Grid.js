import React, {Component} from 'react';
import GridItem from './GridItem';

const URL = "http://prototype.carter-dev.net/fed-test/items.json";

class Grid extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			items: [],
			isLoading : true
		}
	}
	componentDidMount(){
		//No fetch polifyll for older browsers
		fetch(URL)
			.then(response => response.json())
			.then(response => {this.setState({items : response.items})})
			.then(this.setState({isLoading : false}))
	}
	

	render() {
		if(this.state.isLoading){
			return (
				<section className="grid">
					<h1>Loading</h1>
				</section>				
			)
		}
		else{
			return (
				<div className="wrapper">
					<section className="grid">
						{this.state.items.map(item=>
							<GridItem key={item.id} title={item.title} description={item.description} link={item.link} featured={item.featured} documentSize={item.documentSize}/>
						)}
					</section>
					<footer>
						<p>
							Developed by&nbsp;
							<a href="http://arturoibanez.com" target="_blank">Arturo Ibanez</a>
						</p>
					</footer>
				</div>
			);			
		}
	}
}

export default Grid;
