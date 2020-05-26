import React, { useEffect, useState } from 'react';
import './App.sass';
import { getImages, imagesList } from './api/api'
import { ImageItem } from './component/image-item/image-item';
import { Modal } from './component/image-item/modalIcon/modal';
import { Preloader } from './component/image-item/common/Preloader';
import { CSSTransition } from 'react-transition-group';

export type SubmitType = {
  name: string,
  comment: string
}

export const App: React.FC = () => {

  /* ===UseState=== */
  let [imagesLIst, setImagesList] = useState<Array<imagesList> | null>(null)
  let [imageInfo, setImageInfo] = useState<imagesList | null>(null)
  let [isOpen, setIsOpen] = useState(false)
  const [showPreloader, setShowPreloader] = useState<boolean | null>(null)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  useEffect(() => {
    setShowPreloader(true)
    getImages.getImage().then(data => {
      setImagesList(data)
      setShowPreloader(false)
    })
  }, [])

  const onActiveModal = (id: number) => {
    setShowPreloader(true)
    getImages.getInfoOfImage(id).then(data => {
      setImageInfo(data)
      setIsOpen(true)
      setShowPreloader(false)
    })
  }

  const images = imagesLIst?.map(imageItem => {
    return (
      <ImageItem id={imageItem.id} url={imageItem.url} onActiveModal={onActiveModal} key={imageItem.id} />
    )
  })


  const onSubmit = (data: SubmitType | Record<string, any>) => {
    getImages.addCommentForImage(imageInfo?.id!, data)
  }

  if (showPreloader) return <Preloader />

  return (
    <div className="container">
      <h1>TEST APP</h1>
      <div className="images-list">
        {images}
      </div>
      <CSSTransition in={isOpen} timeout={500} classNames="my-node" mountOnEnter unmountOnExit>
        <Modal url={imageInfo?.url} comments={imageInfo?.comments!} id={imageInfo?.id!} setIsOpen={setIsOpen} onSubmit={onSubmit} />
      </CSSTransition>
    </div>

  );
}

