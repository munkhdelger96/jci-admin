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

import MemberList from "./views/MemberList.jsx";
import NewsList from "./views/NewsList.jsx";
import ProjectList from "./views/ProjectList.jsx";
import EventList from "./views/EventList.jsx";
import UserProfile from "./views/UserProfile.jsx";
import NewsForm from "./views/NewsForm.jsx";
import EventsForm from "./views/EventsForm.jsx";
import ProjectsForm from "./views/ProjectsForm.jsx";

var routes = [
  {
    path: "/members/add",
    name: "Add member",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/news/add",
    name: "Add news",
    icon: "tim-icons icon-single-02",
    component: NewsForm,
    layout: "/admin"
  },
  {
    path: "/events/add",
    name: "Add event",
    icon: "tim-icons icon-single-02",
    component: EventsForm,
    layout: "/admin"
  },
  {
    path: "/projects/add",
    name: "Add project",
    icon: "tim-icons icon-single-02",
    component: ProjectsForm,
    layout: "/admin"
  },
  {
    path: "/members",
    name: "Member list",
    icon: "tim-icons icon-user-run",
    component: MemberList,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News list",
    icon: "tim-icons icon-single-copy-04",
    component: NewsList,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Project list",
    icon: "tim-icons icon-world",
    component: ProjectList,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Event list",
    icon: "tim-icons icon-calendar-60",
    component: EventList,
    layout: "/admin"
  },
];
export default routes;
