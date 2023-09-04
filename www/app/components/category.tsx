import { Color } from "./color";
import styles from "@/styles/category.module.scss";
export function Category({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string | number;
}) {
  return (
    <div className={styles.category}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.flex}>{children}</div>
    </div>
  );
}
