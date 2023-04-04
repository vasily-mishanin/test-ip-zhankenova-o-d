import styles from './Button.module.css';

type ButtonProps = {
  kind: 'LINK' | 'BUTTON';
  type: 'submit' | 'button';
  color: 'default' | 'success' | 'danger';
  size: 'lg' | 'md';
  displayType: 'block' | 'inline' | 'inline-block';
  text: string;
  to?: string;
  onClick: () => void;
};

export default function Button({
  kind,
  type = 'button',
  color,
  size,
  displayType,
  text,
  to,
}: ButtonProps) {
  const colorStyle = styles[color];
  const sizeStyle = styles[size];
  const displayStyle = styles[displayType];
  const buttonClass = [styles.btn, colorStyle, sizeStyle, displayStyle].join(
    ' '
  );
  const button = (
    <button className={buttonClass} type={type}>
      <p className={styles.inner}>
        {' '}
        <span>{text}</span>
      </p>
    </button>
  );
  const linkClass = [styles.link, colorStyle, sizeStyle, displayStyle].join(
    ' '
  );

  const link = (
    <a className={linkClass} href={to}>
      <p className={styles.inner}>
        {' '}
        <span>{text}</span>
      </p>
    </a>
  );

  return (
    <>
      {kind === 'BUTTON' && button}
      {kind === 'LINK' && link}
    </>
  );
}
