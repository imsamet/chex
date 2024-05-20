import classNames from 'classnames';
import { Icons as IconsType } from '../icons/_model';
import Icons from '../icons/icons';

type Props = {
  label?: string;
  icon?: IconsType;
  size?: 'large' | 'small';
  disabled?: boolean;
  circle?: boolean;
  className?: string;
  onClick?: () => void;
};
const Button: React.FC<Props> = ({ label, icon, size, disabled, circle, className, onClick }) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-between gap-6 h-12 py-3  bg-primary border border-[3px]',
        circle ? 'rounded-full h-fit px-3' : 'pr-4 pl-6 rounded-xl min-w-[130px]',
        className,
      )}
      onClick={onClick}
    >
      {label && <span className="text-sm text-black font-bold leading-[normal]">{label}</span>}
      {icon && <Icons width={24} height={24} name={icon} />}
    </button>
  );
};
export default Button;
