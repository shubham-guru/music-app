import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080/auth0",
 realm: "MusicTape-keycloak-auth",
 clientId: "MusicTape-auth",
});

export default keycloak;