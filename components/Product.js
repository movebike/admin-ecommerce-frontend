import React from 'react'

export default function Product () {
  return (
    <article className='product-card'>
      <header className='product-card__header'>
        <img src='/moto-picture.svg' alt='' className='product-card__header-img' />
        <section className='product-card__header-selected_days'>
          <button>+</button>
          <p>10 </p>
          <span>Days</span>
          <button>-</button>
        </section>
      </header>
      <section className='product-card__body'>
        <div className='product-card__body-detail'>
          <p><img src='/stock-icon.svg' alt='' /> 5 in stock</p>
          <p><img src='/star-icon.svg' alt='' /> 5.0</p>
        </div>
        <div className='product-card__body-description'>
          <div className='description'>
            <h2>Suzuki Lets 125</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus non quam at dapibus. Fusce eu quam in lacus commodo sollicitudin. Morbi suscipit nunc lorem ipsum dolor sit.</p>
          </div>
          <div className='technical'>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>LAST RODE <br /> <span>2.5 Km</span> </label>
            </div>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>SPEED <br /> <span>2.5 Km/h</span></label>
            </div>
            <div className='option'>
              <img src='/point-icon.svg' alt='' />
              <label htmlFor=''>LIMIT <br /> <span>95 Kg</span></label>
            </div>
          </div>
        </div>

      </section>
      <section className='product-card__footer'>
        <div className='price'> <p>$80 USD</p> <small>per day</small> </div>
        <button>Add to cart <img src='/cart-icon.svg' alt='' /> </button>
      </section>
    </article>
  )
}
