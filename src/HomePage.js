import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      image: 'greeksalad.jpg',
      description: 'Fresh and vibrant salad made with crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and creamy feta cheese'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$14.99',
      image: 'bruschetta.jpg',
      description: 'Grilled slices of crusty bread topped with a flavorful mix of ripe tomatoes, garlic, fresh basil, and olive oil.'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$6.99',
      image: 'lemondessert.jpg',
      description: 'A refreshing and zesty lemon dessert with a perfect balance of sweet and tangy flavors. Smooth, creamy texture'
    }
  ];

  return (
    <section className="Specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <a href="#menu" className="btn btn-secondary btn-sm">Online Menu</a>
      </div>
      <div className="specials-container">
        {specials.map(special => (
          <div key={special.id} className="special-card">
            <div className="special-image">
              <img src={special.image} alt={special.name} />
            </div>
            <div className="special-content">
              <div className="special-header">
                <h3>{special.name}</h3>
                <span className="price">{special.price}</span>
              </div>
              <p className="description">{special.description}</p>
              <a href="#order" className="order-link">Order a delivery</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomersSay() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Amazing food and great service! The Mediterranean flavors are authentic and delicious. Highly recommend the Greek salad!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      review: 'Little Lemon has become our go-to restaurant. The bruschetta is incredible and the atmosphere is perfect for any occasion.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      review: 'The lemon dessert is absolutely divine! Fresh ingredients and exceptional service make this place outstanding.'
    }
  ];

  return (
    <section className="CustomersSay">
      <h2>Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <article key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p className="review">"{testimonial.review}"</p>
            <p className="customer-name">- {testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Chicago() {
  return (
    <section className="Chicago">
      <div className="chicago-container">
        <div className="chicago-content">
          <h2>Little Lemon Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="chicago-image">
          <img src="chicago.jpg" alt="Little Lemon Chicago" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
