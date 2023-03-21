import { useEffect, useState } from "react";
import Card from "../../card/card.jsx";
import "./data.css";

// import Card from "./card";

const Data = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://give-me-users-forever.vercel.app/api/users/${counter * 10}/next`
    )
      .then((res) => res.json())
      .then((apidata) => {
        setData(apidata);
      })
      .catch((err) => console.log(err.message));
    setLoading(false);
  }, [counter]);

  const prev = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const next = () => {
    setCounter(counter + 1);
  };

  return loading ? (
    <h1>"Loading"</h1>
  ) : data.users === undefined ? (
    <h1>"Sorry NO Data To Print"</h1>
  ) : (
    <>
      <div className="data">
        {data.users.slice(0, 10).map((user) => {
          return (
            <div key={user.ID}>
              <Card
                id={user.ID}
                name={user.FirstNameLastName}
                job_title={user.JobTitle}
                company={user.Company}
                phone={user.Phone}
                email_1={user.Email}
                email_2={user.EmailAddress}
              />
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Data;
