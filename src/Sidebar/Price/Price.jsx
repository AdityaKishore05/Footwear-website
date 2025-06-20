import Side from "../../components/Side";

const Price = ({handleChange}) => {
  return (
  <div>
    <h2 className="sidebar-title">Price</h2>
    <div>
        <label htmlFor="" className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test"/><span className="checkmark"></span>All
      </label>
      <div>
        <Side handleChange={handleChange} value={50} title="$0 - $50" name="test2"/>
        <Side handleChange={handleChange} value={100} title="$50 - $100" name="test2" /><Side handleChange={handleChange} value={150} title="$100 - $150" name="test2" />
        <Side handleChange={handleChange} value={200} title="over $150" name="test2" />
      </div>
    </div> 
  </div>
  );
};

export default Price;