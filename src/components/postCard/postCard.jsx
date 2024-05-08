import React from 'react'
import styles from "./postCard.module.css"
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum consequuntur non ratione. Explicabo, blanditiis voluptatibus quis repellat aperiam a. Ab autem iure officia consequatur molestiae illum nisi nostrum facere?</p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
