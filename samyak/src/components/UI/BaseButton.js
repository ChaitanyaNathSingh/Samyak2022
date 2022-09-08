const BaseButton = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} type="submit" className="form-control btn btn-primary submit px-3">
      {props.children}
    </button>
  );
};

export default BaseButton;