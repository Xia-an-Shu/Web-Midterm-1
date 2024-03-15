import App from "../../App";
import carList from "../CarList";

const routes = [
    { path: '/', component: App, name: 'App'},
    { path: '/carlist', component: carList, name: 'CarList'},
];

export default routes;