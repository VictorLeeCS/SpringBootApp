import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
   e.preventDefault();
   const credentials = {
     userId: username,
     password: password
   };
   try {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(credentials)
     });

     if (response.ok) {
       setUsername("");
       setPassword("");
       alert("Login successful!");
       navigate("/AfterLogin");
     } else if (response.status === 401) {
       alert("Invalid username or password");
     } else {
       alert("Login failed");
     }
   } catch (error) {
     alert("Network error");
   }
 };


    const handleNewAccount = async (e) => {
        e.preventDefault();
        const credentials = {
          userId: username,
          password: password
        };
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          });
          // Optionally clear form or redirect
            if (response.status === 409) {
              alert("Username already exists");
            } else if (response.ok) {
              setUsername("");
              setPassword("");
              alert("Registration successful!");
            } else {
              alert("Registration failed");
            }
          } catch (error) {
            alert("Network error");
          }
      };


    return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundColor: "grey"  }}>
            <div className="card" style={{ width: "40rem" }}>
                <div className="container" style={{ padding: "1rem" }}>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Login</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Create new account</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <form style={{ padding: "2rem" }} onSubmit={handleLogin}>
                            <div className="mb-3">
                              <label htmlFor="Username" className="form-label">Username</label>
                              <input type="text" className="form-control" id="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="Password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <form style={{ padding: "2rem" }} onSubmit={handleNewAccount}>
                            <div className="mb-3">
                              <label htmlFor="Username" className="form-label">New Username</label>
                              <input type="text" className="form-control" id="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="Password" className="form-label">New Password</label>
                              <input type="password" className="form-control" id="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                      </form>

                    </div>
                  </div>
                </div>
            </div>
          </div>
        );
}


export default Login;