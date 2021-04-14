import styles from './styles.module.scss';

export function SubscribeButton({
  priceId,
}: ISubscribeButtonProps): JSX.Element {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
