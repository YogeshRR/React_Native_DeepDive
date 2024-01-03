export default function TabBarButton({ children, isSelect, ...props }) {

    return (<button className={isSelect === true ? 'active' : undefined} {...props}>{children}</button>);
}