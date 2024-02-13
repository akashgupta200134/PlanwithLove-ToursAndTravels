import Card from './Card';

function Tours({ tours, removeTour }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan With Love</h2>
      </div>

      <div className='cards'>
        {Array.isArray(tours) &&
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))}
      </div>
    </div>
  );
}

export default Tours;
