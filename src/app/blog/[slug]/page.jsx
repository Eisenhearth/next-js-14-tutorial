import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
         <Image className={styles.avatar} src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={50} height={50} />
         <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jordan Michael</span>
         </div>
         <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01-24</span>
         </div>
        </div>

        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at eveniet ex nesciunt accusantium amet a. Iure quos ad tempora vero, a at nesciunt odio, quo libero voluptatum dolorem quaerat.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
