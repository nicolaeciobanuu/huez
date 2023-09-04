import styles from "@/styles/color.module.scss";
export function Color({
  color,
  name,
  format,
}: {
  color: any;
  format: string;
  name: string;
}) {
  var backgroundColor;
  if (format === "rgb") {
    const [r, g, b] = color;
    backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  } else if (format === "hsl") {
    var [h, s, l] = color;
    h = Math.round(h) | 0;
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    backgroundColor = "hsl(" + h + ", " + s + "%, " + l + "%)";
    ``;
  } else {
    backgroundColor = color;
  }

  return (
    <div className={styles.color}>
      <div
        style={{ backgroundColor: backgroundColor }}
        onClick={() => navigator.clipboard.writeText(backgroundColor)}
        className={styles.box}
      ></div>
      <div className={styles.flex}>
        <p className={styles.name}>{name}</p>
        <p className={styles.value}>{backgroundColor}</p>
      </div>
    </div>
  );
}
