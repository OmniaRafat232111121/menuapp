import React from 'react'
const Dummy_meals=[
    {
        id:1,
        name:'dessert',
        price:22.09,
        description:'Good quality and delisous taste'
    },
    {
        id:2,
        name:'dessert',
        price:22.09,
        description:'Good quality and delisous taste'
    },
    {
        id:3,
        name:'dessert',
        price:22.09,
        description:'Good quality and delisous taste'
    },{
        id:4,
        name:'dessert',
        price:22.09,
        description:'Good quality and delisous taste'
    },
]
const AvailableMeals = () => {
    const mealList=Dummy_meals.map((meal)=>{
        return(
            <li>{meal.name}</li>
        )
    })
  return (
    <section>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <div className='box '>
                        <ul>
                            {mealList}
                        </ul>

                    </div>

                </div>

            </div>

        </div>

      
    </section>
  )
}

export default AvailableMeals
