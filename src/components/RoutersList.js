import React from 'react';

const routes = [
  {
    city: 'Tp Hồ Chí Minh',
    image: 'https://link-to-image-1', // Thay bằng đường dẫn ảnh thực tế
    trips: [
      { destination: 'Đà Lạt', distance: '305km', duration: '8 giờ', date: '13/10/2024', price: '290.000đ' },
      { destination: 'Cần Thơ', distance: '166km', duration: '3 giờ 12 phút', date: '13/10/2024', price: '165.000đ' },
      { destination: 'Long Xuyên', distance: '203km', duration: '5 giờ', date: '13/10/2024', price: '190.000đ' }
    ]
  },
  {
    city: 'Đà Lạt',
    image: 'https://link-to-image-2',
    trips: [
      { destination: 'TP. Hồ Chí Minh', distance: '310km', duration: '8 giờ', date: '13/10/2024', price: '410.000đ' },
      { destination: 'Đà Nẵng', distance: '757km', duration: '17 giờ', date: '13/10/2024', price: '410.000đ' },
      { destination: 'Cần Thơ', distance: '457km', duration: '11 giờ', date: '13/10/2024', price: '435.000đ' }
    ]
  },
  {
    city: 'Đà Nẵng',
    image: 'https://link-to-image-3',
    trips: [
      { destination: 'Đà Lạt', distance: '666km', duration: '17 giờ', date: '13/10/2024', price: '410.000đ' },
      { destination: 'BX An Sương', distance: '966km', duration: '20 giờ', date: '13/10/2024', price: '410.000đ' },
      { destination: 'Nha Trang', distance: '528km', duration: '9 giờ 25 phút', date: '13/10/2024', price: '300.000đ' }
    ]
  }
];

const RoutesList = () => {
  return (
    <div className="routes-list">
      <h2>TUYẾN PHỔ BIẾN</h2>
      <p>Được khách hàng tin tưởng và lựa chọn</p>
      <div className="cards">
        {routes.map((route, index) => (
          <div className="card" key={index}>
            <div className="card-header" style={{ backgroundImage: `url(${route.image})` }}>
              <h3>Tuyến xe từ {route.city}</h3>
            </div>
            <div className="card-body">
              {route.trips.map((trip, idx) => (
                <div className="trip-info" key={idx}>
                  <div className="trip-destination">{trip.destination}</div>
                  <div className="trip-details">
                    {trip.distance} - {trip.duration} - {trip.date}
                  </div>
                  <div className="trip-price">{trip.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesList;
