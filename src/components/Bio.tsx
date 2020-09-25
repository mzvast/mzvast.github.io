import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "mzvast@gmail.com",
    size: 56,
  })

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Personal blog by <a href="https://twitter.com/mzvast/">mzvast</a>.
        <br />
        If Nothing Changes, Nothing Is Going to Change
      </p>
    </div>
  )
}

export default Bio
