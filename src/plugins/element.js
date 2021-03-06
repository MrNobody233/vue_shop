import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Header,
    Container,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Loading,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    MessageBox,
    Tag,
    Tree,
    Select,
    Option
} from "element-ui";


Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tree)
Vue.use(Tag)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Loading)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm