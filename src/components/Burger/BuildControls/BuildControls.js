import React from 'react';

import classes from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'}
];

const buildControls = (props) =>{

    return (
        <div className={classes.BuildControls}>
            {/* {controls.forEach(cont =>
                <BuildControl label={cont.label}/>
            )} */}
            {controls.map(ctrl => 
                <BuildControl key={ctrl.label} label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabledInfo[ctrl.type]}
                />
            )}
        </div>
    );
}

export default  buildControls;