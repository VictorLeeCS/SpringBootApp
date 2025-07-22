import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AfterLogin() {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch items", err);
      alert("Problem with retrieving items!");
    }
  };

  useEffect(() => {fetchItems();}, []);

  // Delete item
  const handleDelete = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`, { method: "DELETE" });
      fetchItems();
    } catch (err) {
      console.error("Failed to delete item", err);
    }
  };

  const ASingleItem = (props) => {
      return (
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={props.image} alt="Card image cap" style={{ width: "100%", height: "200px", objectFit: "contain" }}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(props.id)} >Delete</button>
                </div>
                <small className="text-muted">{"$" + props.price}</small>
              </div>
            </div>
          </div>
        </div>
      );
  }

  return (
      <>
          <header>
            <div className="navbar navbar-dark bg-dark box-shadow">
              <div className="container d-flex justify-content-between">
                <a href="#" className="navbar-brand d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                    <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                  </svg>
                  <strong>Noticeboard</strong>
                </a>
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-primary" onClick={() => navigate("/additem")}>Add item</button>
                    </div>
              </div>
            </div>
          </header>
          <div className="album py-5">
              <div className="container">
                <div className="row">
                    {items.map((item) =>  <ASingleItem id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />)}
                </div>
              </div>
          </div>
      </>
  );

}


export default AfterLogin;