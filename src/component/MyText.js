import myStyle from "../style/mystyle.module.css";
export default function MyText() {
  return (
    <div>
      <h1 className={`${myStyle.error} ${myStyle.error} ${myStyle.coffee}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[myStyle.error, myStyle.error, myStyle.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
