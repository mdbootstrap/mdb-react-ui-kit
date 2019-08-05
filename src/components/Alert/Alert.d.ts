import * as React from 'react';

declare const MDBAlert: React.FunctionComponent<{
    color?: 'default' | 'primary'| 'secondary'| 'success'| 'danger'| 'warning'| 'info'| 'light'| 'dark';
    className?: string;
    children?: React.ReactNode;
    dismiss?: boolean;
    onClose?: () => void;
    onClosed?: () => void;
}>;

export default MDBAlert;