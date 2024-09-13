import { useFormik } from "formik";
import "./CommentForm.css";
export default function CommentForm() {

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.comment) {
      errors.comment = 'Required';
    } else if (values.comment.length > 20) {
      errors.comment = 'Must be 20 characters or less';
    }
    return errors;
  };
  
//form validation
  const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
      rating: 1,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h2>Leave a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br />
        <label htmlFor="comment">Comment:</label>
        <br />
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.comment}
        ></textarea>
        <br />
        <br />
        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      {      }
      {/* <div>
        {comments.map((obj) => {
          return (
            <p>
              {obj.username}&nbsp;:&nbsp;{obj.comment} &nbsp;{obj.rating}<i style={{margin:"2px"}} class="fa-solid fa-star"></i>
            </p>
          );
        })}
      </div> */}
    </>
  );
}
