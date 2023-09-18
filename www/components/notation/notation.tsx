import styles from "./notation.module.scss";

export function Notation({
  changeFormat,
  format,
}: {
  changeFormat: Function;
  format: "hsl" | "hex" | "rgb";
}) {
  return (
    <select className={styles.select} value={format}>
      <option value="hex" onClick={() => changeFormat("hex")}>
        hex
      </option>
      <option value="rgb" onClick={() => changeFormat("rgb")}>
        rgb
      </option>
      <option value="hsl" onClick={() => changeFormat("hsl")}>
        hsl
      </option>
    </select>
  );
}
