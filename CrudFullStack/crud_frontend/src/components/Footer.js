import '../App.css'

const Footer = () => {
  const link = "";
  const target = "_blank";

  return (
   
      <div className="containerFoot">
        Copyright © <small>{new Date().getFullYear()}</small>
        <a href={link} target={target}>
          Crud App
        </a>
      </div>
 
  );
};

export default Footer;
