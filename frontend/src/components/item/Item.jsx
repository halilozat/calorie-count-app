import React from 'react'

const Item = ({ name, calories, carbs, serve, cholesterol, fat_saturated, fat_total, fiber, potassium, protein, sodium, sugar }) => {
    return (
        <div className='item'>
            <div className='item-top'>
                <div className='item-head'>
                    <h4>{name}</h4>
                </div>

                <div className='item-content'>

                    <div className='item-info'>
                        <span className='item-info-a'>{calories}</span>
                        <span className='item-info-b'>Calories</span>
                    </div>

                    <div className='item-info'>
                        <span className='item-info-a'>{carbs}</span>
                        <span className='item-info-b'>Carbs</span>
                    </div>

                    <div className='item-info'>
                        <span className='item-info-a'>{serve}</span>
                        <span className='item-info-b'>Serve (grams)</span>
                    </div>

                </div>
            </div>

            <div className='item-bottom'>

                <div className='item-row'>
                    <div className='item-row-a'>Per serving</div>
                    <div className='item-row-b'>{serve}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Calories</div>
                    <div className='item-row-b'>{calories}</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Carbs</div>
                    <div className='item-row-b'>{carbs}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Cholesterol</div>
                    <div className='item-row-b'>{cholesterol}mg</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Saturated fats</div>
                    <div className='item-row-b'>{fat_saturated}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Total fats</div>
                    <div className='item-row-b'>{fat_total}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Fiber</div>
                    <div className='item-row-b'>{fiber}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Protein</div>
                    <div className='item-row-b'>{protein}g</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Potassium</div>
                    <div className='item-row-b'>{potassium}mg</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Sodium</div>
                    <div className='item-row-b'>{sodium}mg</div>
                </div>

                <div className='item-row'>
                    <div className='item-row-a'>Sugar</div>
                    <div className='item-row-b'>{sugar}g</div>
                </div>

            </div>
        </div>
    )
}

export default Item
