import { useState } from "react";
import Alart from "./Alart";
import ListGroup from "./components/ListGroup";
import MyButton from "./components/button";
import LikeButton from "./components/LikeButton";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/form/form";
import { ExpenseList } from "./expanse-tracker/component/ExpenseList";
import ExpenseFilter from "./expanse-tracker/component/ExpenseFilter";
import ExpanseForm from "./expanse-tracker/component/ExpenseForm";

function App() {
  let items = ["New York", "San francisco", "Dhaka", "london"];
  let countries = ["Bangladesh", "USA", "New York"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alartVisible, setAlartVisibility] = useState(false);
  const handleLikeStatus = (item: string) => {
    // console.log(item);
    // update price object
    // setPrice({ ...price, value: [...price.value, 5] });
    // console.log(price);

    // update fruit object
    setFruit({
      ...fruit,
      items: fruit.items.map((item) =>
        item.id === 1 ? { ...item, price: 100 } : item
      ),
    });
  };

  const [price, setPrice] = useState({
    name: "apple",
    value: [1, 2, 3, 4],
  });
  const [fruit, setFruit] = useState({
    discount: 10,
    items: [
      { id: 1, title: "product 1", name: "apple", price: 500 },
      { id: 2, title: "product 2", name: "mangoo", price: 60 },
    ],
  });
  // console.log(fruit);

  // ExpenseList items
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Groceries" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
  ]);
  const visibleExpanses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={countries}
          heading="Countries"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div className="mb-5">
        {alartVisible && (
          <Alart onClose={() => setAlartVisibility(false)}>My Alart</Alart>
        )}
        <MyButton
          children="Show alart"
          onClick={() => setAlartVisibility(true)}
        ></MyButton>
      </div>
      <LikeButton onSelectItem={handleLikeStatus} />
      <div className="mb-3">
        <ExpandableText MaxChar={50}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          dolores perferendis cumque at possimus beatae et optio neque tempora
          ullam aut sit quis nihil, doloremque atque adipisci unde dolore
          similique dignissimos nisi tempore rerum. Quos obcaecati tempora hic
          molestias voluptatibus delectus rerum ad quaerat libero exercitationem
          maxime veniam quam officiis odio ipsam magnam fugit modi, quia ex sunt
          iure! Libero nam fugiat aperiam veritatis debitis mollitia? Dicta
          eveniet tempore ipsam quae facere, illum voluptates impedit ex vero,
          eius maxime blanditiis minima debitis architecto alias corporis modi
          veniam esse vel? Dolor exercitationem atque ex quibusdam architecto
          aliquid nam ullam magnam perferendis?
        </ExpandableText>
      </div>
      {/* <Form></Form> */}
      <div className="mb-3">
        <ExpanseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpanseForm>
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCatagory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpanses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}
export default App;
