import React from 'react'
import styles from "@/components/legal-services/legalservices.module.css"
import Image from 'next/image'
const CardImg = ({imgStyle , path}) => {    
  return (
    <Image src={path} width={300} height={300} className={styles[imgStyle]} alt='the image for vision section'/>

  )
}

export default CardImg
