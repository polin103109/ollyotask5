import styles from './DragandDrop.module.scss'
import React from "react";
interface DragableProps {
    dragHandle?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const Dragable = ({
    children,
   className,
    style,
}: DragableProps) => {
    return (
        <div className={`${styles.draggableWrapper}`}>
            <div className={`${styles.draggable} ${className}`} style={style}>
                <div className={`${styles.dragHandle} draghandle`}>
                &#x2630;
                    {/* {dragHandle ? dragHandle :<icon></icon>} */}
                </div>
                <div className={styles.dragContent}>{children}</div>
            </div>
        </div>
    );
};