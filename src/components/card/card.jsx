import "./card.css";

const Card = ({id,name,job_title,company,phone,email_1,email_2}) => {
  return (
    
      <div class="card">
        <p>
          <strong>{id}</strong>
        </p>
        <p>
          Name: <strong>{name}</strong>{" "}
        </p>
        <p>
          Job Title: <strong>{job_title}</strong>{" "}
        </p>
        <p>
          Company: <strong>{company}</strong>{" "}
        </p>
        <p>
          Phone: <strong>{phone}</strong>{" "}
        </p>
        <p>
          Email-1: <strong>{email_1}</strong>{" "}
        </p>
        <p>
          Email-2: <strong>{email_2}</strong>{" "}
        </p>
      </div>
    
  );
};

export default Card;
