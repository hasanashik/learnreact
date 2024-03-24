import categories from "../categories";
interface Props {
  onSelectCatagory: (category: string) => void;
}
function ExpenseFilter({ onSelectCatagory }: Props) {
  return (
    <select
      id="select"
      className="form-select"
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option id="all" value="">
        All categories
      </option>
      {categories.map((category) => (
        <option id={category} value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
