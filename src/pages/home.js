import { useContext } from "react";
import Header from "../comp/header";
import ThemeContexttt from "../context/context";
import Alltask from "../comp/Alltask";
 
const Home = () => {
  const { detailsInput, subTask, addTask } = useContext(ThemeContexttt);

  return (
    <>
      <Header />
      <center>
        <h1 className="text-center text-dark display-4 mt-5">Add Task</h1>

        <div className="boxadd mt-5">
          <textarea
            className="form-control w-75 "
            id="validationTextarea"
            placeholder="Write here . . ."
            required
            value={subTask}
            onChange={(event) => {
              detailsInput(event);
            }}
          ></textarea>
          <button
            onClick={(e) => {
              addTask();
            }}
            className="btn btn-primary m-2"
          >
            Add Task
          </button>
        </div>
      </center>

      <Alltask />
      <footer class=" ">
      <div>
          Designed and developed by Fawzy
          <span>🧡</span>
      </div>
      </footer>
    </>
  );
};

export default Home;
