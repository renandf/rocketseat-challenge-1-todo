import iconClipboard from '../assets/icon-clipboard.svg'

import styles from './Placeholder.module.css'

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <img src={iconClipboard} alt="Clipboard icon" />
      <p><strong>There are no tasks on your list.</strong></p>
      <p>Add tasks and organize your to-dos.</p>
    </div>
  )
}

export default Placeholder