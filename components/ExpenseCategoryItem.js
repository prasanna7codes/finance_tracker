import { currencyFormatter } from "@/lib/utils";

function ExpenseCategoryItem({ color, title, total }) {
  return (
    <button>
      <div className="flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl">
        <div className="flex items-center gap-2">
          <div
            className="w-[25px] h-[25px] rounded-full"
            style={{ backgroundColor: color }}
          />
          <h4 className="capitalize">{title}</h4>
        </div>
        <p>{currencyFormatter(total)}</p>
      </div>
    </button>
  );
}

export default ExpenseCategoryItem;




//could have alos used props in this way
// function ExpenseCategoryItem(props) {
//     const color = props.color;
//     const title = props.title;
//     const total = props.total;
//     
//   }