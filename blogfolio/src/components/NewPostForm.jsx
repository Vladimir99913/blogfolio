import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchCreatePost, fetchDataById, setNewPost } from '../redux/posts-slice'
import { ImageUploader } from './ImageUploader'
import { NavLink, useNavigate } from 'react-router-dom'

export function NewPostForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const newPost = useSelector(state => state.posts.newPost)
  const { register, resetField, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    if (!newPost) return

    navigate(`/posts/${newPost.id}`)

    dispatch(setNewPost())

  }, [newPost])

  const onSubmit = data => {
    const formData = new FormData()

    for (const field in data) {
      if (data[field] instanceof FileList) {
        formData.append(field, data[field][0])
      } else {
        formData.append(field, data[field])
      }
    }
    console.log(data)
    dispatch(fetchCreatePost(formData))
  }

  function renderErrorMessage() {
    if (!Object.keys(errors).length) return

    return (
      <div className="alert alert-danger" role="alert">
        The Form has empty fields!
      </div>
    )
  }

  return (
    <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
      {/* {renderErrorMessage()} */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          id="title"
          {...register('title', { required: 'Fill in the title field' })} />
        <div className={`${errors.title ? 'alert alert-danger mt-2' : ''}`} role="alert">
          {errors.title?.message}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="lessonNumber" className="form-label">Lesson number</label>
        <input
          type="number"
          className={`form-control ${errors.lesson_num ? 'is-invalid' : ''}`}
          id="lessonNumber"
          {...register('lesson_num', { required: 'Fill in the lesson_num field' })} />
        <div className={`${errors.lesson_num ? 'alert alert-danger mt-2' : ''}`} role="alert">
          {errors.lesson_num?.message}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          id="description"
          rows="3"
          {...register('description', { required: 'Fill in the description field' })}></textarea>
        <div className={`${errors.description ? 'alert alert-danger mt-2' : ''}`} role="alert">
          {errors.description?.message}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Text</label>
        <textarea
          className={`form-control ${errors.text ? 'is-invalid' : ''}`}
          id="text"
          rows="6"
          {...register('text', { required: 'Fill in the text field' })}></textarea>
        <div className={`${errors.text ? 'alert alert-danger mt-2' : ''}`} role="alert">
          {errors.text?.message}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <ImageUploader
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
          type="file"
          id="image"
          register={register}
          resetField={resetField}
        />
        <div className={`${errors.image ? 'alert alert-danger mt-2' : ''}`} role="alert">
          {errors.image?.message}
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3 float-end" disabled={Object.keys(errors).length}>Create post</button>
    </form>
  )
}
