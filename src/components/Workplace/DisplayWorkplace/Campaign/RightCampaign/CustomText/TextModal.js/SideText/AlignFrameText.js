function AlignFrameText({ id, img, className, defaul }) {
  return (
    <div className="relative">
      <label htmlFor={id}>
        <input
          id={id}
          className="peer absolute invisible"
          type="radio"
          name="alignFrameText"
          defaultChecked={defaul}
        />
        <img
          className={`peer-checked:bg-white peer-checked:filter-none ${className}`}
          src={img}
          alt="align text"
        />
      </label>
    </div>
  );
}

export default AlignFrameText;
