import styles from "@/styles/search.module.scss";
import { Notation } from "./notation";
type SearchTypes = {
  baseColor: string;
  handleSubmit: Function;
  changeFormat: Function;
  changeBaseColor: Function;
  format: "hsl" | "hex" | "rgb";
};

export function Search({
  baseColor,
  handleSubmit,
  changeFormat,
  changeBaseColor,
  format,
}: SearchTypes) {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div
          className={styles.box}
          style={{ backgroundColor: baseColor }}
        ></div>
        <Notation format={format} changeFormat={changeFormat} />
        <input
          type="text"
          className={styles.input}
          value={baseColor}
          onChange={(event) => changeBaseColor(event.target.value)}
        />
        <input
          type="submit"
          className={styles.submit}
          value="Submit"
          onClick={(event) => handleSubmit(event)}
        />
      </div>
    </div>
  );
}
