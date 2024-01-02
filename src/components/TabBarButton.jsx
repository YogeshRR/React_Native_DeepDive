export default function TabBarButton({ children, onSelect, isSelect }) {

    return (<button className={isSelect === true ? 'active' : undefined} onClick={onSelect}>{children}</button>);
}