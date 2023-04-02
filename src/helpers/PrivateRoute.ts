import { useKeycloak } from "@react-keycloak/web";

type myProps = {
    children: JSX.Element;
}
const PrivateRoute:React.FC<myProps> = ({ children }) => {

 const { keycloak } = useKeycloak();
 const isLoggedIn = keycloak.authenticated;
 return isLoggedIn ? children : null;
 
};

export default PrivateRoute;