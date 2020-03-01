/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

 import TableList from "./views/TableList.jsx";
 import UserProfile from "./views/UserProfile.jsx";
import NewsForm from "./views/NewsForm.jsx";
import EventsForm from "./views/EventsForm.jsx";
import ProjectsForm from "./views/ProjectsForm.jsx";
var routes = [
 
  {
    path: "/members",
    name: "Add member",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "news",
    icon: "tim-icons icon-single-02",
    component: NewsForm,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Events",
    icon: "tim-icons icon-single-02",
    component: EventsForm,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "tim-icons icon-single-02",
    component: ProjectsForm,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },

];
export default routes;
