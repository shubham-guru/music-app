import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

const NavBar = () => {

  const { keycloak, initialized } = useKeycloak();


  return (
    <div style={{backgroundColor: '#eee'}} className="d-flex align-items-center justify-content-center"> 
        <div className='m-2'>
            <a href="/" className='m-5 text-decoration-none text-secondary'>Home</a>
            <a href="/secured" className='m-5 text-decoration-none text-secondary'>Music App</a>

            {!keycloak.authenticated && (
          <button
            type="button"
            className="btn btn-primary"
            // onClick={() => keycloak.login()}
          >
            Login
          </button>
        )}

        {!!keycloak.authenticated && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => keycloak.logout()}
          >
            Logout
          </button>
        )}
        </div>
    </div>
  )
}

export default NavBar