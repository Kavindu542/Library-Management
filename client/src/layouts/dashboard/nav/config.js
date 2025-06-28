import {FiBookOpen, FiCheckCircle, FiHome, FiList,FiClipboard, FiUsers} from "react-icons/fi";

const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: <FiHome/>,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FiClipboard/>,
  },
  {
    title: 'Books',
    path: '/books',
    icon: <FiBookOpen/>,
  },
  {
    title: 'Authors',
    path: '/authors',
    icon: <FiUsers/>,
  },
  {
    title: 'Genres',
    path: '/genres',
    icon: <FiList/>,
  },
  {
    title: 'Borrowals',
    path: '/borrowals',
    icon: <FiCheckCircle/>,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FiUsers/>,
  },
];

export default navConfig;
