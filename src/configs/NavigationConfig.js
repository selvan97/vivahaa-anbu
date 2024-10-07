import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "Home",
    path: `${AUTH_PREFIX_PATH}/Home`,
    title: "Home",
    // icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [],
  },
];

const appsNavTree = [
  {
    key: "apps",
    path: `${APP_PREFIX_PATH}/apps`,
    title: "About Us",
    breadcrumb: false,
    isGroupTitle: false,
    submenu: [],
  },
];

const componentsNavTree = [
  {
    key: "components",
    path: `${APP_PREFIX_PATH}/components`,
    title: "Services",
    breadcrumb: false,
    isGroupTitle: false,
    submenu: [],
  },
];

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
  ...componentsNavTree,
];

export default navigationConfig;
