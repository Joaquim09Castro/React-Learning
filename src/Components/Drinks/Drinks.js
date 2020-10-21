import React, { Component } from 'react';
import style from './Drinks.module.css';

import { fetchDrinks } from '../../Service';

import Main from '../Main/Main';
import Title from '../Title/Title';
import CardList from './CardList/CardList';
import Card from './DrinkCards/Card';
import DrinkSpecs from './DrinkSpecs/DrinkSpecs';

const { mainGrid } = style;

export default class Drinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "drinks": [],
      "drinkCards": [],
      "selectedDrink": {}
    };
  }

  async componentDidMount() {
    await fetchDrinks()
      .then(res => this.setState({'drinks': res}) );

    const { drinks } = this.state;
    if (drinks.length > 0) {
      const cards = await drinks.map( (drink,idx) => {  // eslint-disable-line
        if ( idx < 20) {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: img
          } = drink;
          return <Card key={id} name={name} img={img} />;
        } else { }
      })

      this.setState( { "drinkCards": cards } );
    }
  }
  
  render() {
    const { drinkCards } = this.state;
    return (
      <Main className={mainGrid}>
        <Title>Drinks</Title>
        <CardList>
          { drinkCards }
        </CardList>
        <DrinkSpecs />
      </Main>
    )
  }
}
