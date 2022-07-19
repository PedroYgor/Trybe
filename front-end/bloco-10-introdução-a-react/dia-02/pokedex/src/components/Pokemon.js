import React, { Component} from "react";

export class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.infoPokemon;
    const altImg = `pokemon ${name}`;
    return(
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={altImg}/>
      </div>
    )
  }
}