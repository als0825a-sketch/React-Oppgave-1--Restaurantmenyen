export default function Dish( {item} ) {
  

  return (
    <div className="dish">
        <h2>{item.tittel}</h2>
        <p>Pris:{item.pris}</p>
        <p>Ingredienser:{item.ingredienser}</p>
        <p>{item.kategori}</p>
    </div>
    
  );
}