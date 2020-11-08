import React, { useState } from 'react';

const BlogForm = (props) => {
  const [title, setTitle] = useState(props.blog ? props.blog.title : '');
  const [description, setDescription] = useState(props.blog ? props.blog.description : '');
  const [error, setError] = useState('');

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Lütfen tüm alanları doldurunuz.');
    } else {
      setError('');
      props.onSubmit({
        title: title,
        description: description,
        dateAdded: Date.now(),
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <input placeholder='Enter Title' value={title} onChange={onTitleChange} />
        </div>
        <div>
          <textarea placeholder='Enter Description' value={description} onChange={onDescriptionChange}></textarea>
        </div>
        <div>
          <button type='submit'>Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
