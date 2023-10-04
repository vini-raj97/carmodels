//template module
function carTemplate({ id, make, model, year, fuelType, engine, horsepower,
  transmission, price, image, ...car }) {

  const imageWidth = '600px';
  const imageHeight = '350px';


  const template = `
    <aside class="car">
      <div class="car-info">
        <img src="${image}" alt="${model}" style="width: ${imageWidth}; height: ${imageHeight}" />
        <div class="description">
          <h2 class="font-semibold">${make} ${model}</h2>
          <ul>
            <li>ID: ${id}</li>
            <li>Year: ${year}</li>
            <li>Fuel Type: ${fuelType}</li>
            <li>Engine: ${engine}</li>
            <li>HorsePower: ${horsepower}</li>
            <li>Transmission: ${transmission} years</li>
            <li>Price: $${price}</li>
          </ul>
        </div>
      </div>
    </aside>
    `;

  const property = document.createRange().createContextualFragment(template).children[0]

  return property

}

export { carTemplate }