import "@/Styles/Dropdown.module.scss";

type Props = {
  name: string;
  // children: any;
};

const DropDown = ({ name,  ...props }: Props) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">{name}</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default DropDown;
