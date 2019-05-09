import React,{Component} from 'react'
import Auxiliary from './../../hoc/auxiliary'
import Burger from './../../components/Burger/burger'
import BurgerControls from './../../components/Burger/BurgerControls/burgerControls'

const INGREDIENT_PRICE = {
    meat: 2,
    salad: 0.8,
    cheese: 1.2,
    bacon: 1
}
class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients : {
                meat : 0,
                salad: 0,
                cheese: 0,
                bacon: 0
            },
            totalBill: 4
        }
    }

    addIngredient = (type) => {
            let newIngredients = {
                ...this.state.ingredients
            }
            let newBill = this.state.totalBill;
            newIngredients[type] = newIngredients[type] + 1;
            newBill = newBill + INGREDIENT_PRICE[type];
            this.setState({
                ingredients:newIngredients,
                totalBill:newBill
            })
    } 
    
    removeIngredient = ( type )=> {
        let newIngredients = {
            ...this.state.ingredients
        }
        let newBill  = this.state.totalBill;
        
        newIngredients[type] = newIngredients[type] - 1;
        if(newIngredients[type] < 0 ) newIngredients[type] = 0;
        newBill = newBill - INGREDIENT_PRICE[type];
        this.setState({
            ingredients:newIngredients,
            totalBill:newBill
        });
    }
    render(){
        let disableLessButton = {
            ...this.state.ingredients
        }
        let showOrderButton = true;
        for(let key in disableLessButton){
                disableLessButton[key] = disableLessButton[key] <= 0;
                if(!disableLessButton[key])  {showOrderButton = false};
        }
        return(
            <Auxiliary>
                <Burger burgerIngre = {this.state.ingredients}></Burger>
                <BurgerControls 
                    addIngredient = {this.addIngredient}
                    removeIngredient = {this.removeIngredient}
                    disableLessBtn = {disableLessButton}
                    price = {this.state.totalBill}
                    showOrderButton = {showOrderButton}
                    />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;