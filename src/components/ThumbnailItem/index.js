// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {EachimageList, changeImage, isClicked} = props
  const {
    id,
    thumbnailUrl,
    thumbnailAltText,
    imageUrl,
    imageAltText,
  } = EachimageList

  const onChnageImage = () => {
    changeImage(id, imageUrl, imageAltText)
  }

  const filteredIcon = isClicked ? 'list-icon active-icon' : 'list-icon'

  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={filteredIcon}
          onClick={onChnageImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
