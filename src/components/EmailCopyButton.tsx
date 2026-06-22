import { Copy } from 'lucide-react';

type EmailCopyButtonProps = {
  email: string;
  onCopy: () => void;
  variant?: 'text' | 'icon';
};

export function EmailCopyButton({ email, onCopy, variant = 'text' }: EmailCopyButtonProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    onCopy();
  };

  return (
    <button
      className={variant === 'icon' ? 'icon-action' : 'text-action'}
      type="button"
      onClick={handleCopy}
      aria-label="이메일 주소 복사"
    >
      <Copy size={16} aria-hidden="true" />
      {variant === 'text' ? '이메일 복사' : null}
    </button>
  );
}
