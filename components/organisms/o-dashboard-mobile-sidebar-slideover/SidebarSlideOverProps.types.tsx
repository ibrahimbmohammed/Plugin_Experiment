import React from 'react';

export interface ISidebarSlideOverProps {
    openSidebar?: boolean;
    toggleOpenSidebar: () => void;
    // toggleOpenSidebar: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
}
