import React from 'react'
import './image-item.sass'

type PropsType = {
    id: number
    url: string
    onActiveModal: (id: number) => void
}

export const ImageItem:React.FC<PropsType> = ({id, url, onActiveModal}) => {
    return (
        <div className="image-item" onClick={(e) => onActiveModal(id)} >
            <img src={url} alt="" />
        </div>
    )
}