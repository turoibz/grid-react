import React, {Component} from 'react';


class GridItem extends Component {
	render() {
		return (
			//Property featured is passed as string in json
			//Conditional class if item is featured &&|| document
			<article className={"grid__item " + (this.props.featured === "true" ? "featured " : "") + (this.props.documentSize ? "download " : "")}>
				<a className="grid__item_link" href={this.props.link}>
					<h2 className="grid__item_title">{this.props.title}</h2>
					{/*Render desc if has desc property*/}
					{this.props.description &&
						<p className="grid__item_desc">{this.props.description}</p>}
					{/*Render doco size if has size property*/}
					{this.props.documentSize &&
						<span role="presentation" className="icon-document grid__item_size">{"PDF "+ this.props.documentSize}</span>}
					<span role="presentation" className="icon-arrow grid__item_more"></span>
				</a>
			</article>
		);
	}
}

export default GridItem;
