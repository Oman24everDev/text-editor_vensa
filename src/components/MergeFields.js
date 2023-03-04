
function DropdownMenu({data}) {

  return (
    <div>
      <select>
        <option value="">Select an item</option>
 
          <option >
            {data.template}
      
          </option>

      </select>
    </div>
  );
}

export default DropdownMenu;
