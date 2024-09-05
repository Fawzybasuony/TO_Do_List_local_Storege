import Header from "../comp/header";
import { useContext, useEffect, useState } from "react";
import ThemeContexttt from "../context/context";
import { useNavigate } from "react-router-dom";

const Css = () => {
  const { editTask, item } = useContext(ThemeContexttt);
  const [title, setTitle] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    if (item !== null) {
      setTitle(item.title);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask({ title: title, id: item.id });
    setTitle("");
    Navigate("/html");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Header />

      {title.length < 1 ? (
        <div
          className="alert alert-danger w-50 mt-5 ms-auto me-auto fs-3 text-center"
          role="alert"
        >
          There is no task to modify !
        </div>
      ) : (
        <div>
          {title && (
            <form className="border p-3 my-3 " onSubmit={handleSubmit}>
              <h1 className="text-center display-4">Edit Task</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={title}
                  placeholder="Type Title of Task"
                />
              </div>
              <center>
                <button type="submit" className="btn btn-success  mt-3">
                  Submit
                </button>
              </center>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Css;
