import React from "react";
import ThemeContexttt from "../context/context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Alltask() {
  const { tasks, remove, finde } = useContext(ThemeContexttt);
  const xxx = useNavigate();
  return (
    <>
      {tasks.length === 0 ? (
        <div
          className="alert alert-danger w-50 mt-5 ms-auto me-auto fs-3 text-center"
          role="alert"
        >
          Not Fond Task !
        </div>
      ) : (
        <>
          <table className="table mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item) => (
                <tr key={item.id}>
                  <td>{item.id + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <button
                      onClick={() => {
                        remove(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        finde(item.id);
                        xxx("/css");
                      }}
                      className="btn btn-info"
                    >
                      Edite
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
