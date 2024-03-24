const Scroll = (props) => {
  return (
    <div className="tc" style={{ overflowY: "scroll", height: "800px" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
