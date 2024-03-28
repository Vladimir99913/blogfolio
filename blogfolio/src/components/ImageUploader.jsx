import { useState } from 'react'

export function ImageUploader(props) {
  const [imageUrl, setImageUrl] = useState('')

  function handleChange(event) {
    const file = event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  function handleClick() {
    setImageUrl(null)
    props.resetField('image')
  }

  function renderPreview() {
    if (!imageUrl) return null

    return (
      <div className="mt-3" style={{ width: '100%', height: '300px', position: 'relative' }}>
        <img src={imageUrl} alt="preview" className="rounded w-100 d-inline-block mt-4" style={{ width: '100%', height: '100%', objectFit: 'cover', }} />
        <button type="button" className="btn-close" aria-label="Close" style={{ position: 'absolute', top: '0', right: '0' }} onClick={handleClick}></button>
      </div>
    )
  }

  return (
    <>
      <input
        type={props.type}
        id={props.id}
        className={props.className}
        {...props.register('image', { required: 'Fill in the image field' })}
        onChange={handleChange}
      />
      {renderPreview()}
    </>
  )
}
