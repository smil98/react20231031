import mycss from "../css/style1.module.css";

export default function MyBox() {
  return (
    <div>
      <h1 className={mycss.boxClass}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}