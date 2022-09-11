import React from 'react';
export interface  TabProps {
    id: number;
    name:string;
    content?: string;
    
}
interface TabItemProps {
    tab: TabProps;
    tabNumber: number;
    onShowTab: (id: any) => void;
}

const Tab: React.FC<TabItemProps> = ({ tab, tabNumber, onShowTab }) => {
    
    
    const handleClick= ()=> {
        sessionStorage.setItem('tabNumber', tab.id.toString());
        onShowTab(tab.id);
    };

    return (
        <li>
            
                <button className={tabNumber === tab.id ? 'current': 'normal'} onClick={handleClick}>{tab.name}</button>
        </li>
    );
};

export default Tab;
