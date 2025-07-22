import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItemPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = {
      name: productName,
      description: description,
      price: parseInt(price),
      image: image
    };
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      });
      // Optionally clear form or redirect
      setProductName("");
      setDescription("");
      setPrice("");
      setImage("");
      alert("Item added!");
    } catch (error) {
      alert("Error adding item");
    }
  };

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
                    <button type="button" className="btn btn-primary" onClick={() => navigate("/AfterLogin")}>All items</button>
                  </div>
            </div>
          </div>
        </header>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundColor: "grey"  }}>
            <div className="card" style={{ width: "40rem" }}>
              <form style={{ padding: "2rem" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="ProductName" className="form-label">Product Name</label>
                  <input type="text" className="form-control" id="ProductName" value={productName} onChange={e => setProductName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">Description</label>
                  <textarea className="form-control" id="Description" rows="3" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input type="number" className="form-control" value={price} aria-label="Amount (to the nearest dollar)" onChange={e => setPrice(e.target.value)} required />
                  <span className="input-group-text">.00</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="Image" className="form-label">Image URL</label>
                  <input type="text" className="form-control" id="Image" value={image} onChange={e => setImage(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <div className="card-footer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16" >
                  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                  </svg>
                  <strong> Noticeboard</strong>
              </div>
            </div>
          </div>
    </>
    );
}

export default AddItemPage;